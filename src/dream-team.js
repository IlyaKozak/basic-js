const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  return members
    .filter((name) => typeof name === 'string')
    .map((name) => name.trim()[0].toUpperCase())
    .sort()
    .join('');
};
