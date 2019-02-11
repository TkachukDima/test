function unique(arr) {

	var obj = {};

	for(var i = 0; i < arr.length; i++) {

		obj[arr[i]] = arr[i];

	}

	var result = Object.keys(obj);

	return result;
}

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

alert(unique(strings));



// var arrAnagram = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];


// function aclean(arr) {

// 	var obj = {};

// 	for(var i = 0; i < arr.length; i++) {

		

// 		var sorted  = arr[i].toLowerCase().split("").sort().join("");

// 		obj[sorted] = arr[i];

// 		}

// 		var result = [];

// 		for(var key in obj) {
// 			result.push(obj[key]);
// 		}
// 		return result;
// 	}

// alert(aclean(arrAnagram));
// alert(arrAnagram);


// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(arr) {
// 	var reverseArr = [];
// 	var tmp = arr;

// 	while(tmp) {
// 		reverseArr.push(tmp.value);
// 		tmp = tmp.next;
// 	}

// 	for(var i = reverseArr.length - 1; i > -1; i--) {

// 		alert(reverseArr[i]);
// 	}



// }

// function printList(arr) {

// 	if(arr.next) {
// 		printList(arr.next);
// 	}

// 	alert(arr.value);
// }



// printList(list);




// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// function compareAge(a, b) {
// 	return a.age - b.age;
// }

// people.sort(compareAge);

// for(var i = 0; i < people.length; i++) {
// 	alert(people[i].name);
// }



// var arr = [1, 2, 3, 4, 5];

// function arrSorted(a, b) {
// 	return Math.random() - 0.5;
// }

// arr.sort(arrSorted);

// alert(arr);



// var arr = ["HTML", "JavaScript", "CSS"];

// var arrSorted = arr.slice().sort();

// alert(arrSorted);
// alert(arr);



// function compareNumeric (a, b) {
// 	return b - a;
// }

// var arr = [5, 2, 1, -10, 8]


// arr.sort(compareNumeric);

// alert(arr);



// function filterRangeInPlace(arr, a, b) {

// 	for( var i = 0; i < arr.length; i++) {
// 		if(arr[i] < a || arr[i] > b) {
// 			arr.splice(i--, 1);
// 		}
// 	}
// }

// arr = [5, 3, 8, 1];

// alert(arr);

// filterRangeInPlace(arr, 1, 4);

// alert(arr);




// var obj = {
//   className: 'open menu open list div menu menu menu menu ul li spam'
// }

// function remoteClass(obj, cls) {
// 	var newObj = obj.className.split(" ");
	
// 	for(var i = 0; i < newObj.length; i++) {
// 			if(newObj[i] == cls) {
// 				newObj.splice(i, 1);
// 				i--;
// 			}
// 	}

// 	obj.className = newObj.join(" ");
// }

// remoteClass(obj, "menu");


// alert(obj.className);




// function camelise(str) {
// 	var arr = str.split('-');

// 	for(var i = 1; i < arr.length; i++) {
// 		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// 	}

// 	return arr.join("");
// }

// alert(camelise("-привіт-я-вивчаю-програмування"));



// var obj = {
//   className: 'dfgr rfsf'
// }

// function addClass(obj, cls) {
// 	var newObj = obj.className ? obj.className.split(" ") : [];
	
// 	for(var i = 0; i < newObj.length; i++) {
// 			if(newObj[i] == cls) return;
// 	}

// 	newObj.push(cls);
// 	obj.className = newObj.join(" ");
// }

// addClass(obj, "menu");


// alert(obj.className);