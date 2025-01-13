// -> Utils
import { CustomError } from "../utils/customError";

export class ConflictError extends CustomError {
  constructor(message: string = "Conflict") {
    super(message, 409);
  }
}