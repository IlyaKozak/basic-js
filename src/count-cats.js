<<<<<<< HEAD
module.exports = function countCats(matrix) {
  return (matrix.join().match(/(?<=,|^)\^\^(?=,|$)/g) || []).length;
};
=======
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
