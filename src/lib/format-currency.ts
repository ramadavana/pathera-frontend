import { formatAmountKMBT } from "./format-amount";

// Base Rupiah: Rp1, Rp1.234, Rp12.345, etc. (Indonesian format with dots)
export function formatRupiahBase(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return "Rp" + new Intl.NumberFormat("id-ID").format(numAmount);
}

// Base Dollar: $1, $1,234, $12,345, etc. (US format with commas)
export function formatDollarBase(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return "$" + new Intl.NumberFormat("en-US").format(numAmount);
}

// KMB Rupiah: Rp1.5K, Rp2.5M, Rp3B, etc.
export function formatRupiahKMB(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return "Rp" + formatAmountKMBT(numAmount);
}

// KMB Dollar: $1.5K, $2.5M, $3B, etc.
export function formatDollarKMB(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return "$" + formatAmountKMBT(numAmount);
}
