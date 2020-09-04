<<<<<<< HEAD
module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error('Not an Array!');
  const result = [];
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (isDiscarded) {
      isDiscarded = false;
    }
    else if (arr[i] === '--discard-next') {
      isDiscarded = true;
    }
    else if (arr[i] === '--discard-prev') {
      result.pop();
    }
    else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
    }
    else if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined) result.push(arr[i - 1]);
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
};
=======
const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
