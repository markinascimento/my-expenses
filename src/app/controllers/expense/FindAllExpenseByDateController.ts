

// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { FindAllExpenseByDateUseCase } from '../../useCases/expense/FindAllExpenseByDateUseCase';

export class FindAllExpenseByDateController {
  constructor(
    private findAllExpenseByDateUSC: FindAllExpenseByDateUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const { year, month } = req.query;

      const expenses = await this.findAllExpenseByDateUSC.execute(String(year), String(month));

      return res.status(200).json(expenses);
    } catch (err: any){
      console.log({ err })
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}