let fruits = ["Apple", "mango", "banana"];

console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[0]. length);

console.log(fruits);
fruits.push("papaya");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);

//for (let i=0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//}

fruits.forEach(function (element, i) {
    console.log(element, i);
});

for (let p of fruits) {
    console.log(p);
}

let newFruits = fruits.filter((fruit) => fruit.length >= 5);

console.log(newFruits);

let post = {
   title: "Hello",
   tags: ["intro", "welcome"],
   author: {
     name: "Howie",
     age: 30
   }
 };

 console.log(post.author.name);
 console.log(post.tags[1]);



let movies = ["The Godfather", "The Dark Knight", "Pulp Fiction"];

console.log(movies[0]);
console.log(movies[movies.length - 1]);

movies.push("Fight Club");

movies.pop("Pulp Fiction");



let profile = {
   name: "Tamil Amuthan",
   age: 23,
   hobbies: ["Reading", "Drawing", "Badminton"]
   };

console.log(profile.hobbies[1]);