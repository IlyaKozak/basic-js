const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0)
        arr.push('arr is not empty now & map method will be called');
      return 1 + Math.max(...arr.map(this.calculateDepth));
    } else {
      return 0;
    }
  }
};
