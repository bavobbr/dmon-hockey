import { addDays, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export interface FieldClosure {
  id: string;
  closure_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  status: "closure" | "pending";
}

export function getFieldDays(now = new Date(), count = 7) {
  const today = toZonedTime(now, "Europe/Brussels");
  return Array.from({ length: count }, (_, index) => {
    const date = addDays(today, index);
    return { date, key: format(date, "yyyy-MM-dd") };
  });
}

export function getFieldDayStatus(closures: FieldClosure[], dateKey: string) {
  const items = closures.filter((closure) => closure.closure_date === dateKey);
  const status = items.some((item) => item.status === "closure")
    ? "closure"
    : items.length > 0 ? "pending" : "playable";
  return { status, items };
}