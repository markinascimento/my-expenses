// -> NodeJS
import { randomUUID } from 'node:crypto';

// -> Repository
import type { CreditCardRepository } from '../../repositories/CreditCardRepository';
import type { ExpenseRepository } from '../../repositories/ExpenseRepository';

// -> Utils
import { addMonth } from '../../../shared/utils/addMonth';
import { formatDate } from '../../../shared/utils/formatDate';

// -> Erros
import { NotFoundError } from '../../../shared/errors/NotFoundError';

interface IInput {
  type: string;
  value: 1999.80,
  cardId: string;
  createdAt: string;
  description: string;
  installments: number;
  method: 'pix' | 'cash' | 'credit_card';
}

export class CreateExpenseUseCase {
  constructor(
    private expenseRepo: ExpenseRepository,
    private creditCardRepo: CreditCardRepository
  ){}

  async execute(expense: IInput) {

    if(!expense.method) {
      throw new NotFoundError('The method not specified');
    }

    if(!expense.type) {
      throw new NotFoundError('The type not specified');
    }

    if(!expense.value) {
      throw new NotFoundError('The value is required to create expense.');
    }
    
    if(expense.method !== 'credit_card') {
      await this.expenseRepo.create({
        id: randomUUID(),
        value: expense.value,
        method: expense.method,
        type: expense.type.trim(),
        description: expense.description.trim(),
        date: formatDate(expense.createdAt, 'yyyy-MM'),
        createdAt: formatDate(expense.createdAt, 'dd/MM/yyyy'),
      })
  
      return;
    }

    const creditCard = await this.creditCardRepo.findById(expense.cardId); 

    const isAddingMonth = Number(formatDate(expense.createdAt, 'dd')) >= Number(creditCard?.bestDay) 
      ? addMonth(expense.createdAt, 1) 
      : expense.createdAt

    for(let i = 0; i < expense.installments; i++) {
      await this.expenseRepo.create({
        id: randomUUID(),
        currentInstallments: i + 1,
        method: expense.method,
        type: expense.type.trim(),
        cardId: String(creditCard?.id),
        description: expense.description.trim(),
        totalInstallments: expense.installments,
        date: formatDate(addMonth(isAddingMonth, i)),
        value: Number(expense.value / expense.installments),
        createdAt: formatDate(addMonth(isAddingMonth, i), 'dd/MM/yyyy'),
      })
    }
    return ;
  }
}