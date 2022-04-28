<?php

namespace App\Entity;

use App\Repository\ListingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ListingRepository::class)]
class Listing
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text')]
    private $picture;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    private $description;

    #[ORM\Column(type: 'boolean')]
    private $private;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'listings')]
    private $user;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: SubscriberListing::class)]
    private $subscriberListings;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: MemberListing::class)]
    private $memberListings;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: TweetListing::class)]
    private $tweetListings;

    public function __construct()
    {
        $this->subscriberListings = new ArrayCollection();
        $this->memberListings = new ArrayCollection();
        $this->tweetListings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrivate(): ?bool
    {
        return $this->private;
    }

    public function setPrivate(bool $private): self
    {
        $this->private = $private;

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
     * @return Collection<int, SubscriberListing>
     */
    public function getSubscriberListings(): Collection
    {
        return $this->subscriberListings;
    }

    public function addSubscriberListing(SubscriberListing $subscriberListing): self
    {
        if (!$this->subscriberListings->contains($subscriberListing)) {
            $this->subscriberListings[] = $subscriberListing;
            $subscriberListing->setListing($this);
        }

        return $this;
    }

    public function removeSubscriberListing(SubscriberListing $subscriberListing): self
    {
        if ($this->subscriberListings->removeElement($subscriberListing)) {
            // set the owning side to null (unless already changed)
            if ($subscriberListing->getListing() === $this) {
                $subscriberListing->setListing(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MemberListing>
     */
    public function getMemberListings(): Collection
    {
        return $this->memberListings;
    }

    public function addMemberListing(MemberListing $memberListing): self
    {
        if (!$this->memberListings->contains($memberListing)) {
            $this->memberListings[] = $memberListing;
            $memberListing->setListing($this);
        }

        return $this;
    }

    public function removeMemberListing(MemberListing $memberListing): self
    {
        if ($this->memberListings->removeElement($memberListing)) {
            // set the owning side to null (unless already changed)
            if ($memberListing->getListing() === $this) {
                $memberListing->setListing(null);
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
            $tweetListing->setListing($this);
        }

        return $this;
    }

    public function removeTweetListing(TweetListing $tweetListing): self
    {
        if ($this->tweetListings->removeElement($tweetListing)) {
            // set the owning side to null (unless already changed)
            if ($tweetListing->getListing() === $this) {
                $tweetListing->setListing(null);
            }
        }

        return $this;
    }
}
