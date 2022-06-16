import { Router } from 'express';
import { addComment, getCommentsForChallenge, replyToComment } from '../controllers/comment.controller';

const commentRoute = () => {
  const router = Router();

  router.get('/getChallengeComments', getCommentsForChallenge);
  router.post('/addComment', addComment);
  router.post('/replyToComment', replyToComment);

  return router;
};

export { commentRoute };
