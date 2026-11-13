import { describe, expect, test } from "bun:test";
import { getFieldDays, getFieldDayStatus, type FieldClosure } from "../src/lib/fieldStatus";

const closure: FieldClosure = { id: "test", closure_date: "2026-11-14", start_time: "09:00:00", end_time: "12:00:00", reason: "Vorst", status: "closure" };

describe("terreinstatus", () => {
  test("een bevestigde sluiting blijft rood, ook met een item in beraad", () => {
    expect(getFieldDayStatus([closure, { ...closure, id: "pending", status: "pending" }], "2026-11-14").status).toBe("closure");
  });
  test("enkel in beraad betekent pending, niet bespeelbaar", () => {
    expect(getFieldDayStatus([{ ...closure, status: "pending" }], "2026-11-14").status).toBe("pending");
  });
  test("sluitingen gelden alleen op hun eigen datum", () => {
    expect(getFieldDayStatus([closure], "2026-11-15")).toEqual({ status: "playable", items: [] });
  });
  test("de homepage toont vier opeenvolgende dagen volgens Brussel", () => {
    expect(getFieldDays(new Date("2026-11-13T23:30:00Z"), 4).map(day => day.key)).toEqual(["2026-11-14", "2026-11-15", "2026-11-16", "2026-11-17"]);
  });
});