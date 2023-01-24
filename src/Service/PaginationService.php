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
        string $getPaginated,
        string $filter = null,
        string $role,
        string $query = null,
        string $getTotal
    ): array
    {
        $page = htmlentities((int)$request->query->get("page", 1));
        
        $response = $userRepo->$getPaginated($page, $limit, $role, $filter, $query);
        $total = $userRepo->$getTotal($role, $filter, $query);

        return [ 
            'page' => $page,
            'total' => $total,
            'response' => $response,
        ];
    }    
}
