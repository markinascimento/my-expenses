// -> NodeJS
import { randomUUID } from "node:crypto";

// -> Repository
import type { CreditCardRepository } from "../../repositories/CreditCardRepository";

// -> Erros
import { NotFoundError } from "../../../shared/errors/NotFoundError";

// -> Types
import type { CreditCardDTO } from "../../@types/CreditCardDTO";

type IParams = Omit<CreditCardDTO, 'id'>;

export class CreateCreditCardUseCase {
  constructor(
    private creditCardRepo: CreditCardRepository
  ){}

  async execute(creditCard: IParams) {
    if(!creditCard.bank) {
      throw new NotFoundError('Não indentificamos o nome do cartão');
    }

    if(!creditCard.bestDay) {
      throw new NotFoundError("Porfavor, informe o melhor dia para compra nesse cartão");
    }

    await this.creditCardRepo.create({
      ...creditCard,
      id: randomUUID(),
    })
    
    return;
  }
}