// -> JWT 
import jwt from 'jsonwebtoken';

// -> Errors
import { UnauthorizedError } from '../../../shared/errors/UnauthorizedError';

export class MeUseCase {
  constructor(){}
  
  async execute(authHeader: string) {
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
      }
    )

    return;
  }
}