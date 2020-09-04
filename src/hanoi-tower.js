<<<<<<< HEAD
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfTurns = 2 ** disksNumber - 1;
  const turnsSpeedPerSec = turnsSpeed / 3600;
  return {
    turns: numberOfTurns,
    seconds: numberOfTurns / turnsSpeedPerSec
  };
}
=======
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
