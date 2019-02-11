var max = 3;
var min = 1;

function randomInteger(min, max) {
	return alert(   Math.round(min - 0.5 + (Math.random() * (max - min + 1))));
}


randomInteger(min, max);