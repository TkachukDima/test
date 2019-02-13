let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let nameExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let howManyExpenses = prompt("Во сколько обойдется?", "");

let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    nameExpenses: howManyExpenses
  },
  optionalExpenses: {},
  income: [],
  savings: false
}

console.log(money);
console.log(time);
console.log(nameExpenses);
console.log(howManyExpenses);
console.log(money);

for(let key in appData) {
  console.log(key + " : " + appData[key]);
}

 alert(money/30);
