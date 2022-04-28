<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    private UserRepository $userRepository;
    private EntityManagerInterface $entityManager;


    public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/api/user/{id}', name: 'app_user', methods: ['GET'])]
    public function index(int $id): JsonResponse
    {
        return $this->json($this->userRepository->find($id));
    }

    #[Route('/api/user/add', methods: ['POST'])]
    public function addUser(Request $request): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['name']) || !isset($payload['pseudo']) || !isset($payload['email']) || !isset($payload['phone']) || !isset($payload['region']) || !isset($payload['birthday']) || !isset($payload['date_created']) || !isset($payload['password']) || !isset($payload['repeat_password']) || !isset($payload['roles']) || !isset($payload['id_google'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $user = new User();
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $this->json($user);
    }

    #[Route('/api/user/update/{id}', name: 'api_user_update', methods: ['PUT'])]
    public function update(User $user, Request $request): JsonResponse {

        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['name']) || !isset($payload['email']) || !isset($payload['phone']) || !isset($payload['region']) || !isset($payload['birthday']) || !isset($payload['picture_profile']) || !isset($payload['picture_background']) || !isset($payload['biography']) || !isset($payload['site_web'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $this->entityManager->flush();
        return $this->json("ok");
    }

    #[Route('/api/user/delete/{id}', name: 'api_user_delete', methods: ['DELETE'])]
    public function deleteUser(User $user): JsonResponse
    {
        $this->userRepository->remove($user);
        return $this->json(['status' => true,]);
    }

    private function returnError(string $errorMessage): JsonResponse
    {
        return $this->json([
            'error' => true,
            'message' => $errorMessage,
        ]);
    }
}
