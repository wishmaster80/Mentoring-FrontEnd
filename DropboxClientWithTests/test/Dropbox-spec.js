'use strict';

var DropBoxClient = require('../app/DropBox.js');
var testFunction = DropBoxClient.testFunction;
var Authorize = DropBoxClient.Authorize;

describe('testFunction', function () {
  it('should add two params correctly', function (done) {
    var a = 1;
    var b = 2;
    testFunction(a, b).should.equal(3);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});

describe('Authorize', function () {
  it('should Authorize to Dropbox API', function (done) {
    var key = "r4vdwcjpvu6hn1y";
    Authorize(key).then(function(data){
        data.should.equal("isAuthenticated");
    })
    done();
  });
});

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
