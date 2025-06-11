function sayHello(name, age) {
  console.log("Hello! " + name + " and my age is " + age);
}

sayHello("Jane", 42);

function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result);

let result2 = add(7, 45);
console.log(result2);

const multiply = function (c, d) {
  return c * d;
};

let result3 = multiply(10, 2);
console.log(result3);

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

testScope();

function doubled(num) {
  return num * 2;
}

console.log(doubled(2));
console.log(doubled(6));
console.log(doubled(7));

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(5));

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(5, 1));

let greet = (name) => console.log("Hello, " + name + "!");

let sayGoodbye = (name) => console.log("Goodbye, " + name + "!");

let printAge = (name, age) =>  console.log(name + " is " + age + " years old.");

let welcomeUser = (username) => console.log("Welcome back, " + username + "!");

let shout = (word) => console.log(word.toUpperCase() + "!!!");
