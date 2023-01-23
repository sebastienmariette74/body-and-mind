<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserModule;
use App\Form\RegistrationType;
use App\Repository\ModuleRepository;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class RegisterStructureController extends AbstractController
{
    #[Route('/enregistrement/structure', name: 'app_register_structure')]
    public function index(
        Request $request, 
        UserPasswordHasherInterface $userPasswordHasher, 
        UserAuthenticatorInterface $userAuthenticator , 
        EntityManagerInterface $entityManager, 
        SluggerInterface $slugger,
        SendMailService $mail, 
        JWTService $jwt,
        UserRepository $userRepository,
        ModuleRepository $moduleRepository,
        UserModuleRepository $userModuleRepository
    ): Response
    {               
        $structure = new User();
        $form = $this->createForm(RegistrationType::class, $structure);  
        $form->remove('slug');
        $form->remove('isActivated');

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $structure->setRoles(['ROLE_STRUCTURE']);
            $structure->setSlug($slugger->slug($structure->getName())->lower());
            $structure->setPassword(
                $userPasswordHasher->hashPassword(
                    $structure,
                    $form->get('plainPassword')->getData()
                )
            );
            $partner = $structure->getPartner();
            $structure->setIsActivated($partner->isIsActivated() ? true:false);
            $modules = $userModuleRepository->findUserModulesByUser($partner->getid());
            $tableUserModule = [];
            foreach($modules as $module){
                $userModule = new UserModule();
                $userModule->setIsActivated($module->isIsActivated());
                $userModule->setUser($structure);
                $userModule->setModule($module->getModule());
                $tableUserModule[] = $userModule;
            }

            $entityManager->persist($structure);
            foreach($tableUserModule as $userModule){
                $entityManager->persist($userModule);
            }
            $entityManager->flush();

            $header = [
                'typ' => 'JWT',
                'alg' => 'HS256'
            ];

            $payload = [
                'user_id' => $structure->getId()
            ];

            $token = $jwt->generate($header, $payload, $this->getParameter('app.jwtsecret'));
            
            $mail->send(
                'noreply@bodyandmind.fr',
                $structure->getEmail(),
                'Activation de votre compte sur le site Body & Mind',
                'register',
                compact('structure', 'token')
            );

            $structureName = $structure->getName();
            $subject = `Activation du compte de la salle de sport : $structureName}`;
            $slug = $structure->getSlug();
            $url = $this->generateUrl('structures_details', ['slug' => $slug], UrlGeneratorInterface::ABSOLUTE_URL);

            $mail->send(
                'noreply@bodyandmind.fr',
                $partner->getEmail(),
                'Activation du compte de votre salle de sport',
                'info_partner',
                compact('structure', 'url', 'partner')
            );

            $this->addFlash('success', 'Emails envoyés avec succès');

            return $this->redirectToRoute('structures_');
        }

        return $this->renderForm('register_structure/index.html.twig', compact('form'));
    }
}
