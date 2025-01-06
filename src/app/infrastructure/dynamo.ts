import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: 'sa-east-1',
  credentials: {
    accessKeyId: String(process.env.AWS_ACCESS_KEY).trim(),
    secretAccessKey: String(process.env.AWS_SECRET_KEY).trim()
  }
});
export const dynamo = DynamoDBDocumentClient.from(client);

