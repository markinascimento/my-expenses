import { AccountRepository } from "../../repositories/AccountRepository";

import { MeUseCase } from "../../useCases/auth/MeUseCase";
import { SignInUseCase } from "../../useCases/auth/SignInUseCase";

import { MeController } from "./MeController";
import { SignInController } from "./SignInController";

const accountRepo = new AccountRepository()

const signInUSC = new SignInUseCase(accountRepo);
const meUSC = new MeUseCase();

export const signInController = new SignInController(signInUSC);
export const meController = new MeController(meUSC);