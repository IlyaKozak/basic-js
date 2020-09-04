const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const num = parseFloat(sampleActivity);
  if (!num) return false;
  if (num <= 0 || num > MODERN_ACTIVITY) return false;
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / num) /
      (Math.round(Math.LN2 * 1000) / 1000 / HALF_LIFE_PERIOD)
  );
};
