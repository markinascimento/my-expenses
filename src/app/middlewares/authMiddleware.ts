// -> Express
import { NextFunction, Request, Response } from 'express';

// -> JWT 
import jwt from 'jsonwebtoken';

// Erros
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError';

export function authMiddleware(req: Request, res: Response, next: NextFunction): any {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Token utilizando formato inválido');
  }

  const accessToken = authHeader.split(' ')[1];

  jwt.verify(
    accessToken, 
    String(process.env.JWT_SECRET_TOKEN).trim(), 
    function (err) {
      if(err) {
        throw new UnauthorizedError();
      }
      
      next();

      return; 
    }
  )
}