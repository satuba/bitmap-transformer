"use strict";

var fs = require("fs");
var expect = require("chai").expect;
var readbitmap = require("../lib/readbitmap").getHeaderInfo;
var header;

//test that tests will work.
describe("test testing", function() {

  it("shoud give me a passing test", function(done) {
    done();
  });

});

describe("get header info", function() {

  beforeEach(function(done) {
    fs.readFile("./bitmap1.bmp", function(err, data) {
      if(err) {
        return console.log(err);
      }
      header = readbitmap(data);
      done();
    });
  });

  it("should show that headerInfo is an object", function() {
    expect(header).to.be.an("object");
  });

  it("should get the proper type", function() {
    expect(header.type).to.eql("BM");
  });

  it("should get the proper header size", function() {
    expect(header.size).to.eql(11078);
  });
});