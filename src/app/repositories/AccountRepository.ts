// -> SDK AWS
import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

// -> Config
import { awsConfig } from "../../shared/config/awsConfig";

// -> Infra
import { dynamo } from "../infrastructure/dynamo";

// -> Implementation
import type { AccounImplementation } from "../implementations/AccounImplementation";

// -> Types
import type { AccountDTO } from "../@types/AccountDTO";

export class AccountRepository implements AccounImplementation {
  async findByUsername(username: string): Promise<AccountDTO | null> {
    const getCommand = new GetCommand({
      TableName: awsConfig.accountDynamoDB,
      Key: { username }
    });

    const result = await dynamo.send(getCommand);
    
    const account = result.Item as AccountDTO;

    return account ?? null;
  }

  async create(account: AccountDTO): Promise<void> {
    const putCommand = new PutCommand({
      TableName: awsConfig.accountDynamoDB,
      Item: account
    });

    await dynamo.send(putCommand);
    
    return;
  }
}