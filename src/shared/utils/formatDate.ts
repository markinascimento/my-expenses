// -> Date lib
import { format } from "date-fns";

export function formatDate(date: string | Date, type = 'yyyy-MM'): string {
  return format(new Date(date), type)
}