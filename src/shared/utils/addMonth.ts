// -> Date lib
import { addMonths } from "date-fns";

export function addMonth(date: string | Date, increment: number) {
  const dateWithMonthAdding = addMonths(new Date(date), increment);

  return dateWithMonthAdding;
}