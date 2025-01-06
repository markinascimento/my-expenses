// -> Express
import type { Request, Response } from "express";

// -> Use Case
import type { CreateAccountUseCase } from "../../useCases/account/CreateAccountUseCase";

// -> Types
import type { AccountDTO } from "../../@types/AccountDTO";

export class CreateAccountController {
  constructor(
    private createAccountUSC: CreateAccountUseCase
  ){}

  async handler(req: Request, res: Response) {
    try {
      const account: AccountDTO = req.body;
      
      await this.createAccountUSC.execute(account);

      return res.sendStatus(201);
    } catch (err: any) {
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}