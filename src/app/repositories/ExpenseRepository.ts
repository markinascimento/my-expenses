// -> SDK AWS
import { DeleteCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

// -> Config
import { awsConfig } from "../../shared/config/awsConfig";

// -> Infra
import { dynamo } from "../infrastructure/dynamo";

// -> Implementation
import type { ExpenseImplementation } from "../implementations/ExpenseImplementation";

// -> Type
import type { ExpenseDTO } from "../@types/ExpenseDTO";

export class ExpenseRepository implements ExpenseImplementation {
  async findByDate(date: string): Promise<ExpenseDTO[]> {
    const queryCommand = new QueryCommand({
      TableName: awsConfig.expenseDynamoDB,
      KeyConditionExpression: '#date = :date',
      ExpressionAttributeNames: {
        '#date': 'date'
      },
      ExpressionAttributeValues: {
        ':date': date
      }
    });

    const result = await dynamo.send(queryCommand);
    const expenses = result.Items as ExpenseDTO[];

    return expenses ?? [];
  }
  
  async create(expense: ExpenseDTO): Promise<void> {
    const putCommand = new PutCommand({
      TableName: awsConfig.expenseDynamoDB,
      Item: expense
    })

    await dynamo.send(putCommand);
    return;
  }

  async delete(date: string, id: string): Promise<void> {
    const deleteCommand = new DeleteCommand({
      TableName: awsConfig.expenseDynamoDB,
      Key: { date, id }
    });

    await dynamo.send(deleteCommand)

    return;
  }
}