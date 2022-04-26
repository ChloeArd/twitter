<?php

namespace App\Entity;

use App\Repository\ReTweetCommentCommentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReTweetCommentCommentRepository::class)]
class ReTweetCommentComment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'reTweetCommentComments')]
    private $user;

    #[ORM\ManyToOne(targetEntity: CommentComment::class, inversedBy: 'reTweetCommentComments')]
    private $comment_comment;

    public function getId(): ?int
    {
        return $this->id;
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
