import type { CreditCardDTO } from "../@types/CreditCardDTO";

type IUpdate = Omit<CreditCardDTO, 'id'>;

export interface CreditCardImplementation {
  delete(id: string): Promise<void>;
  findAll(): Promise<CreditCardDTO[]>;
  create(creditCard: CreditCardDTO): Promise<void>;
  findById(id: string): Promise<CreditCardDTO | null>;
  // update(id: string, creditCard: IUpdate): Promise<void>;
}