import { AccountRepository } from "../../repositories/AccountRepository";
import { SignInUseCase } from "../../useCases/auth/SignInUseCase";
import { SignInController } from "./SignInController";

const accountRepo = new AccountRepository()

const signInUSC = new SignInUseCase(accountRepo);

export const signInController = new SignInController(signInUSC);