// -> Express
import { Router } from 'express';

// -> Controllers
import { signInController } from '../app/controllers/auth';

export const publicRoutes = Router();

publicRoutes.post('/account/sign-in', (req, res): any => (
  signInController.handler(req, res)
));