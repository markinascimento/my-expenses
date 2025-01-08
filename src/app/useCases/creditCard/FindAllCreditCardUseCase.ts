// -> Repository
import type { CreditCardRepository } from "../../repositories/CreditCardRepository";

export class FindAllCreditCardUseCase {
  constructor(
    private creditCardRepo: CreditCardRepository
  ){}

  async execute() {
    const creditCards = await this.creditCardRepo.findAll();
    return creditCards;
  }
}