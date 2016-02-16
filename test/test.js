var expect = require('chai').expect;
var parser = require('../index.js');

var strings = {
	regular: "Hey I'm a super normal string. I have some punctuation: § will not change.",
	heavy: "§r§00 §11 §22 §33 §44 §55 §66 §77 §88 §99 §aa §bb §cc §dd §ee §ff"
  
}

describe('motd-parser', function() {

  	describe('inputs', function () {

	    it('should always fail if not provided a string', function (done) {
	    	parser.parse({}, function (err, result) {
	    		done(!err);
	    	})
	    });

	    it('should never fail when provided a string', function (done) {
	    	parser.parse("Some string", done);
	    });


  	});

  	describe('outputs', function () {

	    it('should return an array', function (done) {
	    	parser.parse("", function (err, result) {
	    		if (err) throw err;

	    		expect(result).to.be.a("array");

	    		done();
	    	});
	    });

  	});


  	describe('conversions', function () {

	    it('should not modify normal strings', function (done) {
	    	parser.parse(strings.regular, function (err, result) {
	    		if (err) throw err;

	    		expect(result).to.deep.equal([{format: [], string: strings.regular}]);

	    		done();
	    	});
	    });

	    it('should correctly convert motds with modifiers', function (done) {
	    	parser.parse(strings.heavy, function (err, result) {
	    		if (err) throw err;

	    		expect(result).to.deep.equal([{format: [], string: strings.heavy}]);

	    		done();
	    	});
	    });

  	});

});