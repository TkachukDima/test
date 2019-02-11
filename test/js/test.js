describe ("pow", function() {
	
	describe("Возводит х в степень n", function() {

	  function makeTest(x) {
	  	var expected = x * x * x;
	  	it( "Возводит " + x + " в 3-ю степень, результат: " + expected, function() {
	  		assert.equal(pow(x, 3), expected);
	  	} );
	  }

	    	for(var x = 1; x <= 5; x++) {
	  		makeTest(x);
	  	}
	});

	describe("Любое число, кроме 0, в степени 0 равно 1", function() {

	  function makeTest(x) {
	  	var expected = 1;
	  	it( "Возводит " + x + " в степень 0, результат: " + expected, function() {
	  		assert.equal(pow(x, 0), 1);
	  	} );
	  }

	    	for(var x = -5; x <= 5; x += 2) {
	  		makeTest(x);
	  	}
	});

	

	it("при возведении в отрицательную степень результат NaN", function() {
	    assert(isNaN(pow(2, -1)), "pow(2, -1) результат не NaN");
	});

	it("при возведении в дробную степень результат NaN", function() {
	    assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) результат не NaN");
	});

	
	it("Ноль в нулевой степени даёт NaN", function() {
		assert(isNaN(pow(0, 0)), "0 в 0 степени не NaN");
	})

});