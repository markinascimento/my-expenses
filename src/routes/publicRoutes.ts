// -> Express
import { Router } from 'express';

// -> Controllers
import { createAccountController } from '../app/controllers/account';

export const publicRoutes = Router();

publicRoutes.post('/account', (req, res): any => (
  createAccountController.handler(req, res)
));