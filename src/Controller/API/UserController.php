<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
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

    #[Route('/api/user/{id}', name: 'api_user', methods: ['GET'])]
    public function user(int $id): JsonResponse
    {
        return $this->json($this->userRepository->find($id));
    }

    #[Route('/api/user/add', name: "api_user_add" ,methods: ['POST'])]
    public function addUser(Request $request): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['name'], $payload['pseudo'], $payload['email'], $payload['phone'], $payload['region'], $payload['birthday'], $payload['password'], $payload['repeat_password'])) {
            return $this->returnError('Il manque des paramètres');
        }

        if ($payload['password'] !== $payload['repeat_password']) {
            return $this->returnError("Les 2 mots de passe ne correspondent pas");
        }

        $maj = preg_match('@[A-Z]@', $payload['password']);
        $min = preg_match('@[a-z]@', $payload['password']);
        $number = preg_match('@[0-9]@', $payload['password']);
        if (!$maj && !$min && !$number && strlen($payload['password']) < 8) {
            return $this->returnError("Le mot de passe ne contient pas de majuscule, minuscule, chiffres et il est inférieur à 8 caractères");
        }

        $encryptedPassword = password_hash($payload['password'], PASSWORD_BCRYPT);

        $user = new User();
        $user
            ->setPseudo($payload['pseudo'])
            ->setName($payload['name'])
            ->setEmail($payload['email'])
            ->setPhone($payload['phone'])
            ->setRegion($payload['region'])
            ->setBirthday($payload['birthday'])
            ->setDateCreated(date("d/m/Y"))
            ->setPassword($encryptedPassword)
            ->setRoles(["ROLE_USER"])
        ;
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $this->json("Vous êtes bien inscrit !");
    }

    #[Route('/api/user/google', name: "api_user_google" ,methods: ['POST'])]
    public function addUserGoogle(Request $request): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['name'], $payload['pseudo'], $payload['email'], $payload['google'], $payload['image'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $user = new User();
        $user
            ->setPseudo($payload['pseudo'])
            ->setName($payload['name'])
            ->setEmail($payload['email'])
            ->setPictureProfile($payload['image'])
            ->setRegion("Paris")
            ->setBirthday(date("d/m/Y"))
            ->setDateCreated(date("d/m/Y"))
            ->setPassword("1")
            ->setRoles(["ROLE_USER"])
            ->setGoogle($payload['google']);
        ;
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $this->json("Vous êtes bien inscrit !");
    }

    #[Route('/api/user/update/{id}', name: 'api_user_update', methods: ['PUT'])]
    public function update(User $user, Request $request): JsonResponse {

        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['name']) || !isset($payload['email']) || !isset($payload['phone']) || !isset($payload['region']) || !isset($payload['birthday']) || !isset($payload['picture_profile']) || !isset($payload['picture_background']) || !isset($payload['biography']) || !isset($payload['site_web'])) {
            return $this->returnError('Il manque des paramètres');
        }

        //$this->entityManager->flush($user);
        return $this->json($user);
    }

    /**
     * @throws OptimisticLockException
     * @throws ORMException
     */
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
