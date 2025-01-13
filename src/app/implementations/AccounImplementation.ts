// -> Types
import type { AccountDTO } from "../@types/AccountDTO";

export interface AccounImplementation {
  findByUsername(username: string): Promise<AccountDTO | null>;
  create(account: AccountDTO): Promise<void>;
}