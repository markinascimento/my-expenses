// -> Express
import type { Request, Response } from "express";

// -> Use Case
import type { SignInUseCase } from "../../useCases/auth/SignInUseCase";

// -> Types
import type { AccountDTO } from "../../@types/AccountDTO";
type Input = Omit<AccountDTO, 'fullName' | 'avatar'>

export class SignInController {
  constructor(
    private SignInUSC: SignInUseCase
  ){}

  async handler(req: Request, res: Response) {
    try {
      const body: Input = req.body;
      
      const result = await this.SignInUSC.execute(body);

      return res.status(200).json(result);
    } catch (err: any) {
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}