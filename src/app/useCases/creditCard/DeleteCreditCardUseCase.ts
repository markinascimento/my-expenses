// -> Repository
import type { CreditCardRepository } from "../../repositories/CreditCardRepository";

export class DeleteCreditCardUseCase {
  constructor(
    private creditCardRepo: CreditCardRepository
  ){}

  async execute(id: string) {
    await this.creditCardRepo.delete(id);
    return;
  }
}