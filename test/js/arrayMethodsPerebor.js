var arr = [1, 2, 3, 4, 5];

function getSums(arr) {
	var result = [];

	if(!arr.length) return result;

	arr.reduce(function(sum, current, index) {
		return result[index] = (sum + current);
	}, 0);

	alert(result[0]);

	return result;
}


alert(getSums(arr));



// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var newArrLength = arr.map(function(item) {
// 	return item.length;
// });

// alert(newArrLength);