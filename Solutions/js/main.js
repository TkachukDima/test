let start = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionaLexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('#income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

    

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null ) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

}

start();


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = prompt("Во сколько обойдется?", "");
      if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
           && a != "" && b != "" && a.length < 50 ) {
            console.log("Done!")  
            appData.expenses[a] = b;
      } else {
          i--;
          alert("Что-то пошло не так, введите данные ещё раз!");
      }
    };
  },
  detectDayBudget: function() {
      appData.moneyPerDay = +((appData.budget / 30).toFixed());
      alert("Бюджет на один день: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay >= 2000 ) {
      console.log("Высокий уровень досатка")
    } else {
      console.log("Произошла ошибка!")
    }
  },
  checkSavings: function() {
    if(appData.savings == true) {
      let save = +prompt("Какова суииа накоплений?", ""),
          percent = +prompt("Под какой процент?", "");
      
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let opt = prompt("Статья необязательных расходов?", "");
      appData.optionalExpenses[i] = opt;
    };
  },
  chooseIncome: function() {
    let items = prompt("Что принесёт дополнительный доход? (Перечистите через запятую)", "");
    
    while( || items == "" || items == null ) {
      items = prompt("Что принесёт дополнительный доход? (Перечистите через запятую)", "");
    }
   
    appData.income = items.split(", ");
    appData.income.push(prompt("Може что-то ещё?", ""));
    appData.income.sort();

    appData.income.forEach(function(item, i) {
      console.log("Способы дополнительного зароботка: " + item);
    });

  }

};

function showAppData() {
  console.log("Наша программа включает в себя данные: ");
  for( let key in appData) {
      console.log(key + " : " + appData[key]);
  };
};


