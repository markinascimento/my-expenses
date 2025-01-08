// -> Express
import { Router } from 'express';

// -> Controllers
import { createAccountController } from '../app/controllers/account';

export const privateRoutes = Router();

privateRoutes.post('/account', (req, res): any => (
  createAccountController.handler(req, res)
));