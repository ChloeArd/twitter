<?php

namespace App\Entity;

use App\Repository\ReportCommentCommentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReportCommentCommentRepository::class)]
class ReportCommentComment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime')]
    private $date;

    #[ORM\Column(type: 'text')]
    private $why;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'reportCommentComments')]
    private $user;

    #[ORM\ManyToOne(targetEntity: CommentComment::class, inversedBy: 'reportCommentComments')]
    private $comment_comment;

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

    public function getCommentComment(): ?CommentComment
    {
        return $this->comment_comment;
    }

    public function setCommentComment(?CommentComment $comment_comment): self
    {
        $this->comment_comment = $comment_comment;

        return $this;
    }
}
