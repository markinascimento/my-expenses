// -> Express
import type { Request, Response } from "express";

// -> Use Case
import type { MeUseCase } from "../../useCases/auth/MeUseCase";

export class MeController {
  constructor(
    private MeUSC: MeUseCase
  ){}

  async handler(req: Request, res: Response) {
    try {
      const accessToken = req.headers.authorization as string;
      
      await this.MeUSC.execute(accessToken);

      return res.sendStatus(200);
    } catch (err: any) {
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}