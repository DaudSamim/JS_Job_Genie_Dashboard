import { Router } from 'express';
import { addChallenge, getAllChallenges } from '../controllers/challenge.controller';

const challengeRoute = () => {
  const router = Router();

  router.get('/challenges', getAllChallenges);
  router.post('/addChallenge', addChallenge);

  return router;
};

export { challengeRoute };
