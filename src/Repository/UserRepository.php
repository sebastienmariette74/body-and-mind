<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function add(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);

        $this->add($user, true);
    }

    public function findAllByRole($role): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.roles LIKE :role')
            ->setParameter('role', '%"' . $role . '"%')
            ->orderBy('u.name')
            ->getQuery()
            ->getResult();
    }    

    public function findAllUsers(): array
    {        
        $query = $this->getEntityManager()->createQuery("
            SELECT u 
            FROM App\Entity\User u 
            WHERE u.roles LIKE '%ROLE_PARTNER%' 
            OR u.roles LIKE '%ROLE_STRUCTURE%' 
        ");
        return $query->getResult();
    }

    public function findUserBySlug($slug)
    {
        return $this->createQueryBuilder('u')
            ->where('u.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findAllStructuresByPartner($id): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.partner = :id')
            ->setParameter('id', $id)
            ->orderBy('u.name')
            ->getQuery()
            ->getResult();
    }

public function getPaginated($page, $limit, $role, $filter, $querySearch)
{
    $query = $this->createQueryBuilder('u')
        ->where('u.roles LIKE :role')
        ->setParameter('role', '%"' . $role . '"%')
        ->setFirstResult(($page * $limit) - $limit)
        ->setMaxResults($limit)
        ->orderBy('u.name');

    if ($filter === 'activated') {
        $query->andWhere('u.isActivated = true');
    }

    if ($filter === 'disabled') {
        $query->andWhere('u.isActivated = false');
    }

    if ($querySearch != null) {
        $query->andWhere('u.name LIKE :query')
            ->setParameter('query', '%' . $querySearch . '%')
            ->orderBy('u.name');
    }

    return $query->getQuery()->getResult();
}

    public function getTotal($role, $filter, $querySearch)
    {
        $query = $this->createQueryBuilder('u')
            ->select('COUNT(u)')
            ->where('u.roles LIKE :role')
            ->setParameter('role', '%"' . $role . '"%');

        if ($filter === 'activated') {
            $query->andWhere('u.isActivated = true');
        }

        if ($filter === 'disabled') {
            $query->andWhere('u.isActivated = false');
        }

        if ($querySearch != null) {
            $query->andWhere('u.name LIKE :query')
                ->setParameter('query', '%' . $querySearch . '%')
                ->orderBy('u.name');
        }

        return $query->getQuery()->getSingleScalarResult();
    }

}
