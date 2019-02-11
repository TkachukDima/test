var d = new Date(new Date() - 54172000);

function formatDate(date) {
	
	var diff = new Date() - date;
	if(diff < 1000) return 'только что';
	if(diff < 60*1000) return Math.floor(diff/1000) + ' сек. назад';
	if(diff < 3600*1000) return Math.floor(diff/60000) + ' мин. назад';


	var year = date.getFullYear() + '';

	var arr = [date.getDate(), date.getMonth() + 1, date.getHours(), date.getMinutes()];

	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < 10) {arr[i] = '0' + arr[i]}
	}
	
	return arr[0] + '.' + arr[1] + '.' + year.slice(-2) + ' ' + arr[2] + ':' + arr[3];

}

alert(formatDate(d));

// function formatDate( date) {

// 	var dd = date.getDate();
// 	if(dd < 10) dd = "0" + dd;

// 	var mm = date.getMonth() + 1;
// 	if(mm < 10) mm = "0" + mm;

// 	var yy = date.getYear()%100;
// 	if(yy < 10) yy = "0" + yy;

// 	return dd + '.' + mm + '.' + yy;

	// var options = {
	// 	day : "2-digit",
	// 	month : "2-digit",
	// 	year : "2-digit"
	// }

	// return date.toLocaleString("ru", options);
// }

// alert(formatDate(d));




// function getSecondsToday() {
// 	var de = new Date()

// 	var currentDate = new Date(de.getFullYear(), de.getMonth(), de.getDate() + 1);

// 	var diff = currentDate - de;
// 	return Math.floor(diff/1000);

// }

// alert(getSecondsToday());



// function getLastDayOfMonth(year, month) {
// 	var lastDayMonth = new Date(year, month + 1, 0);

// 	return lastDay.getDate();
// }






// function getDateAgo(date, days) {
// 	var copyDate = new Date(date);

// 	copyDate.setDate(date.getDate() - days);
// 	return copyDate.getDate();
// }


// alert(getDateAgo(de, 1));




// function getDateAgo(date, days) {

// 	var d = date.getTime() - days*86400000;

// 	var result = new Date(d);
//     result = result.getDate();
// 	return result;

// }




// function getLocalDay(element) {
	
// 	var d = element.getDay();
	
// 	if(d == 0) d =7;

// 	return d;

// }

// alert(getLocalDay(date));



// function getWeekDay(element) {
	
// 	var arrDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// 	return arrDay[element.getDay()];

	
// }







// var currentDate = new Date(2012, 1, 20, 3, 12);

// alert(currentDate);




// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;

// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }

// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }

// function bench(f) {
//   for (var i = 0; i < 10000; i++) f(arr);
// }

// console.time("All Benchmarks");

// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");

// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");

// console.timeEnd("All Benchmarks");