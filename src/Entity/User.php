<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    private $pseudo;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    private $name;

    #[ORM\Column(type: 'text', nullable: true)]
    private $picture_profile;

    #[ORM\Column(type: 'text', nullable: true)]
    private $picture_background;

    #[ORM\Column(type: 'text', nullable: true)]
    private $biography;

    #[ORM\Column(type: 'string', length: 255, nullable: true, unique: true)]
    private $phone;

    #[ORM\Column(type: 'string', length: 255, nullable: true, unique: true)]
    private $email;

    #[ORM\Column(type: 'text', nullable: true)]
    private $site_web;

    #[ORM\Column(type: 'string', length: 255)]
    private $region;

    #[ORM\Column(type: 'string')]
    private $birthday;

    #[ORM\Column(type: 'string')]
    private $date_created;

    #[ORM\Column(type: 'string', length: 255)]
    private $password;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string', nullable: true)]
    private $google;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Tweet::class)]
    private $tweets;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: LikeTweet::class)]
    private $likeTweets;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ReTweet::class)]
    private $reTweets;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: BookMarkTweet::class)]
    private $bookMarkTweets;

    #[ORM\OneToMany(mappedBy: 'User', targetEntity: ReportTweet::class)]
    private $reportTweets;

    #[ORM\OneToMany(mappedBy: 'user_me', targetEntity: Blocked::class)]
    private $blockeds;

    #[ORM\OneToMany(mappedBy: 'user_me', targetEntity: Subscriber::class)]
    private $subscribers;

    #[ORM\OneToMany(mappedBy: 'user_me', targetEntity: Message::class)]
    private $messages;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: CommentComment::class)]
    private $commentComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ReportCommentComment::class)]
    private $reportCommentComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: LikeCommentComment::class)]
    private $likeCommentComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ReTweetCommentComment::class)]
    private $reTweetCommentComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: BookMarkCommentComment::class)]
    private $bookMarkCommentComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Comment::class)]
    private $comments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: LikeComment::class)]
    private $likeComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: BookMarkComment::class)]
    private $bookMarkComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ReTweetComment::class)]
    private $reTweetComments;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ReportComment::class)]
    private $reportComments;

    public function __construct()
    {
        $this->tweets = new ArrayCollection();
        $this->likeTweets = new ArrayCollection();
        $this->reTweets = new ArrayCollection();
        $this->bookMarkTweets = new ArrayCollection();
        $this->reportTweets = new ArrayCollection();
        $this->blockeds = new ArrayCollection();
        $this->subscribers = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->commentComments = new ArrayCollection();
        $this->reportCommentComments = new ArrayCollection();
        $this->likeCommentComments = new ArrayCollection();
        $this->reTweetCommentComments = new ArrayCollection();
        $this->bookMarkCommentComments = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->likeComments = new ArrayCollection();
        $this->bookMarkComments = new ArrayCollection();
        $this->reTweetComments = new ArrayCollection();
        $this->reportComments = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPictureProfile(): ?string
    {
        return $this->picture_profile;
    }

    public function setPictureProfile(?string $picture_profile): self
    {
        $this->picture_profile = $picture_profile;

        return $this;
    }

    public function getPictureBackground(): ?string
    {
        return $this->picture_background;
    }

    public function setPictureBackground(?string $picture_background): self
    {
        $this->picture_background = $picture_background;

        return $this;
    }

    public function getBiography(): ?string
    {
        return $this->biography;
    }

    public function setBiography(?string $biography): self
    {
        $this->biography = $biography;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getSiteWeb(): ?string
    {
        return $this->site_web;
    }

    public function setSiteWeb(?string $site_web): self
    {
        $this->site_web = $site_web;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(string $region): self
    {
        $this->region = $region;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->date_created;
    }

    /**
     * @param mixed $date_created
     */
    public function setDateCreated(\DateTimeInterface $date_created): self
    {
        $this->date_created = $date_created;
        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles(): ?array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);

    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getGoogle(): ?int
    {
        return $this->google;
    }

    /**
     * @param mixed $google
     */
    public function setGoogle(?int $google): self
    {
        $this->google = $google;
        return $this;
    }

    /**
     * @return Collection<int, Tweet>
     */
    public function getTweets(): Collection
    {
        return $this->tweets;
    }

    public function addTweet(Tweet $tweet): self
    {
        if (!$this->tweets->contains($tweet)) {
            $this->tweets[] = $tweet;
            $tweet->setUser($this);
        }

        return $this;
    }

    public function removeTweet(Tweet $tweet): self
    {
        if ($this->tweets->removeElement($tweet)) {
            // set the owning side to null (unless already changed)
            if ($tweet->getUser() === $this) {
                $tweet->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LikeTweet>
     */
    public function getLikeTweets(): Collection
    {
        return $this->likeTweets;
    }

    public function addLikeTweet(LikeTweet $likeTweet): self
    {
        if (!$this->likeTweets->contains($likeTweet)) {
            $this->likeTweets[] = $likeTweet;
            $likeTweet->setUser($this);
        }

        return $this;
    }

    public function removeLikeTweet(LikeTweet $likeTweet): self
    {
        if ($this->likeTweets->removeElement($likeTweet)) {
            // set the owning side to null (unless already changed)
            if ($likeTweet->getUser() === $this) {
                $likeTweet->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReTweet>
     */
    public function getReTweets(): Collection
    {
        return $this->reTweets;
    }

    public function addReTweet(ReTweet $reTweet): self
    {
        if (!$this->reTweets->contains($reTweet)) {
            $this->reTweets[] = $reTweet;
            $reTweet->setUser($this);
        }

        return $this;
    }

    public function removeReTweet(ReTweet $reTweet): self
    {
        if ($this->reTweets->removeElement($reTweet)) {
            // set the owning side to null (unless already changed)
            if ($reTweet->getUser() === $this) {
                $reTweet->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BookMarkTweet>
     */
    public function getBookMarkTweets(): Collection
    {
        return $this->bookMarkTweets;
    }

    public function addBookMarkTweet(BookMarkTweet $bookMarkTweet): self
    {
        if (!$this->bookMarkTweets->contains($bookMarkTweet)) {
            $this->bookMarkTweets[] = $bookMarkTweet;
            $bookMarkTweet->setUser($this);
        }

        return $this;
    }

    public function removeBookMarkTweet(BookMarkTweet $bookMarkTweet): self
    {
        if ($this->bookMarkTweets->removeElement($bookMarkTweet)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkTweet->getUser() === $this) {
                $bookMarkTweet->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReportTweet>
     */
    public function getReportTweets(): Collection
    {
        return $this->reportTweets;
    }

    public function addReportTweet(ReportTweet $reportTweet): self
    {
        if (!$this->reportTweets->contains($reportTweet)) {
            $this->reportTweets[] = $reportTweet;
            $reportTweet->setUser($this);
        }

        return $this;
    }

    public function removeReportTweet(ReportTweet $reportTweet): self
    {
        if ($this->reportTweets->removeElement($reportTweet)) {
            // set the owning side to null (unless already changed)
            if ($reportTweet->getUser() === $this) {
                $reportTweet->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Blocked>
     */
    public function getBlockeds(): Collection
    {
        return $this->blockeds;
    }

    public function addBlocked(Blocked $blocked): self
    {
        if (!$this->blockeds->contains($blocked)) {
            $this->blockeds[] = $blocked;
            $blocked->setUserMe($this);
        }

        return $this;
    }

    public function removeBlocked(Blocked $blocked): self
    {
        if ($this->blockeds->removeElement($blocked)) {
            // set the owning side to null (unless already changed)
            if ($blocked->getUserMe() === $this) {
                $blocked->setUserMe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Subscriber>
     */
    public function getSubscribers(): Collection
    {
        return $this->subscribers;
    }

    public function addSubscriber(Subscriber $subscriber): self
    {
        if (!$this->subscribers->contains($subscriber)) {
            $this->subscribers[] = $subscriber;
            $subscriber->setUserMe($this);
        }

        return $this;
    }

    public function removeSubscriber(Subscriber $subscriber): self
    {
        if ($this->subscribers->removeElement($subscriber)) {
            // set the owning side to null (unless already changed)
            if ($subscriber->getUserMe() === $this) {
                $subscriber->setUserMe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setUserMe($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getUserMe() === $this) {
                $message->setUserMe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CommentComment>
     */
    public function getCommentComments(): Collection
    {
        return $this->commentComments;
    }

    public function addCommentComment(CommentComment $commentComment): self
    {
        if (!$this->commentComments->contains($commentComment)) {
            $this->commentComments[] = $commentComment;
            $commentComment->setUser($this);
        }

        return $this;
    }

    public function removeCommentComment(CommentComment $commentComment): self
    {
        if ($this->commentComments->removeElement($commentComment)) {
            // set the owning side to null (unless already changed)
            if ($commentComment->getUser() === $this) {
                $commentComment->setUser(null);
            }
        }

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
            $reportCommentComment->setUser($this);
        }

        return $this;
    }

    public function removeReportCommentComment(ReportCommentComment $reportCommentComment): self
    {
        if ($this->reportCommentComments->removeElement($reportCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($reportCommentComment->getUser() === $this) {
                $reportCommentComment->setUser(null);
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
            $likeCommentComment->setUser($this);
        }

        return $this;
    }

    public function removeLikeCommentComment(LikeCommentComment $likeCommentComment): self
    {
        if ($this->likeCommentComments->removeElement($likeCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($likeCommentComment->getUser() === $this) {
                $likeCommentComment->setUser(null);
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
            $reTweetCommentComment->setUser($this);
        }

        return $this;
    }

    public function removeReTweetCommentComment(ReTweetCommentComment $reTweetCommentComment): self
    {
        if ($this->reTweetCommentComments->removeElement($reTweetCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($reTweetCommentComment->getUser() === $this) {
                $reTweetCommentComment->setUser(null);
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
            $bookMarkCommentComment->setUser($this);
        }

        return $this;
    }

    public function removeBookMarkCommentComment(BookMarkCommentComment $bookMarkCommentComment): self
    {
        if ($this->bookMarkCommentComments->removeElement($bookMarkCommentComment)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkCommentComment->getUser() === $this) {
                $bookMarkCommentComment->setUser(null);
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
            $comment->setUser($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getUser() === $this) {
                $comment->setUser(null);
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
            $likeComment->setUser($this);
        }

        return $this;
    }

    public function removeLikeComment(LikeComment $likeComment): self
    {
        if ($this->likeComments->removeElement($likeComment)) {
            // set the owning side to null (unless already changed)
            if ($likeComment->getUser() === $this) {
                $likeComment->setUser(null);
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
            $bookMarkComment->setUser($this);
        }

        return $this;
    }

    public function removeBookMarkComment(BookMarkComment $bookMarkComment): self
    {
        if ($this->bookMarkComments->removeElement($bookMarkComment)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkComment->getUser() === $this) {
                $bookMarkComment->setUser(null);
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
            $reTweetComment->setUser($this);
        }

        return $this;
    }

    public function removeReTweetComment(ReTweetComment $reTweetComment): self
    {
        if ($this->reTweetComments->removeElement($reTweetComment)) {
            // set the owning side to null (unless already changed)
            if ($reTweetComment->getUser() === $this) {
                $reTweetComment->setUser(null);
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
            $reportComment->setUser($this);
        }

        return $this;
    }

    public function removeReportComment(ReportComment $reportComment): self
    {
        if ($this->reportComments->removeElement($reportComment)) {
            // set the owning side to null (unless already changed)
            if ($reportComment->getUser() === $this) {
                $reportComment->setUser(null);
            }
        }

        return $this;
    }
}
