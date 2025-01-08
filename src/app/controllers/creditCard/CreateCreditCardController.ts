// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { CreateCreditCardUseCase } from './../../useCases/creditCard/CreateCreditCardUseCase';

// -> Types
import type { CreditCardDTO } from '../../@types/CreditCardDTO';
type IParams = Omit<CreditCardDTO, 'id'>;

export class CreateCreditCardController {
  constructor(
    private createCreditCardUSC: CreateCreditCardUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const creditCard: IParams = req.body;

      await this.createCreditCardUSC.execute(creditCard);

      return res.sendStatus(201);
    } catch (err: any){
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}