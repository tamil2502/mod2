console.log("Hello from external JS!");

var tax;
console.log(tax);
tax = 5;

let message = "Hello there";
console.log(message);

let friendName = "John";
console.log(message + " " + friendName);

let total = 0;
let item1 = 200;
let item2 = 300;
total = item1 + item2;
console.log(item1 + item2);
console.log(total);

console.log(1 + "2");

console.log(1 + 1 + "2");

console.log(((5 + 8) * 4) / 2);

console.log(0 > 1);
console.log(5 < 2);
console.log(5 >= 5);

let age;
console.log(age);

let smallestNumber = -Infinity;
console.log(-999999 < smallestNumber);
console.log(typeof smallestNumber);

let z = null;

let person = {
  name: "John Doe",
  age: 42,
  address: "Penang MY",
  "x522-z1my": "secret message",
  0: "this is just an egg",
};

console.log(person);

console.log(person.name);
console.log(person["name"]);

console.log(person["x522-z1my"]);
console.log(person["0"]);

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

console.log(fruits[fruits.length - 3]);

console.log("=============================");

let a = 5;
let b = a;

a = 25;
console.log(b);

let cars = ["tesla", "byd", "honda"];
console.log("Original Cars List", cars);

let carsCopy = cars;
console.log("Cars Copy: ", carsCopy);

carsCopy[0] = "Proton";

console.log("===================")

console.log("Current cars copy: ", carsCopy);
console.log("Current orig cars: ", cars);

const stuff = ["table", "ladder", "chair"];
console.log(stuff);

stuff[0] = "tumbler";
console.log(stuff);

let p = 10;

p += 2;

console.log(p);

let msg = "Hello";
msg += "World";

console. log(msg);

p -= 3;
console.log(p);

p *= 4;
console.log(p);

p /= 2;
console.log(p);

p %= 3;
console.log(p);

console.log("==============EQUALITY OPERATOR=============");

console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 == "20"); //false
console.log(1 == true); //true
console.log(0 == false); //true

console.log(
	"=================== STRICT EQUALITY OPERATOR====================="
);

console.log(5 === "5");

console.log(1 != 1);
console.log(5 != 20);

console.log(1 !== 2);
console.log(1 !== 1);

let chocolate = true;
let vanilla = false;

console.log(chocolate && vanilla);

console.log(chocolate || vanilla);

let isAbsent = false;
console.log(!isAbsent);
