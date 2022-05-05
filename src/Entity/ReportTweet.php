<?php

namespace App\Entity;

use App\Repository\ReportTweetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReportTweetRepository::class)]
class ReportTweet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime')]
    private $date;

    #[ORM\Column(type: 'text')]
    private $why;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'reportTweets')]
    private $user;

    #[ORM\ManyToOne(targetEntity: Tweet::class, inversedBy: 'reportTweets')]
    private $tweet;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getWhy(): ?string
    {
        return $this->why;
    }

    public function setWhy(string $why): self
    {
        $this->why = $why;

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

    public function getTweet(): ?Tweet
    {
        return $this->tweet;
    }

    public function setTweet(?Tweet $tweet): self
    {
        $this->tweet = $tweet;

        return $this;
    }
}
