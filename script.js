//can run this on the terminal with node app or on the browser console

//use curly braces to declare an pbject
//object has key-value pairs
let myObject = {
  propertyOne: "valueOne",
  propertyTwo: "valueTwo",
  propertyThree: "valueThree",
};

//example of an object
let city = {
  cityName: "Hull",
  country: "England",
  population: 260000,
  size: "100km2",
  area: "East Yorkshire",
  mainExport: "Fishing",
  hasPubs: true,
  language: "English",
  hasSchools: true,
  hasHospital: true,
  elevation: 10,
};

//hot to acces individual properties
//dot notation
console.log(city.cityName); //Hull
console.log(city.language); //English
console.log(city.hasPubs); //true

//bracket notation
console.log(city["cityName"]); //Hull

//dot notation and bracket notation are used to access individual properties. The syntax is different but the result is the same

//how to change the value of a property
city.cityName = "Manchester";

//how to add a new property --> dot notation and the new key-value pair
city.ranking = 32;

console.log(city);

//Create an object called person with a name, age, and favourite colour. Log the object to the console.
let person = {
  name: "John",
  age: 30,
  favColor: "Blue",
};

console.log(person);

console.log(person.name); // Output: John

console.log(person.age); // Output: 30

console.log(person.favColor); // Output: Blue

//You can add properties to an object by assigning a value to a new property.
person.favouriteFood = "pizza";

console.log(person.favouriteFood); // Output: pizza

// Create an object called car with a make, model, and colour. Create a string detailing the car's make, model, and colour for a website advert and log it to the console.
let car = {
  make: "Toyota",
  model: "Corolla",
  color: "Grey",
};

console.log(`This is a ${car.make} ${car.model} in ${car.color} color!`);

// Create an object called book with a title, author, and number of pages. Create a string explaining the book's details for a website advert and log it to the console.
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
};
let advert = `The ${book.title} by ${book.author} is a ${book.pages}-page book that will change your life!`;
console.log(advert);
