var arr = [];


noEasy: for( var i = 2; i < 100; i++) {

	for( var j = 2; j < i; j++ ) {

		if(i%j == 0 ) continue noEasy;
	}

	arr.push(i);

}

alert(arr);

var sum = 0;

for(i = 0; i < arr.length; i++) {
	sum += arr[i];
}
alert(sum);


// var arr = [1, 0, 3, -4, -9];

// function getMaxSubSum(arr) {
// 	var maxSum = 0;
// 	var currentSum = 0;

// 	for( i = 0; i < arr.length; i++) {
// 			currentSum += arr[i];
// 			maxSum = Math.max(maxSum, currentSum);
// 			if (currentSum < 0) currentSum = 0;
// 	}

// 	return maxSum;
// }

// alert(getMaxSubSum(arr));



// var arr = [];


// for(var i = 2; i < 100; i++) {
// 	arr[i] = true;
// }

// var  p = 2;

// do {

// 	for( i = 2 * p; i < 100; i += p) {
// 		arr[i] = false;
// 	}

// 	for( i = p + 1; i < 100; i++) {
// 		if(arr[i]) break;
// 	}

// 	p = i;

// } while (p * p < 100);

// var sum = 0;

// for(i = 0; i < arr.length; i++) {
// 	if(arr[i]) sum += i;
// } 

// alert(sum);




// var arr = [5, 4, 3, 8, 0];
// var result = [];

// function filterRange(arr, a, b) {

// 	for(var i =0; i < arr.length; i++) {
// 		if(arr[i] >= a && arr[i] <= b) result.push(arr[i]);
// 	}

// 	return result;
// }

// var filtered = filterRange(arr, 3, 5);

// alert(filtered);



// var arr = ["test", 2, 1.5, false];

// function find(arr, value) {

// 	if(arr.indexOf()) {
// 		return arr.indexOf(value);
// 	}

// 	for(var i = 0; i < arr.length; i++) {

// 		if(arr[i] === value) return i;
		
// 	}

// 	return -1;
// }

// alert (find(arr, "test"));





// var arr = [];

// while(true) {

// 	var elemArr = prompt("Введите число", "0");

// 	if( elemArr === "" || elemArr === null || isNaN(elemArr)) break;

// 	arr.push(+elemArr);
// }

// var sum = 0;
// for(var j = 0; j < arr.length; j++) {

// 	sum += arr[j];

// }


// alert(sum);




// var styles = ["Джаз", "Блюз"];
// styles.push("Rok-n-Rol");
// styles[styles.length - 2] = "Classica";
// styles.shift();
// styles.unshift("Rep", "Reggi");


// var rand = Math.floor(Math.random()*styles.length);

// alert(styles[rand]);


// var goods = ["Vasya","Kolya","Olya"];

// var lastItem = goods[goods.length - 1];
// alert(lastItem);

// goods[goods.length] = "Yabloko";

// alert(goods);
