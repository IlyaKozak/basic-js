<<<<<<< HEAD
module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  return members
    .filter(name => typeof name === 'string')
    .map(name => name.trim()[0].toUpperCase())
    .sort()
    .join('');
};
=======
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
