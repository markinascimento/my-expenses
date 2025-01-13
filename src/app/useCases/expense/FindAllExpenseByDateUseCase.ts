// -> Repository
import type { ExpenseRepository } from '../../repositories/ExpenseRepository';

export class FindAllExpenseByDateUseCase {
  constructor(private expenseRepo: ExpenseRepository){}

  async execute(year: string, month: string) {
    const date = `${year}-${String(month).padStart(2, '0')}`
    
    return await this.expenseRepo.findByDate(date);
  }
}