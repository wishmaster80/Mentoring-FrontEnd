'use strict';
var myFunc2 = require('../app/DropBox.js');

describe('addition', function () {
  it('should add 10+1 correctly', function (done) {
    console.log(myFunc2);
	//var x= myFunc2.GetFileList();
    //onePlusOne.should.equal(12);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});