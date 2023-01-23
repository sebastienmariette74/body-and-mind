<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserModule;
use App\Form\RegistrationType;
use App\Repository\ModuleRepository;
use App\Repository\UserRepository;
use App\Security\UserAuthenticator;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security\UserAuthenticator as SecurityUserAuthenticator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class RegisterPartnerController extends AbstractController
{
    #[Route('/enregistrement/partenaire', name: 'app_register_partner')]
    public function index(
        Request $request, 
        UserPasswordHasherInterface $userPasswordHasher, 
        UserAuthenticatorInterface $userAuthenticator, 
        EntityManagerInterface $entityManager, 
        SluggerInterface $slugger, 
        SendMailService $mail, 
        JWTService $jwt,
        ModuleRepository $moduleRepository
    ): Response
    {               
        // $partner = new User();
        // $form = $this->createForm(RegistrationType::class, $partner);
        // $form->remove('slug');
        // $form->remove('partner');
        // $form->handleRequest($request);
        // $modules = $moduleRepository->findAll();

        // if ($form->isSubmitted() && $form->isValid()) {
        //     $modules = $moduleRepository->findAll();
        //     $tableUserModule = [];
        //     foreach($modules as $module){
        //         if(isset($_POST[$module->getSlug()])){
        //             $userModule = new UserModule();
        //             $userModule->setIsActivated(true);
        //             $userModule->setUser($partner);
        //             $userModule->setModule($module);
        //             $tableUserModule[] = $userModule;
        //         } else {
        //             $userModule = new UserModule();
        //             $userModule->setIsActivated(false);
        //             $userModule->setUser($partner);
        //             $userModule->setModule($module);
        //             $tableUserModule[] = $userModule;
        //         }                
        //     }

        //     $partner->setRoles(['ROLE_PARTNER']);
        //     $partner->setSlug($slugger->slug($partner->getName())->lower());
        //     // encode the plain password
        //     $partner->setPassword(
        //         $userPasswordHasher->hashPassword(
        //             $partner,
        //             $form->get('plainPassword')->getData()
        //         )
        //     );

        //     $entityManager->persist($partner);
        //     foreach($tableUserModule as $userModule){
        //         $entityManager->persist($userModule);
        //     }
        //     $entityManager->flush();

        //     $header = [
        //         'typ' => 'JWT',
        //         'alg' => 'HS256'
        //     ];
        //     $payload = [
        //         'user_id' => $partner->getId()
        //     ];
        //     $token = $jwt->generate($header, $payload, $this->getParameter('app.jwtsecret'));

        //     $mail->send(
        //         'noreply@bodyandmind.fr',
        //         $partner->getEmail(),
        //         'Activation de votre compte sur le site Body & Mind',
        //         'register',
        //         compact('partner', 'token')
        //     );

        //     $this->addFlash('success', 'Email envoyé avec succès');

        //     return $this->redirectToRoute("partners_");

        // }
        // return $this->renderForm('register_partner/index.html.twig', compact('form', 'modules'));        
        return $this->render('app_home');        
    }

    #[Route('/verif/{token}', name: 'verify_user')]
    public function verifyUser($token, JWTService $jwt, UserRepository $userRepository, EntityManagerInterface $em): Response
    {

        if($jwt->isValid($token) && !$jwt->isExpired($token) && $jwt->check($token, $this->getParameter('app.jwtsecret'))){
            
            $payload = $jwt->getPayload($token);
            
            $user = $userRepository->find($payload['user_id']);
            
            if($user && !$user->isVerified()){
                $user->setIsVerified(true);
                $em->flush($user);
                $this->addFlash('success', 'Utilisateur activé');
                return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);
            }
        }
        if ($user->isVerified()){
            $this->addFlash('danger', 'Le compte est déjà activé');
        } else {            
            $this->addFlash('danger', 'Le token est invalide ou a expiré');
        }

        return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);
    }

#[Route('/renvoiverif', name: 'resend_verif')]
public function resendVerif(JWTService $jwt, SendMailService $mail, UserRepository $userRepository): Response
{
    $user = $this->getUser();

    if(!$user){
        $this->addFlash('danger', 'Vous devez être connecté pour accéder à cette page');
        return $this->redirectToRoute('app_login');    
    }

    if($user->isVerified()){
        $this->addFlash('warning', 'Cet utilisateur est déjà activé');
        return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);    
    }

    $header = [
        'typ' => 'JWT',
        'alg' => 'HS256'
    ];
    $payload = [
        'user_id' => $user->getId()
    ];
    $token = $jwt->generate($header, $payload, $this->getParameter('app.jwtsecret'));
    
    $mail->send(
        'no-reply@monsite.net',
        $user->getEmail(),
        'Activation de votre compte sur le site e-commerce',
        'register',
        compact('user', 'token')
    );
    $this->addFlash('success', 'Email de vérification envoyé');
    if ($this->isGranted('ROLE_PARTNER')) {
        return $this->redirectToRoute('partners_details', ['slug' => $user->getSlug()]);
    } else if($this->isGranted('ROLE_STRUCTURE')) {
        return $this->redirectToRoute('structures_details', ['slug' => $user->getSlug()]);
    };
}
}
