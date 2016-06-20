'use strict';

var myFunc1 = require('../app/dropbox-datastores-1.2.0.js');
var myFunc2 = require('../app/DropBox.js');



describe('addition', function () {
  it('should add 1+1 correctly', function (done) {
    var onePlusOne = 1 + 1;
    onePlusOne.should.equal(2);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});


describe('addition', function () {
  it('should add 1+3 correctly', function (done) {
    var onePlusOne = 1 + 3;
    onePlusOne.should.equal(4);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});




describe('addition', function () {
  it('test1', function (done) {

    done();
  });
});