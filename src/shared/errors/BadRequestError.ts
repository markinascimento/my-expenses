// -> Utils
import { CustomError } from "../utils/customError";

export class BadRequestError extends CustomError {
  constructor(message: string = "Bad Request") {
    super(message, 400);
  }
}