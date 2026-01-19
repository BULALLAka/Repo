export function calculateMonthlyPayment(principal, annualRatePercent, months) {
  const r = (annualRatePercent / 100) / 12; // monthly rate
  if (r === 0) return Math.ceil(principal / months);
  const payment = (principal * r) / (1 - Math.pow(1 + r, -months));
  return Math.ceil(payment); // round up
}

export function generateId(prefix = '') {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}

export function monthsToMs(months) {
  return months * 30 * 24 * 60 * 60 * 1000;
}