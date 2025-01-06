// -> Utils
import { CustomError } from "../utils/customError";

export class UnauthorizedError extends CustomError {
  constructor(message: string = "Unauthorized") {
    super(message, 401);
  }
}