export interface ExpenseDTO {
  id: string;
  date: string;
  type: string;
  value: number;
  cardId?: string;
  createdAt: string;
  description: string;
  totalInstallments?: number;
  currentInstallments?: number;
  method: 'pix' | 'cash' | 'credit_card';
}