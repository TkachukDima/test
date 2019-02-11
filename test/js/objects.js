"use strict";

function isNumeric(n) {
	return 	!isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {

	for (var key in obj) {
	if( isNumeric(obj[key])) obj[key] = obj[key]*2;
	
	}


}


var menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multiplyNumeric(menu);

alert(menu.width + ", " +  menu.height + ", " + menu.title);

	

// var saleries = {
// 	"Vasya" : 200,
// 	"Kolya" : 50,
// 	"Petya" : 5000,
// 	"Olya"  : 8
// }

// var max = 0;
// var maxName = "";

// for (var name in saleries) {
// 	if(max < saleries[name]) {
// 		max = saleries[name];
// 		maxName = name;
// 	}
// }

// alert(maxName || "нет сотрудников");	



// var result = 0;

// for (var key in saleries) {
// 	result += saleries[key];
// }



// function isEmpty(obj) {

// 	for( var key in obj) {
// 		return false;
// 	}

// 	return true;
// }

// var user ={};

// alert(isEmpty(user));

// user.name = "Vasya";
// user.age = 25;

// alert(isEmpty(user));


// var codes = {
//   "+7": "Россия",
//   "+38": "Украина",
//   "+1": "США"
// };

// for (var code in codes) {
//   var value = codes[code];
//   code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7

//   alert( code + ": " + value ); // 7, 38, 1 во всех браузерах
// }



// var person = {};

// person.name = "Dima";
// person.age = 31;

// alert( person.name + " : " + person.age);

// var user = {};
// user.name = "Vasya";
// user.surname = "Petrov";
// user.name = "Sergey";
// delete user.name;