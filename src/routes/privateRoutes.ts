// -> Express
import { Router } from 'express';

// -> Controllers
import { createAccountController } from '../app/controllers/account';
import { meController } from '../app/controllers/auth';

export const privateRoutes = Router();

privateRoutes.post('/account', (req, res): any => (
  createAccountController.handler(req, res)
));

privateRoutes.get('/account/me', (req, res): any => (
  meController.handler(req, res)
));