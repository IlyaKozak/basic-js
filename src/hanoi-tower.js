module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfTurns = 2 ** disksNumber - 1;
  const turnsSpeedPerSec = turnsSpeed / 3600;
  return {
    turns: numberOfTurns,
    seconds: numberOfTurns / turnsSpeedPerSec
  };
}