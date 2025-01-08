// -> Express
import { NextFunction, Request, Response } from 'express';

// -> JWT 
import jwt from 'jsonwebtoken';

// Erros
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Token utilizando formato inválido');
  }

  const accessToken = authHeader.split(' ')[1];

  try {
    jwt.verify(
      accessToken, 
      String(process.env.JWT_SECRET_TOKEN).trim()
    )
    
    next();
  } catch  {
    return res.status(401);
  }
}