<<<<<<< HEAD
// code from https://github.com/mikhama/core-js-101
function testOptional(title, fn, isAsyncTest) {
    if (isAsyncTest) {
      it(title, function test(done) {
        try {
          fn.call(this, done);
        } catch (err) {
          if (err === 'Not implemented') {
            console.log('NOT IMPLEMENTED' + title);
            this.test.skip();
          } else {
            console.log('ERR UP' + title);
            throw err;
          }
        }
      });
    } else {
      it(title, function test() {
        try {
          fn.call(this);
        } catch (err) {
          if (err === 'Not implemented') {
            this.test.skip();
          } else {
            throw err;
          }
        }
      });
    }
  }
  
=======
// code is based on solution from https://github.com/mikhama/core-js-101
function testOptional(title, fn, isAsyncTest) {
    if (isAsyncTest) {
      it(title, function test(done) {
        try {
          fn.call(this, done);
        } catch (err) {
          if (err._validationProp === 'NA') {
            this.test.skip();
          } else {
            throw err;
          }
        }
      });
    } else {
      it(title, function test() {
        try {
          fn.call(this);
        } catch (err) {
          if (err._validationProp === 'NA') {
            this.test.skip();
          } else {
            throw err;
          }
        }
      });
    }
  }
  
>>>>>>> ddb2f956b900f57b8b94d48d5fa58f0d4ded9ebe
  module.exports = testOptional;