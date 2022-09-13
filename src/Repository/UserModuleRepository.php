<?php

namespace App\Repository;

use App\Entity\UserModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserModule>
 *
 * @method UserModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserModule[]    findAll()
 * @method UserModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserModule::class);
    }

    public function add(UserModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(UserModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findModulesByUser($id): array
    {
        return $this->createQueryBuilder('m')
            ->select('u.id, mod.id as id_module, mod.name as module, mod.slug, m.is_activated')
            // ->select('u.id, u.slug, u.name as user, mod.name as Module, mod.slugModule, m.is_activated')
            ->innerJoin('m.user', 'u')
            ->innerJoin('m.module', 'mod')
            ->where('u.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }
    public function findUserModulesByUser($id): array
    {
        return $this->createQueryBuilder('m')
            // ->select('u.id, mod.id as id_module, mod.name as module, mod.slug, m.is_activated')
            // ->select('u.id, u.slug, u.name as user, mod.name as Module, mod.slugModule, m.is_activated')
            ->innerJoin('m.user', 'u')
            ->innerJoin('m.module', 'mod')
            ->where('u.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }
    public function findByModule($module): array
    {
        return $this->createQueryBuilder('m')
            // ->select('u.id, mod.id as id_module, mod.name as module, mod.slug, m.is_activated')
            // ->select('u.id, u.slug, u.name as user, mod.name as Module, mod.slugModule, m.is_activated')
            // ->innerJoin('m.user', 'u')
            ->where('m.module = :module')
            ->setParameter('module', $module)
            ->getQuery()
            ->getResult();
    }
    public function findAllModules(): array
    {
        return $this->createQueryBuilder('m')
            // ->select('u.id, mod.id as id_module, mod.name as Module, mod.slugModule, m.is_activated')
            // ->select('u.id, u.slug, u.name as user, mod.name as Module, mod.slugModule, m.is_activated')
            ->innerJoin('m.user', 'u')
            ->innerJoin('m.module', 'mod')
            // ->where('u.id = 3')   
            // ->where('mod.id = 1')   
            // ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }
    public function findModule($slug, $id): ?UserModule
    {
        return $this->createQueryBuilder('m')
            // ->select('u.id, u.slug as user_slug, mod.id as id_module, mod.name as Module, mod.slugModule, m.is_activated')
            // ->select('u.id, u.slug, u.name as user, mod.name as Module, mod.slugModule, m.is_activated')
            ->innerJoin('m.user', 'u')
            ->innerJoin('m.module', 'mod')
            ->where('u.slug = :slug')
            ->andWhere('mod.id = :id')
            ->setParameters([
                'slug' => $slug,
                'id' => $id
            ])
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findModuleByStructureById($structure, $id): ?UserModule
    {
        return $this->createQueryBuilder('m')
            ->where('m.user = :structure')
            ->andWhere('m.module = :id')
            ->setParameters([
                'structure' => $structure,
                'id' => $id
            ])
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findModulesByPartner($partner): array
    {
        return $this->createQueryBuilder('m')
            ->select('mod.id as module_id, m.is_activated as activated')
            ->innerJoin('m.module', 'mod')
            ->where('m.user = :partner')
            ->setParameter('partner', $partner)
            ->getQuery()
            ->getResult();
    }



    //    /**
    //     * @return UserModule[] Returns an array of UserModule objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?UserModule
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
