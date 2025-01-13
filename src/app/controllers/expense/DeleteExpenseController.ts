// -> Express
import { Request, Response } from 'express';

// -> Use Case
import { DeleteExpenseUseCase } from '../../useCases/expense/DeleteExpenseUseCase';

export class DeleteExpenseController {
  constructor(
    private DeleteExpenseUSC: DeleteExpenseUseCase
  ){}

  async handler(req: Request, res: Response){
    try {
      const { expenseId } = req.params;
      const { year, month } = req.body;

      await this.DeleteExpenseUSC.execute(
        String(year), 
        String(month), 
        String(expenseId)
      );

      return res.sendStatus(204);
    } catch (err: any){
      console.log({ err })
      return res.status(err?.statusCode).json({
        message: err?.message
      });
    }
  }
}