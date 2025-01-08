// -> Repository
import { CreditCardRepository } from '../../repositories/CreditCardRepository';

// -> Use Case
import { CreateCreditCardUseCase } from '../../useCases/creditCard/CreateCreditCardUseCase';
import { DeleteCreditCardUseCase } from '../../useCases/creditCard/DeleteCreditCardUseCase';
import { FindAllCreditCardUseCase } from '../../useCases/creditCard/FindAllCreditCardUseCase';

// -> Controller
import { CreateCreditCardController } from './CreateCreditCardController';
import { DeleteCreditCardController } from './DeleteCreditCardController';
import { FindAllCreditCardController } from './FindAllCreditCardController';

const creditCardRepo = new CreditCardRepository();

const creditCardUSC = new CreateCreditCardUseCase(creditCardRepo);
const deleteCreditCardUSC = new DeleteCreditCardUseCase(creditCardRepo);
const findAllCreditCardUSC = new FindAllCreditCardUseCase(creditCardRepo);

export const createCreditCardController = new CreateCreditCardController(creditCardUSC);
export const deleteCreditCardController = new DeleteCreditCardController(deleteCreditCardUSC);
export const findAllCreditCardController = new FindAllCreditCardController(findAllCreditCardUSC);