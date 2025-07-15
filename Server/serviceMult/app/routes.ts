import { Router } from 'express';
import { controller } from './controller';
export const createRouter = () => {
  const router = Router();
  router.post('/', (req, res) => new controller().Multiplication(req, res));
    return router;
};