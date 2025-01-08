// -> SDK AWS
import { DeleteCommand, GetCommand, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

// -> Config
import { awsConfig } from "../../shared/config/awsConfig";

// -> Infra
import { dynamo } from "../infrastructure/dynamo";

// -> Implementation
import type { CreditCardImplementation } from "../implementations/CreditCardImplementation";

// -> Types
import type { CreditCardDTO } from "../@types/CreditCardDTO";

export class CreditCardRepository implements CreditCardImplementation {
  async findAll(): Promise<CreditCardDTO[]> {
    const scanCommand = new ScanCommand({
      TableName: awsConfig.creditCardDynamoDB
    });

    const result = await dynamo.send(scanCommand) ;
    const creditCards = result.Items as CreditCardDTO[];
    
    return creditCards ?? [];
  }

  async findById(id: string): Promise<CreditCardDTO | null> {
    const getCommand = new GetCommand({
      TableName: awsConfig.creditCardDynamoDB,
      Key: { id }
    })

    const result = await dynamo.send(getCommand);

    const creditCard = result.Item as CreditCardDTO;
    
    return creditCard ?? null;
  }

  async create(creditCard: CreditCardDTO): Promise<void> {
    const putCommand = new PutCommand({
      TableName: awsConfig.creditCardDynamoDB,
      Item: creditCard
    });

    await dynamo.send(putCommand);

    return;
  }

  // async update(id: string, creditCard: { bank: string; owner: string; bestDay: number; bgColor: string; }): Promise<void> {
  //   return ;
  // }

  async delete(id: string): Promise<void> {
    const deleteCommand = new DeleteCommand({
      TableName: awsConfig.creditCardDynamoDB,
      Key: { id }
    });

    await dynamo.send(deleteCommand);

    return;
  }
}