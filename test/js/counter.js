'use strict'

function makeArmy() {

  var shooters = [];
  for (var i = 0; i < 10; i++) {
    var shooter = function bbb() { // функция-стрелок
      alert(bbb.i); // выводит свой номер
    }
    shooter.i = i;
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...



// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {
//         function g(i) { // функция-стрелок
//             console.log(i);
//             return function() {
//             	alert( i ); // выводит свой номер
//         	}
//     	}

//    	 	var shooter = g(i);


//     shooters.push(shooter);
//   }

//   return shooters;
// }

// var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...



// var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter(arr, func) {
// 	var newArr = [];

// 	for(var i = 0; i < arr.length; i++) {
// 		if(func(arr[i]) == true) newArr.push(arr[i]);
// 	}

// 	return newArr;
// }

// function inBetween(a,b) {

// 	return function(value) {
// 		return value >= a && value <= b;
// 	}
// }


// function inArray(createdArr)  {
// 	return function(value) {
// 		return createdArr.indexOf(value) != -1;
// 	}
// }

// alert(filter(arr, inBetween(3,6)));
// alert(filter(arr, inArray([1,3,8,5,6])));




// function b() {                
// 	function b() {
// 		var b = function() {
// 			console.log("шарик находится");
// 			console.log(b);
// 			b = "под колпачком 3";
// 		};

// 		return b;
// 	}

// 	b = b();
// 	b();
// 	b = "под колпачком 2";
// }

// b();

// var b = "под колпачком 1";





// function getToys() {
// 	var arr = ['vovk', 'zayec', 'mishka'];

// 		function giveToy() {
// 		arr.push(arguments[0]);

// 		}

// 		function getToy() {

// 	 	var randomItem = Math.floor(Math.random()*(arr.length));
// 	 	var myToy = arr[randomItem]; 
// 	 	arr.splice(randomItem,1);


// 	 	if( myToy !== undefined) {
// 	 		return myToy;
// 	 	} else return 'Plach';

// 	}


// 	return [getToy, giveToy];


// }

// var callToy = getToys();

// var gettoysBox = callToy[0];
// var givetoysBox = callToy[1];

// console.log(gettoysBox());
// givetoysBox('asd');
// givetoysBox('aqwerty');
// console.log(gettoysBox());
// console.log(gettoysBox());
// console.log(gettoysBox());
// console.log(gettoysBox());
// console.log(gettoysBox());

// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {
//     var shooter = (function(x) {
//     	return function() {
//     		alert (x);
//     	};
//     })(i);

//     shooters.push(shooter);
//   }

//   return shooters;
// }


// var army = makeArmy();

// army[0](); 
// army[5]();




// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(value) {
// 		return function (a, b) { 
// 			return a[value] > b[value] ? 1: -1;
// 		}
// 	}


// users.sort(byField('name'));

// users.forEach(function(user) {
// 	alert(user.name);
// });




// function makeBuffer() {
// 	var getBuffer = '';

// 	function buffer(value) {
// 		if(arguments.length == 0) return getBuffer;

// 		getBuffer += value;
// 	}

// 	buffer.clear = function() {
// 		getBuffer = '';
// 	};

// 	return buffer;
// }

// var buffer = makeBuffer();


// buffer(null);
// buffer('2');
// buffer('4');
// buffer('0');


// alert(buffer());


// buffer.clear();
// alert(buffer());


// function sum(a) {

// 	return function (b) {
// 		return a+b;
// 	}
// }

// alert(sum(2)(3));