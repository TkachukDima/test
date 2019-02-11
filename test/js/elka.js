function Elka(arr) {
		
		var symbol = arr[1];
		var space = arr[2];
		var maxLenTop = arr[0]*2-1;

		for(var i = 1; i <= arr[0]; i++) {
			var x = '';
			for(var j = 1; j <= maxLenTop; j++) {

				quantitySpace = (maxLenTop - (i*2-1))/2;
				quantitySymbol = (i*2-1);		

				if(j <= quantitySpace ) {
					x += space;
				} 

				if( j > quantitySpace && j <= (maxLenTop -  quantitySpace) ) {
					x += symbol;	
				}

				if(  j > (maxLenTop -  quantitySpace) ) {
					x += space;	
				} 
			}
			console.log(x);
		}

	}


Elka(3, "#", " ", 3);

var DimaElka = {
	firstLine : [3, "#", " "],
	secondLine : [5, "#", " "],
	thirdLine : [7, "#", " "],
}

for(var key in DimaElka) {
	Elka(DimaElka[key]);
}