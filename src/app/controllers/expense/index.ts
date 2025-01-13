// -> Repositories
import { CreditCardRepository } from '../../repositories/CreditCardRepository';
import { ExpenseRepository } from '../../repositories/ExpenseRepository';

// -> Use Case
import { CreateExpenseUseCase } from '../../useCases/expense/CreateExpenseUseCase';
import { DeleteExpenseUseCase } from '../../useCases/expense/DeleteExpenseUseCase';
import { FindAllExpenseByDateUseCase } from '../../useCases/expense/FindAllExpenseByDateUseCase';

// -> Controller
import { CreateExpenseController } from './CreateExpenseController';
import { DeleteExpenseController } from './DeleteExpenseController';
import { FindAllExpenseByDateController } from './FindAllExpenseByDateController';

const creditCardRepo = new CreditCardRepository();
const expenseRepo = new ExpenseRepository();

const deleteExpenseUSC = new DeleteExpenseUseCase(expenseRepo); 
const createExpenseUSC = new CreateExpenseUseCase(expenseRepo, creditCardRepo);
const findAllExpenseByDateUSC = new FindAllExpenseByDateUseCase(expenseRepo);

export const createExpenseController = new CreateExpenseController(createExpenseUSC);
export const deleteExpenseController = new DeleteExpenseController(deleteExpenseUSC);
export const findAllExpenseByDateController = new FindAllExpenseByDateController(findAllExpenseByDateUSC);