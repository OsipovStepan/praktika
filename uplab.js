alert('Я JavaScript!')

///////////////////////
"use strict";

let a = prompt('какое "официальное"название JavaScript?')
if (a =="ECMAScript"){alert('Верно');
}else {alert('Не знаете? ECMAScript!')} 

/////////////////////////

"use strict"
let admin;
let name;
name = "Джон";
admin=name;
alert(admin);

/////////////////////////

let Name = prompt('Как тебя зовут ?');
alert(`Тебя зовут ${Name}`);

/////////////////////////

let a = prompt('Введите число');

if (a > 0) {
  alert( 1 );
} else if (a < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

/////////////////////////

let login = prompt(`Кто там?`);
let pass;

if (login == null) {
    alert("Отмена");
} else if (login !== "Админ") {
    alert("Я вас не знаю");
} else (pass = prompt("Пароль?"));

if (!(pass !== undefined)) {
}   else if (pass == null) {
    alert("Отмена");
}   else if (pass !== "Я Главный") {
    alert("Неверный пароль");
}   else alert("Здравствуйте!")

/////////////////////////

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

   ////////////////////////

   let num;

   do {
     num = prompt("Введите число, большее 100?", 0);
   } while (num <= 100 && num);

   /////////////////////////


   let n = 10;

   nextPrime:
   for (let i = 2; i <= n; i++) { 
   
     for (let j = 2; j < i; j++) { 
       if (i % j == 0) continue nextPrime;
     }
   
     alert( i );
   }
   
   ///////////////////////////

   function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

  /////////////////////////////

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );

  //////////////////////////////

  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  ////////////////////////////////

  function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

  ///////////////////////////////////

  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
  ////////////////////////////////////

  function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );
  
  /////////////////////////////////////

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

  //////////////////////////////////////