// -> Types
import type { ExpenseDTO } from "../@types/ExpenseDTO";

export interface ExpenseImplementation {
  findByDate(date: string): Promise<ExpenseDTO[]>;
  create(expense: ExpenseDTO): Promise<void>;
  delete(date: string, id: string): Promise<void>;
}