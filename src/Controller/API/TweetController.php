<?php

namespace App\Controller\API;

use App\Entity\Tweet;
use App\Entity\User;
use App\Repository\TweetRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TweetController extends AbstractController
{

    private TweetRepository $tweetRepository;
    private EntityManagerInterface $entityManager;


    public function __construct(TweetRepository $tweetRepository, EntityManagerInterface $entityManager)
    {
        $this->tweetRepository = $tweetRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/api/tweets', name: 'api_tweets', methods: ['GET'])]
    public function tweets(TweetRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll());
    }

    #[Route('/api/tweet/add', name: 'api_tweet_add', methods: ['POST'])]
    public function addTweet(Request $request, UserRepository $userRepository): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['tweet'], $payload['image'], $payload['view'], $payload['user_id'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $user = $userRepository->find($payload['user_id']);

        $tweet = new Tweet();
        $tweet
            ->setTweet($payload['tweet'])
            ->setImage($payload['image'])
            ->setView($payload['view'])
            ->setUser($user)
            ->setDate(date("d/m/Y"))
        ;
        $this->entityManager->persist($tweet);
        $this->entityManager->flush();
        return $this->json("Vous avez Tweetez avec succès !");
    }

    private function returnError(string $errorMessage): JsonResponse
    {
        return $this->json([
            'error' => true,
            'message' => $errorMessage,
        ]);
    }
}
