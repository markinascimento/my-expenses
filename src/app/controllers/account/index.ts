import { AccountRepository } from "../../repositories/AccountRepository";
import { CreateAccountUseCase } from "../../useCases/account/CreateAccountUseCase";
import { CreateAccountController } from "./CreateAccountController";

const accountRepo = new AccountRepository()

const createAccountUSC = new CreateAccountUseCase(accountRepo);

export const createAccountController = new CreateAccountController(createAccountUSC);