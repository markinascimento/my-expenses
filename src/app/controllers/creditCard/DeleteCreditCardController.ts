// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { DeleteCreditCardUseCase } from './../../useCases/creditCard/DeleteCreditCardUseCase';

export class DeleteCreditCardController {
  constructor(
    private deleteCreditCardUSC: DeleteCreditCardUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const { id } = req.params;

      await this.deleteCreditCardUSC.execute(String(id));

      return res.sendStatus(204);
    } catch (err: any){
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}