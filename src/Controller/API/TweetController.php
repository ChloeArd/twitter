<?php

namespace App\Controller\API;

use App\Repository\TweetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TweetController extends AbstractController
{
    #[Route('/api/tweets', name: 'api_tweets', methods: ['GET'])]
    public function tweets(TweetRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll());
    }
}
