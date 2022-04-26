<?php

namespace App\Entity;

use App\Repository\BlockedRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BlockedRepository::class)]
class Blocked
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'blockeds')]
    private $user_me;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'blockeds')]
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserMe(): ?User
    {
        return $this->user_me;
    }

    public function setUserMe(?User $user_me): self
    {
        $this->user_me = $user_me;

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
}
