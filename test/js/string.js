function extractCurrencyValue(str) {
	return +str.slice(1);
}

alert(extractCurrencyValue("$120"));


// function truncate(str, maxLength) {

// 	if (str.length > maxLength) return str.slice(0, maxLength -3) + "...";

// 	return str;

// }

// alert(truncate("Привет я пришол на роботу утром и купит себе кофе", 10))




// function checkSpam (str) {

// 	var lowerStr = str.toLowerCase();

// 	return !!(~lowerStr.indexOf("viagra") || ~lowerStr.indexOf("xxx") );


// }

// alert(checkSpam("привет я принес"));




// function usFirst(str) {
	
// 	if(!str) return str;

// 	return str[0].toUpperCase() + str.slice(1);
// }

// alert(usFirst("qwerty"));