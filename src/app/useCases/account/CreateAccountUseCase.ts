
// -> Bcrypt
import bcrypt from 'bcryptjs';

// -> Repository
import type { AccountRepository } from "../../repositories/AccountRepository";

// -> Errors
import { ConflictError } from '../../../shared/errors/ConflictError';
import { NotFoundError } from "../../../shared/errors/NotFoundError";

// -> Types
import type { AccountDTO } from "../../@types/AccountDTO";

export class CreateAccountUseCase {
  constructor(
    private accountRepo: AccountRepository
  ){}
  
  async execute(account: AccountDTO) {
    if(!account.fullName) {
      throw new NotFoundError();
    }

    if(!account.password) {
      throw new NotFoundError();
    }

    if(!account.fullName) {
      throw new NotFoundError();
    }

    const accountExists = await this.accountRepo.findByUsername(account.username);

    if(accountExists) {
      throw new ConflictError('Conta já existente.');
    }

    const hashedPassword = await bcrypt.hash(account.password, 10);

    await this.accountRepo.create({
      ...account,
      password: hashedPassword,
    })
  }
}