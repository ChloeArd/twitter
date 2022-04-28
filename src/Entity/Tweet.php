<?php

namespace App\Entity;

use App\Repository\TweetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TweetRepository::class)]
class Tweet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text', nullable: true)]
    private $tweet;

    #[ORM\Column(type: 'text', nullable: true)]
    private $image;

    #[ORM\Column(type: 'string', length: 255)]
    private $view;

    #[ORM\Column(type: 'date')]
    private $date;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'tweets')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'reportComments')]
    private $comment;

    #[ORM\OneToMany(mappedBy: 'tweet', targetEntity: LikeTweet::class)]
    private $likeTweets;

    #[ORM\OneToMany(mappedBy: 'tweet', targetEntity: ReTweet::class)]
    private $reTweets;

    #[ORM\OneToMany(mappedBy: 'tweet', targetEntity: BookMarkTweet::class)]
    private $bookMarkTweets;

    #[ORM\OneToMany(mappedBy: 'tweet', targetEntity: ReportTweet::class)]
    private $reportTweets;

    #[ORM\OneToMany(mappedBy: 'tweet', targetEntity: TweetListing::class)]
    private $tweetListings;

    public function __construct()
    {
        $this->likeTweets = new ArrayCollection();
        $this->reTweets = new ArrayCollection();
        $this->bookMarkTweets = new ArrayCollection();
        $this->reportTweets = new ArrayCollection();
        $this->tweetListings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTweet(): ?string
    {
        return $this->tweet;
    }

    public function setTweet(?string $tweet): self
    {
        $this->tweet = $tweet;

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

    public function getView(): ?string
    {
        return $this->view;
    }

    public function setView(string $view): self
    {
        $this->view = $view;

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

    public function getComment(): ?Comment
    {
        return $this->comment;
    }

    public function setComment(?Comment $comment): self
    {
        $this->comment = $comment;

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
            $likeTweet->setTweet($this);
        }

        return $this;
    }

    public function removeLikeTweet(LikeTweet $likeTweet): self
    {
        if ($this->likeTweets->removeElement($likeTweet)) {
            // set the owning side to null (unless already changed)
            if ($likeTweet->getTweet() === $this) {
                $likeTweet->setTweet(null);
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
            $reTweet->setTweet($this);
        }

        return $this;
    }

    public function removeReTweet(ReTweet $reTweet): self
    {
        if ($this->reTweets->removeElement($reTweet)) {
            // set the owning side to null (unless already changed)
            if ($reTweet->getTweet() === $this) {
                $reTweet->setTweet(null);
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
            $bookMarkTweet->setTweet($this);
        }

        return $this;
    }

    public function removeBookMarkTweet(BookMarkTweet $bookMarkTweet): self
    {
        if ($this->bookMarkTweets->removeElement($bookMarkTweet)) {
            // set the owning side to null (unless already changed)
            if ($bookMarkTweet->getTweet() === $this) {
                $bookMarkTweet->setTweet(null);
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
            $reportTweet->setTweet($this);
        }

        return $this;
    }

    public function removeReportTweet(ReportTweet $reportTweet): self
    {
        if ($this->reportTweets->removeElement($reportTweet)) {
            // set the owning side to null (unless already changed)
            if ($reportTweet->getTweet() === $this) {
                $reportTweet->setTweet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TweetListing>
     */
    public function getTweetListings(): Collection
    {
        return $this->tweetListings;
    }

    public function addTweetListing(TweetListing $tweetListing): self
    {
        if (!$this->tweetListings->contains($tweetListing)) {
            $this->tweetListings[] = $tweetListing;
            $tweetListing->setTweet($this);
        }

        return $this;
    }

    public function removeTweetListing(TweetListing $tweetListing): self
    {
        if ($this->tweetListings->removeElement($tweetListing)) {
            // set the owning side to null (unless already changed)
            if ($tweetListing->getTweet() === $this) {
                $tweetListing->setTweet(null);
            }
        }

        return $this;
    }
}
