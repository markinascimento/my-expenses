// -> Repository
import type { ExpenseRepository } from '../../repositories/ExpenseRepository';

export class DeleteExpenseUseCase {
  constructor(private expenseRepo: ExpenseRepository){}

  async execute(year: string, month: string, expenseId: string) {
    const date = `${year}-${String(month).padStart(2, '0')}`
    
    await this.expenseRepo.delete(date, expenseId)
    return;
  }
}