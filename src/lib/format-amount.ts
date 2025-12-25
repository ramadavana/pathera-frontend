// Format amount with KMB suffixes (K=thousands, M=millions, B=billions)
export function formatAmountKMBT(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (numAmount < 1000) return numAmount.toString();

  const suffixes = ["", "K", "M", "B"];
  let suffixIndex = 0;
  let value = numAmount;

  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000;
    suffixIndex++;
  }

  // Round to 1 decimal place
  const rounded = Math.round(value * 10) / 10;

  // Remove .0 if it's a whole number
  return rounded % 1 === 0
    ? `${rounded}${suffixes[suffixIndex]}`
    : `${rounded}${suffixes[suffixIndex]}`;
}
