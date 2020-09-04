const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfTurns = 2 ** disksNumber - 1;
  const turnsSpeedPerSec = turnsSpeed / 3600;
  return {
    turns: numberOfTurns,
    seconds: Math.floor(numberOfTurns / turnsSpeedPerSec),
  };
};
