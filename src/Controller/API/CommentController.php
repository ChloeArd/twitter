<?php

namespace App\Controller\API;

use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    /**
     * @param int $tweet
     * @param CommentRepository $repository
     * @return JsonResponse
     */
    #[Route('/api/comments/{tweet}', name: 'api_comments_tweet', methods: ['GET'])]
    public function tweets(int $tweet, CommentRepository $repository): JsonResponse
    {
        return $this->json($repository->findBy(['tweet' => $tweet]));
    }

    // Creer une autre page qui affiche les tweets avec les commentaires.
}
