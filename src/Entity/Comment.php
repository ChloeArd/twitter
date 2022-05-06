<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
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

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'comments')]
    private $user;

    #[ORM\ManyToOne(targetEntity: Tweet::class, inversedBy: 'comments')]
    private $tweet;

    #[ORM\OneToMany(mappedBy: 'comment_fk', targetEntity: CommentComment::class)]
    private $comment_comments;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: LikeComment::class)]
    private $likeComments;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: BookMarkComment::class)]
    private $bookMarkComments;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: ReTweetComment::class)]
    private $reTweetComments;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: ReportComment::class)]
    private $reportComments;


    public function __construct()
    {
        $this->comment_comments = new ArrayCollection();
        $this->likeComments = new ArrayCollection();
        $this->bookMarkComments = new ArrayCollection();
        $this->reTweetComments = new ArrayCollection();
        $this->reportComments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param mixed $comment
     */
    public function setComment($comment): void
    {
        $this->comment = $comment;
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

    /**
     * @return Collection<int, CommentComment>
     */
    public function getCommentComments(): Collection
    {
        return $this->comment_comments;
    }

    public function addCommentComment(CommentComment $commentComment): self
    {
        if (!$this->comment_comments->contains($commentComment)) {
            $this->comment_comments[] = $commentComment;
            $commentComment->setComment($this);
        }

        return $this;
    }

    public function removeCommentComment(CommentComment $commentComment): self
    {
        if ($this->comment_comments->removeElement($commentComment)) {
            // set the owning side to null (unless already changed)
            if ($commentComment->getComment() === $this) {
                $commentComment->setComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LikeComment>
     */
    public function getLikeComments(): Collection
    {
        return $this->likeComments;
    }

    public function addLikeComment(LikeComment $likeComment): self
    {
        if (!$this->likeComments->contains($likeComment)) {
            $this->likeComments[] = $likeComment;
            $likeComment->setComment($this);
        }

        return $this;
    }

    public function removeLikeComment(LikeComment $likeComment): self
    {
        if ($this->likeComments->removeElement($likeComment)) {
            // set the owning side to null (unless already changed)
            if ($likeComment->getComment() === $this) {
                $likeComment->setComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BookMarkComment>
     */
    public function getBookMarkComments(): Collection
    {
        return $this->bookMarkComments;
    }

    public function addBookMarkComment(BookMarkComment $bookMarkComment): self
    {
        if (!$this->bookMarkComments->contains($bookMarkComment)) {
            $this->bookMarkComments[] = $bookMarkComment;
            $bookMarkComment->setComment($this);
        }

        return $this;
    }

    public function removeBookMarkComment(BookMarkComment $bookMarkComment): self
    {
        if ($this->bookMarkComments->removeElement($bookMarkComment)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkComment->getComment() === $this) {
                $bookMarkComment->setComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReTweetComment>
     */
    public function getReTweetComments(): Collection
    {
        return $this->reTweetComments;
    }

    public function addReTweetComment(ReTweetComment $reTweetComment): self
    {
        if (!$this->reTweetComments->contains($reTweetComment)) {
            $this->reTweetComments[] = $reTweetComment;
            $reTweetComment->setComment($this);
        }

        return $this;
    }

    public function removeReTweetComment(ReTweetComment $reTweetComment): self
    {
        if ($this->reTweetComments->removeElement($reTweetComment)) {
            // set the owning side to null (unless already changed)
            if ($reTweetComment->getComment() === $this) {
                $reTweetComment->setComment(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReportComment>
     */
    public function getReportComments(): Collection
    {
        return $this->reportComments;
    }

    public function addReportComment(ReportComment $reportComment): self
    {
        if (!$this->reportComments->contains($reportComment)) {
            $this->reportComments[] = $reportComment;
            $reportComment->setComment($this);
        }

        return $this;
    }

    public function removeReportComment(ReportComment $reportComment): self
    {
        if ($this->reportComments->removeElement($reportComment)) {
            // set the owning side to null (unless already changed)
            if ($reportComment->getComment() === $this) {
                $reportComment->setComment(null);
            }
        }

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
