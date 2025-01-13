// -> Utils
import { CustomError } from "../utils/customError";

export class InternalServerError extends CustomError {
  constructor(message: string = "Internal Server Error") {
    super(message, 500);
  }
}