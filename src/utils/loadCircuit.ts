// src/utils/loadCircuit.ts
import { readFileSync } from "fs";
import { join } from "path";

export function loadCircuit() {
  const file = join(process.cwd(), "public", "circuit.json");
  const raw  = readFileSync(file, "utf-8");
  return JSON.parse(raw);
}