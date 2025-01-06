// -> Utils
import { CustomError } from "../utils/customError";

export class NotFoundError extends CustomError {
  constructor(message: string = "Not Found") {
    super(message, 404);
  }
}