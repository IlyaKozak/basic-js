<<<<<<< HEAD
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.chain[position - 1] === undefined) {
      this.chain.length = 0;
      throw new Error('Wrong position!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = '( ' + this.chain.map(el => '' + el).join(' )~~( ') + ' )';
    this.chain.length = 0;
    return result;
  }
};

module.exports = chainMaker;
=======
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
