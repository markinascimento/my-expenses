// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { FindAllCreditCardUseCase } from './../../useCases/creditCard/FindAllCreditCardUseCase';

export class FindAllCreditCardController {
  constructor(
    private findAllCreditCardUSC: FindAllCreditCardUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const creditCards = await this.findAllCreditCardUSC.execute();

      return res.status(200).json(creditCards);
    } catch (err: any){
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}