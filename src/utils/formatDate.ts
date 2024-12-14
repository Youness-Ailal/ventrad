import { formatDate as formateFns, differenceInDays } from "date-fns";

export default function formatDate(date: Date) {
  return formateFns(date, "MMMM dd, yyyy");
}
export function isNew(date: Date) {
  const diff = differenceInDays(new Date(), date);
  return diff <= 7 ? true : false;
}
