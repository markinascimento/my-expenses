// -> JWT 
import jwt from 'jsonwebtoken';

// -> Bcrypt
import bcryptjs from 'bcryptjs';

// -> Repository
import type { AccountRepository } from "../../repositories/AccountRepository";

// -> Errors
import { NotFoundError } from "../../../shared/errors/NotFoundError";

// -> Types
import type { AccountDTO } from "../../@types/AccountDTO";
type Input = Omit<AccountDTO, 'fullName' | 'avatar'>

export class SignInUseCase {
  constructor(private accountRepo: AccountRepository){}
  
  async execute(auth: Input) {
    if(!auth.password) {
      throw new NotFoundError();
    }

    if(!auth.username) {
      throw new NotFoundError();
    }

    const accountExists = await this.accountRepo.findByUsername(auth.username);

    if(!accountExists) {
      throw new NotFoundError('Não conseguimos indentificar contas existente com esse usuário.');
    }

    const isEqualsPassword = await bcryptjs.compare(auth.password, accountExists.password);

    if(!isEqualsPassword) {
      throw new NotFoundError('Credenciais inválidas');
    }

    const accessToken = jwt.sign(
      { username: accountExists.username },
      String(process.env.JWT_SECRET_TOKEN),
      { expiresIn: '12h' }
    )

   return {
    accessToken,
    user: {
      username: accountExists.username,
      fullName: accountExists.fullName,
      avatar: accountExists.avatar
    }
   };
  }
}