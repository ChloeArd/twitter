<?php

namespace App\Controller\API;

use App\Entity\Tweet;
use App\Repository\TweetRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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

    /**
     * @param TweetRepository $repository
     * @return JsonResponse
     */
    #[Route('/api/tweets', name: 'api_tweets', methods: ['GET'])]
    public function tweets(TweetRepository $repository): JsonResponse
    {
        /*return $this->json(
            json_decode(
                $serializer->serialize(
                    $repository->findAll(),
                    'json',
                    [AbstractNormalizer::IGNORED_ATTRIBUTES => ['user']]
                ),
                JSON_OBJECT_AS_ARRAY
            )
        );*/

        return $this->json($repository->findAll(), Response::HTTP_OK);
    }

    /**
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    #[Route('/api/tweet/add', name: 'api_tweet_add', methods: ['POST'])]
    public function addTweet(Request $request, UserRepository $userRepository): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        if (!isset($payload['tweet'], $payload['image'], $payload['view'], $payload['user_id'])) {
            return $this->returnError('Il manque des paramètres');
        }

        $user = $userRepository->find($payload['user_id']);

        $tweet = new Tweet();

        if (!empty($payload['image'])) {
            $randomName = getRandomName($payload['image']);

            move_uploaded_file($payload['image'], "./assets/imageTweet/" . $randomName);

            $tweet
                ->setTweet($payload['tweet'])
                ->setImage($randomName)
                ->setView($payload['view'])
                ->setUser($user)
                ->setDate(date("d/m/Y h:m:s"))
            ;
        }
        else {
            $tweet
                ->setTweet($payload['tweet'])
                ->setImage(null)
                ->setView($payload['view'])
                ->setUser($user)
                ->setDate(date("d/m/Y h:m:s"))
            ;
        }

        $this->entityManager->persist($tweet);
        $this->entityManager->flush();
        return $this->json("Vous avez Tweetez avec succès !");
    }

    /**
     * @param Tweet $tweet
     * @return JsonResponse
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    #[Route('/api/tweet/delete/{id}', name: 'api_tweet_delete', methods: ['DELETE'])]
    public function deleteTweet(Tweet $tweet): JsonResponse
    {
        $this->tweetRepository->remove($tweet);
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

/**
 * Allows you to give a random name to an image.
 * @param string $regularName
 * @return string
 */
function getRandomName(string $regularName): string
{
    $infos = pathinfo($regularName);
    try {
        $bytes = random_bytes(15) ;
    }
    catch (Exception $e) {
        $bytes = openssl_random_pseudo_bytes(15);
    }
    return bin2hex($bytes) . "." . $infos['extension'];
}
