<?php

namespace App\Controller\API;

use App\Repository\SubscriberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SubscriberController extends AbstractController
{
    #[Route('/api/subscribers', name: 'api_subscribers', methods: ['GET'])]
    public function getSubscribers (SubscriberRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll());
    }
}
