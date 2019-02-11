var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}
var counter3 = makeCounter();
var counter = makeCounter();
var counter2 = makeCounter();
alert(makeCounter());
alert(counter2());

alert(counter());


// var sum = "";

// EasyNumber :

// for (var i =2; i <= 100; i++) {

// 	for (var j = 2; j < i; j++ ) {
		 
// 		if(i%j == 0) continue EasyNumber;
// 	}

// 	sum += i + ", " ;

// }

// alert (sum);