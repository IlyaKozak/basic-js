<<<<<<< HEAD
module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) arr.push('arr is not empty now & map method will be called');
      return 1 + Math.max(...arr.map(this.calculateDepth));
    } else {
      return 0;
    }
  }
=======
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
};