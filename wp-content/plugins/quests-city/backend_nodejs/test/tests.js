var chai = require('chai'),
    expect = chai.expect;
    math = require('mathjs');

chai.should();

function add(num1, num2) {
    return num1 + num2;
}

describe('First some tests:', function () {
    var num;

    beforeEach(function() {
        num = 5;
    });

    afterEach(function() {

    });

    it('should pass - function Done', function (done) {
        done();
    });

    it('should not pass', function (done) {
        //throw "don't pass";
        done();
    });

    it('should be ten when adding 5 to 5', function() {
        num = add(num, 5);
        num.should.equal(10);
    });

    it('should be twleve when adding 7 to 5', function() {
        add(num, 7).should.equal(12);
    });

    it('log 10000 in 10 should be 4', function() {
        math.log(10000, 10).should.equal(4);
    });
});