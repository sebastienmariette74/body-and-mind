<?php

namespace App\Controller;

use App\Entity\Module;
use App\Entity\User;
use App\Entity\UserModule;
use App\Form\RegistrationType;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use App\Service\JWTService;
use App\Service\PaginationService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/partenaires', name: 'partners_')]
class PartnerController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository, 
        private EntityManagerInterface $em, 
        private UserModuleRepository $userModuleRepository,
        private PaginationService $pagination
    ){}

    #[Route('/', name: '')]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $filter = $request->get('filter');
        if (!$request->get('ajax')) {

            if ($request->get("filter") != "") {
                if (
                    $request->get("filter") == "activated" || 
                    $request->get("filter") == "all"  || $request->get("filter") == "disabled") {
                    $filter = htmlentities($request->get("filter"));
                } else {
                    return $this->render('errors/error.html.twig');
                }
            }

            $paginate = $this->pagination->pagination($request, $this->userRepository, 9, "getPaginated", null, "ROLE_PARTNER", null, "getTotal");
            $partners = $paginate['partners'];
            $total = $paginate['total'];
            $limit = $paginate['limit'];
            $page = $paginate['page'];

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }

            return $this->render('partner/index.html.twig', compact('partners', 'role', 'total', 'limit', 'page', 'filter'));
        } else {
            
            if ($request->get("filter") != "") {
                if (
                    $request->get("filter") == "activated" || 
                    $request->get("filter") == "all"  || 
                    $request->get("filter") == "disabled") {
                    $filter = htmlentities($request->get("filter"));
                } else {
                    return $this->render('errors/error.html.twig');
                }
            }

            $query = htmlentities($request->get("query"));
            $paginate = $this->pagination->pagination(
                $request, $this->userRepository, 
                9, 
                "getPaginated", 
                $filter, 
                "ROLE_PARTNER", 
                $query, 
                "getTotal"
            );
            $partners = $paginate['partners'];
            $total = $paginate['total'];
            $limit = $paginate['limit'];
            $page = $paginate['page'];

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            
            return $this->render('partner/_content.html.twig', compact('partners', 'role', 'total', 'limit', 'page'));
        }
    }

    #[Route('/{slug}', name: 'details')]
    public function show(User $partner, UserInterface $user, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PARTNER');

        if ($user->getUserIdentifier() === $partner->getEmail() || $this->isGranted('ROLE_ADMIN')) {

            $userId = $partner->getId();
            $structures = $this->userRepository->findAllStructuresByPartner($userId);
            $modules = $this->userModuleRepository->findModulesByUser($userId);
            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            return $this->render('partner/details.html.twig', compact('partner', 'role', 'structures', 'modules'));
        } else {
            return $this->render('bundles/TwigBundle/Exception/error404.html.twig');
        }
    }

    #[Route('/{slug}/active-user', name: 'activate_user')]
    public function activateUser(User $user, UserRepository $userRepository, SendMailService $mail, Request $request, PaginationService $pagination): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $partners = $userRepository->findAllByRole("ROLE_PARTNER");

        if ($user->getRoles()[0] === 'ROLE_PARTNER') {
            $user->setIsActivated(($user->isIsActivated()) ? false : true);
            $structures = $userRepository->findAllStructuresByPartner($user->getId());
            $tableStructures = [];
            foreach ($structures as $structure) {
                $tableStructures[] = $structure;
                if ($structure->getPartner()->isIsActivated() === false && $structure->isIsActivated() === true) {
                    $structure->setIsActivated(false);
                    $type = "structure";
                    $partner = $user;
                    $mail->send(
                        'noreply@bodyandmind.fr',
                        $structure->getEmail(),
                        'Changement du statut de votre compte sur le site Body & Mind',
                        'info_state_partner',
                        compact('structure', 'partner', 'type')
                    );
                }
            }

            foreach ($tableStructures as $structure) {
                $this->em->persist($structure);
            }

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }

            $this->em->persist($user);
            $this->em->flush();

            $type = 'partner';
            $partner = $user;

            $mail->send(
                'noreply@bodyandmind.fr',
                $user->getEmail(),
                'Changement du statut de votre compte sur le site Body & Mind',
                'info_state_partner',
                compact('partner', 'type')
            );

            $this->addFlash('success', 'Email(s) envoyé(s) avec succès');

            $filter = $request->get('filter');
            $query = $request->get('query');
            $paginate = $pagination->pagination($request, $userRepository, 9, "getPaginated", $filter, "ROLE_PARTNER", $query, "getTotal");
            $partners = $paginate['partners'];
            $total = $paginate['total'];
            $limit = $paginate['limit'];
            $page = $paginate['page'];

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            return $this->render('partner/_content.html.twig', compact('partners', 'role', 'total', 'limit', 'page'));
        }

        if ($user->getRoles()[0] === 'ROLE_STRUCTURE') {

            $user->setIsActivated($user->isIsActivated() ? false : true);

            $structures = $userRepository->findAllStructuresByPartner($user->getPartner());

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            $this->em->persist($user);
            $this->em->flush();

            $type = 'structure';

            $structure = $user;
            $partner = $user->getPartner();
            $mail->send(
                'noreply@bodyandmind.fr',
                $user->getEmail(),
                'Changement du statut de votre compte sur le site Body & Mind',
                'info_state_partner',
                compact('structure', 'type', 'partner')
            );

            $type = 'partner';
            $mail->send(
                'noreply@bodyandmind.fr',
                $user->getPartner()->getEmail(),
                'Changement du statut de votre compte sur le site Body & Mind',
                'info_state_partner',
                compact('structure', 'type', 'partner')
            );

            $this->addFlash('success', 'Email(s) envoyé(s) avec succès');

            $partner = $user->getPartner();
            return $this->render("partner/_cards.html.twig", compact('partner', 'role', 'structures'));
        }
    }

    #[Route('/{slug}/{id}/active-module', name: 'activate_module')]
    public function activateModule(Module $module, string $slug, string $id, User $user): Response
    {
        $partner = $this->userRepository->findUserBySlug($slug);
        $module = $this->userModuleRepository->findModule($slug, $id);
        $structures = $this->userRepository->findAllStructuresByPartner($partner->getId());
        
            if ($module->isIsActivated()) {
                $module->setIsActivated(false);
                foreach($structures as $structure){
                    $module = $this->userModuleRepository->findModuleByStructureById($structure->getId(), $id);
                    $module->setIsActivated(false);
                }
            } else {
                $module->setIsActivated(true);
            }
        
        $this->em->persist($module);
        $this->em->flush();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }
        
        $modules = $this->userModuleRepository->findModulesByUser($partner->getId());

        return $this->render("partner/_modules.html.twig", compact('partner', 'role', 'structures', 'modules'));        
    }

    #[Route('/{slug}/ajouter-une-structure', name: 'add_structure')]
    public function addStructure(
        User $partner,
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        SluggerInterface $slugger,
        EntityManagerInterface $entityManager,
        string $slug,
        JWTService $jwt,
        SendMailService $mail,
        UserModuleRepository $userModuleRepository
    ): Response {

        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $structure = new User();
        $form = $this->createForm(RegistrationType::class, $structure);
        $form->remove('slug');
        $form->remove('partner');
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
            $structure->setPartner($partner);

            $structure->setIsActivated($partner->isIsActivated() ? true : false);

            $modules = $userModuleRepository->findUserModulesByUser($partner->getid());
            $tableUserModule = [];
            foreach ($modules as $module) {
                $userModule = new UserModule();
                $userModule->setIsActivated($module->isIsActivated());
                $userModule->setUser($structure);
                $userModule->setModule($module->getModule());
                $tableUserModule[] = $userModule;
            }

            $entityManager->persist($structure);
            foreach ($tableUserModule as $userModule) {
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
                $partner->getEmail(),
                'Activation de votre compte sur le site Body & Mind',
                'register',
                compact('structure', 'token')
            );

            $structureName = $structure->getName();
            $subject = `Activation du compte de la salle de sport : ${structureName}`;
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

            return $this->redirectToRoute('partners_details', ['slug' => $partner->getSlug()]);
        }
        return $this->renderForm('partner/add_structure.html.twig',  compact('structure', 'partner', 'form'));
    }

    #[Route('/{slug}/modifications', name: 'edit')]
    public function edit(
        User $partner,
        Request $request,
        SluggerInterface $slugger
    ): Response {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $form = $this->createForm(RegistrationType::class, $partner);
        $form->remove('plainPassword');
        $form->remove('partner');
        $form->remove('isActivated');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $partner->setSlug($slugger->slug($partner->getName())->lower());
            $this->em->persist($partner);
            $this->em->flush();
            return $this->redirectToRoute('partners_');
        }

        return $this->renderForm('partner/edit.html.twig',  compact('partner', 'form'));
    }

    #[Route('/{slug}/{id}', name: 'delete')]
    public function delete(User $partner)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $this->em->remove($partner);
        $this->em->flush();

        $this->addFlash('success', 'Utilisateur supprimé.');

        return $this->redirectToRoute('partners_');
    }

    #[Route('/verif/{token}', name: 'verify_user')]
    public function verifyUser($token, JWTService $jwt, UserRepository $userRepository, EntityManagerInterface $em): Response
    {
        
        if ($jwt->isValid($token) && !$jwt->isExpired($token) && $jwt->check($token, $this->getParameter('app.jwtsecret'))) {

            $payload = $jwt->getPayload($token);
            
            $user = $userRepository->find($payload['user_id']);
            
            if ($user && !$user->isVerified()) {
                $user->setIsVerified(true);
                $em->flush($user);
                $this->addFlash('success', 'Utilisateur activé');
                return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);
            }
        }
        
        $this->addFlash('danger', 'Le token est invalide ou a expiré');

        return $this->redirectToRoute('app_login');
    }

    #[Route('/renvoiverif', name: 'resend_verif')]
    public function resendVerif(JWTService $jwt, SendMailService $mail, UserRepository $userRepository): Response
    {
        $user = $this->getUser();

        if (!$user) {
            $this->addFlash('danger', 'Vous devez être connecté pour accéder à cette page');
            return $this->redirectToRoute('app_login');
        }

        if ($user->isVerified()) {
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
        } else if ($this->isGranted('ROLE_STRUCTURE')) {
            return $this->redirectToRoute('structures_details', ['slug' => $user->getSlug()]);
        };
    }

}
