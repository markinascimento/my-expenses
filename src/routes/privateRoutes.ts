// -> Express
import { Router } from 'express';

// -> Controllers
import { createAccountController } from '../app/controllers/account';
import { meController } from '../app/controllers/auth';
import {
  createCreditCardController,
  deleteCreditCardController,
  findAllCreditCardController
} from '../app/controllers/creditCard';

export const privateRoutes = Router();

privateRoutes.post('/account', (req, res): any => (
  createAccountController.handler(req, res)
));

privateRoutes.get('/account/me', (req, res): any => (
  meController.handler(req, res)
));

privateRoutes.post('/credit-card', (req, res): any => (
  createCreditCardController.handler(req, res)
));

privateRoutes.delete('/credit-card/:id', (req, res): any => (
  deleteCreditCardController.handler(req, res)
));

privateRoutes.get('/credit-card', (req, res): any => (
  findAllCreditCardController.handler(req, res)
));

