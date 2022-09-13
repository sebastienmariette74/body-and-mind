<?php

namespace App\Entity;

use App\Repository\UserModuleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserModuleRepository::class)]
class UserModule
{
    #[ORM\Column]
    private ?bool $is_activated = null;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'userModules')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;
    
    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'userModules')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Module $module = null;

    public function isIsActivated(): ?bool
    {
        return $this->is_activated;
    }

    public function setIsActivated(bool $is_activated): self
    {
        $this->is_activated = $is_activated;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getModule(): ?Module
    {
        return $this->module;
    }

    public function setModule(?Module $module): self
    {
        $this->module = $module;

        return $this;
    }
}
