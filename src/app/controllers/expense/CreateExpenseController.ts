// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { CreateExpenseUseCase } from './../../useCases/expense/CreateExpenseUseCase';

interface IInput {
  type: string;
  value: 1999.80,
  cardId: string;
  createdAt: string;
  description: string;
  installments: number;
  method: 'pix' | 'cash' | 'credit_card';
}

export class CreateExpenseController {
  constructor(
    private createExpenseUSC: CreateExpenseUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const expense: IInput = req.body;

      await this.createExpenseUSC.execute(expense);

      return res.sendStatus(201);
    } catch (err: any){
      console.log({ err })
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}