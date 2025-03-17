/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDays = 40 * days;
  const midDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return pricePerDays - bigDiscount;
  }

  if (days >= 3) {
    return pricePerDays - midDiscount;
  }

  return pricePerDays;
}

module.exports = calculateRentalCost;
