<?php

namespace App\Controller;

use App\Entity\Module;
use App\Entity\User;
use App\Form\RegisterStructureType;
use App\Form\RegistrationType;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use App\Service\PaginationService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

#[Route('/structures', name: 'structures_')]
class StructureController extends AbstractController
{
    public function __construct(private UserRepository $userRepo, private UserModuleRepository $userModuleRepository, private EntityManagerInterface $em)
    {
    }

    #[Route('/', name: '')]
    public function index(Request $request, PaginationService $pagination): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $filter = $request->get('filter');
        if (!$request->get('ajax')) {

            $paginate = $pagination->pagination($request, $this->userRepo, 9, "getPaginated", null, "ROLE_STRUCTURE", null, "getTotal");
            $structures = $paginate['partners'];
            $total = $paginate['total'];
            $limit = $paginate['limit'];
            $page = $paginate['page'];

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }

            return $this->render('structure/index.html.twig', compact('structures', 'role', 'total', 'limit', 'page', 'filter'));
        } else {
            $filter = $request->get('filter');
            $query = $request->get('query');
            $paginate = $pagination->pagination($request, $this->userRepo, 9, "getPaginated", $filter, "ROLE_STRUCTURE", $query, "getTotal");
            $structures = $paginate['partners'];
            $total = $paginate['total'];
            $limit = $paginate['limit'];
            $page = $paginate['page'];

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            // return new Response('true');
            return $this->render('structure/_content.html.twig', compact('structures', 'role', 'total', 'limit', 'page'));
        }

        // $structures = $this->userRepository->findAllByRole("ROLE_STRUCTURE");
        // // dd($structures);

        // if ($this->isGranted('ROLE_ADMIN')) {
        //     $role = "admin";
        // } else {
        //     $role = "";
        // }

        // if ($request->isXmlHttpRequest()) {
        //     return new JsonResponse([
        //         "content" => $this->renderView("structure/_content.html.twig", compact('structures', 'role'))
        //     ]);
        // }

        // return $this->render('structure/index.html.twig', compact('structures', 'role'));
    }

    // #[Route('/all', name: 'all')]
    // public function all(): Response
    // {
    //     $structures = $this->userRepository->findAllByRole("ROLE_STRUCTURE");

    //     if ($this->isGranted('ROLE_ADMIN')) {
    //         $role = "admin";
    //     } else {
    //         $role = "";
    //     }

    //     return $this->render('structure/_content.html.twig', compact('structures', 'role'));
    // }

    // #[Route('/actives', name: 'activated')]
    // public function activated(): Response
    // {
    //     $structures = $this->userRepository->findAllStructuresActivated();

    //     if ($this->isGranted('ROLE_ADMIN')) {
    //         $role = "admin";
    //     } else {
    //         $role = "";
    //     }

    //     return $this->render('structure/_content.html.twig', compact('structures', 'role'));
    // }

    // #[Route('/desactives', name: 'disabled')]
    // public function diasble(): Response
    // {
    //     $structures = $this->userRepository->findAllStructuresDisabled();

    //     if ($this->isGranted('ROLE_ADMIN')) {
    //         $role = "admin";
    //     } else {
    //         $role = "";
    //     }

    //     return $this->render('structure/_content.html.twig', compact('structures', 'role'));
    // }

    // #[Route('/all/{query}', name: 'query')]
    // public function query(string $query): Response
    // {
    //     $structures = $this->userRepository->findStructuresByQuery($query);

    //     if ($this->isGranted('ROLE_ADMIN')) {
    //         $role = "admin";
    //     } else {
    //         $role = "";
    //     }

    //     return $this->render('structure/_content.html.twig', compact('structures', 'role'));
    // }

    #[Route('/{slug}', name: 'details')]
    public function show(User $structure, UserInterface $user): Response
    {

        if ($user->getUserIdentifier() === $structure->getEmail() || $user === $structure->getPartner() || $this->isGranted('ROLE_PARTNER')) {
            $structureId = $structure->getId();
            $modules = $this->userModuleRepository->findModulesByUser($structureId);

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            $partner = $structure->getPartner();

            $modulesPartner = $this->userModuleRepository->findModulesByPartner($structure->getPartner());
            // dd($modulesPartner);

            return $this->render('structure/details.html.twig', compact('structure', 'role', 'modules', 'partner', 'modulesPartner'));
        } else {
            return $this->render('bundles/TwigBundle/Exception/error404.html.twig');
        }
    }

    #[Route('/{slug}/{id}/active-module', name: 'activate_module')]
    public function activateModule(Module $module, string $slug, string $id, UserRepository $userRepo, Request $request): Response
    {
        if ($request->get('cancel')) {
            $structure = $this->userRepo->findUserBySlug($slug);
            $module = $this->userModuleRepository->findModule($slug, $id);

            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }

            $modulesPartner = $this->userModuleRepository->findModulesByPartner($structure->getPartner());

            $modules = $this->userModuleRepository->findModulesByUser($structure->getId());

            return $this->render("structure/_modules.html.twig", compact('structure', 'role', 'modules', 'modulesPartner'));
        } else {

            $structure = $this->userRepo->findUserBySlug($slug);
            $module = $this->userModuleRepository->findModule($slug, $id);
            $module->setIsActivated(($module->isIsActivated()) ? false : true);
            $this->em->persist($module);
            $this->em->flush();
    
            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
    
            $modulesPartner = $this->userModuleRepository->findModulesByPartner($structure->getPartner());
    
            $modules = $this->userModuleRepository->findModulesByUser($structure->getId());
    
            return $this->render("structure/_modules.html.twig", compact('structure', 'role', 'modules', 'modulesPartner'));
        }
    }

    #[Route('/{slug}/active-user', name: 'activate_user')]
    public function activateUser(User $structure, Request $request, SendMailService $mail, PaginationService $pagination): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        // dd(parse_url($_SERVER[]));
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
            $url = "https";
        else
            $url = "http";

        // Ajoutez // à l'URL.
        $url .= "://";

        // Ajoutez l'hôte (nom de domaine, ip) à l'URL.
        $url .= $_SERVER['HTTP_HOST'];

        // Ajouter l'emplacement de la ressource demandée à l'URL
        $url .= $_SERVER['REQUEST_URI'];

        // $structures = $this->userRepository->findAllByRole("ROLE_STRUCTURE");

        $structure->setIsActivated(($structure->isIsActivated()) ? false : true);
        $this->em->persist($structure);
        $this->em->flush();

        $type = "structure";
        $partner = $structure->getPartner();

        $mail->send(
            'noreply@bodyandmind.fr',
            $structure->getEmail(),
            'Changement du statut de votre compte sur le site Body & Mind',
            'info_state_structure',
            compact('structure', 'type', 'partner')
        );

        $partner = $structure->getPartner();
        $type = "partner";
        $mail->send(
            'noreply@bodyandmind.fr',
            $structure->getPartner()->getEmail(),
            'Changement du statut de votre compte sur le site Body & Mind',
            'info_state_structure',
            compact('partner', 'type', 'structure')
        );

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        $this->addFlash('success', 'Email(s) envoyé(s) avec succès');

        $filter = $request->get('filter');
        $query = $request->get('query');
        $paginate = $pagination->pagination($request, $this->userRepo, 9, "getPaginated", $filter, "ROLE_STRUCTURE", $query, "getTotal");
        $structures = $paginate['partners'];
        $total = $paginate['total'];
        $limit = $paginate['limit'];
        $page = $paginate['page'];

        if (isset($_COOKIE['card'])) {
            return $this->render('structure/_card.html.twig', compact('structure', 'structures', 'role'));
        } else {
            return $this->render('structure/_content.html.twig', compact('structures', 'role', 'total', 'limit', 'page'));
        }
    }

    #[Route('/{slug}/active', name: 'activate')]
    public function activer(User $partner): Response
    {
        $partner->setIsActivated(($partner->isIsActivated()) ? false : true);
        $this->em->persist($partner);
        $this->em->flush();

        return new Response('true');
    }

    #[Route('/{slug}/modifications', name: 'edit')]
    public function edit(User $partner, Request $request): Response
    {
        $form = $this->createForm(RegistrationType::class, $partner);
        $form->remove('plainPassword');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            return $this->redirectToRoute('structures_');
        }

        return $this->renderForm('structure/edit.html.twig', compact('partner', 'form'));
    }

    #[Route('/{slug}/{id}', name: 'delete')]
    public function delete(User $partner)
    {
        $this->em->remove($partner);
        $this->em->flush();

        $this->addFlash('success', 'Utilisateur supprimé.');

        return $this->redirectToRoute('structures_');
    }
}
