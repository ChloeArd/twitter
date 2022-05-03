<?php

namespace App\Entity;

use App\Repository\CommentCommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentCommentRepository::class)]
class CommentComment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text', nullable: true)]
    private $comment;

    #[ORM\Column(type: 'text', nullable: true)]
    private $image;

    #[ORM\Column(type: 'date')]
    private $date;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'commentComments')]
    private $user;

    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'commentComments')]
    private $comment_fk;

    #[ORM\OneToMany(mappedBy: 'comment_comment', targetEntity: ReportCommentComment::class)]
    private $reportCommentComments;

    #[ORM\OneToMany(mappedBy: 'comment_comment', targetEntity: LikeCommentComment::class)]
    private $likeCommentComments;

    #[ORM\OneToMany(mappedBy: 'comment_comment', targetEntity: ReTweetCommentComment::class)]
    private $reTweetCommentComments;

    #[ORM\OneToMany(mappedBy: 'comment_comment', targetEntity: BookMarkCommentComment::class)]
    private $bookMarkCommentComments;



    public function __construct()
    {
        $this->reportCommentComments = new ArrayCollection();
        $this->likeCommentComments = new ArrayCollection();
        $this->reTweetCommentComments = new ArrayCollection();
        $this->bookMarkCommentComments = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCommentFk(): ?Comment
    {
        return $this->comment_fk;
    }

    public function setCommentFk(?Comment $comment_fk): self
    {
        $this->comment_fk = $comment_fk;

        return $this;
    }

    /**
     * @return Collection<int, ReportCommentComment>
     */
    public function getReportCommentComments(): Collection
    {
        return $this->reportCommentComments;
    }

    public function addReportCommentComment(ReportCommentComment $reportCommentComment): self
    {
        if (!$this->reportCommentComments->contains($reportCommentComment)) {
            $this->reportCommentComments[] = $reportCommentComment;
            $reportCommentComment->setCommentComment($this);
        }

        return $this;
    }

    public function removeReportCommentComment(ReportCommentComment $reportCommentComment): self
    {
        if ($this->reportCommentComments->removeElement($reportCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($reportCommentComment->getCommentComment() === $this) {
                $reportCommentComment->setCommentComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LikeCommentComment>
     */
    public function getLikeCommentComments(): Collection
    {
        return $this->likeCommentComments;
    }

    public function addLikeCommentComment(LikeCommentComment $likeCommentComment): self
    {
        if (!$this->likeCommentComments->contains($likeCommentComment)) {
            $this->likeCommentComments[] = $likeCommentComment;
            $likeCommentComment->setCommentComment($this);
        }

        return $this;
    }

    public function removeLikeCommentComment(LikeCommentComment $likeCommentComment): self
    {
        if ($this->likeCommentComments->removeElement($likeCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($likeCommentComment->getCommentComment() === $this) {
                $likeCommentComment->setCommentComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReTweetCommentComment>
     */
    public function getReTweetCommentComments(): Collection
    {
        return $this->reTweetCommentComments;
    }

    public function addReTweetCommentComment(ReTweetCommentComment $reTweetCommentComment): self
    {
        if (!$this->reTweetCommentComments->contains($reTweetCommentComment)) {
            $this->reTweetCommentComments[] = $reTweetCommentComment;
            $reTweetCommentComment->setCommentComment($this);
        }

        return $this;
    }

    public function removeReTweetCommentComment(ReTweetCommentComment $reTweetCommentComment): self
    {
        if ($this->reTweetCommentComments->removeElement($reTweetCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($reTweetCommentComment->getCommentComment() === $this) {
                $reTweetCommentComment->setCommentComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BookMarkCommentComment>
     */
    public function getBookMarkCommentComments(): Collection
    {
        return $this->bookMarkCommentComments;
    }

    public function addBookMarkCommentComment(BookMarkCommentComment $bookMarkCommentComment): self
    {
        if (!$this->bookMarkCommentComments->contains($bookMarkCommentComment)) {
            $this->bookMarkCommentComments[] = $bookMarkCommentComment;
            $bookMarkCommentComment->setCommentComment($this);
        }

        return $this;
    }

    public function removeBookMarkCommentComment(BookMarkCommentComment $bookMarkCommentComment): self
    {
        if ($this->bookMarkCommentComments->removeElement($bookMarkCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkCommentComment->getCommentComment() === $this) {
                $bookMarkCommentComment->setCommentComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setCommentComment($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getCommentComment() === $this) {
                $comment->setCommentComment(null);
            }
        }

        return $this;
    }
}
