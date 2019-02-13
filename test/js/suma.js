'use strict'
// var firstNum = +prompt("Введите первое число", "");
// var secondNum = +prompt("Введите второе число", "");

// alert(firstNum + secondNum);

// alert(6.35.toFixed(20));
 

// var calc = (a, b) => a+b;
// console.log(calc(5, 7));

// let twelve = "12.5px";

// //console.log(Math.floor(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let options = {
//   width: 1024,
//   height: 1024,
//   name: "test",
//   colors: {border: "black", bg: "red"}
// }

// console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(item, i , array) {
//   console.log("Element: " + item + ", Number element: " + i + " for array:" + array);
// });

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");

// console.log(arr);


// let arr = ["qqq", "www", "rrr", "ttt"],
//     i = arr.join(", ");

// console.log(i);
// function compareNum(a, b) {
//   return a-b;
// }

// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);

// console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
  health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);