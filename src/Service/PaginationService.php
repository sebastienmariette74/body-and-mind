<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class PaginationService extends ServiceEntityRepository
{
    public function __construct(private RequestStack $request){}

    public function pagination(
        Request $request,
        UserRepository $userRepo,
        int $limit,
        string $function,
        string $filter = null,
        string $role,
        string $query = null,
        string $functionTotal
    ): array
    {
        $limit = 9;
        $page = htmlentities((int)$request->query->get("page", 1));
        
        $partners = $userRepo->$function($page, $limit, $role, $filter, $query);
        $total = $userRepo->$functionTotal($role, $filter, $query);

        return [ 
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'partners' => $partners,
        ];
    }
    
}
