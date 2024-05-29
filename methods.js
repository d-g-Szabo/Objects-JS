let biscuit = {
  flavour: "chocolate",
  crunchiness: 7,
  hasChocolateChips: true,
  dunkingRate: "5 seconds",
  size: "20cm",
  color: "brown",
  allergyInfo: ["dairy", "nuts", "gluten"], //we can use array to store multiple values
  caloriesPerServing: 200,
  brand: {
    //we can use an object as value
    brandName: "Manny's",
    brandColors: ["purple", "salmon"],
    inSuperMarket: false,
  },
  //I added a property, and the value is a function, this is a method
  saySlogan: function () {
    console.log("The best biscuit in the world!");
  },
  sayHiToCustomer: function (customer) {
    console.log(`Hi ${customer}, welcome to our biscuit shop!`);
  },
  getColor: function () {
    return this.color;
  },
  //method with fat arrow function
  getCrunchiness: () => {
    return biscuit.crunchiness;
  },
};

//acces the method inside the object
biscuit.saySlogan();
// console.log(biscuit.saySlogan());

biscuit.sayHiToCustomer("John");

console.log(biscuit.getColor());

console.log(biscuit.getCrunchiness());

//workshop
let gpu = {
  brand: "Nvidia",
  model: "RTX 3080",
  memory: 10,
  price: 699,
  usedPrice: 370,
  //method with fat arrow function
  getPricePerGB: () => {
    return gpu.price / gpu.memory;
  },
  //method with arguement
  getCustomPricePerGB: function (price) {
    return price / gpu.memory;
  },
};

console.log(`GPU price per GB: ${gpu.getPricePerGB()} GBP`);

console.log(`GPU custom price per GB: ${gpu.getCustomPricePerGB(400)} GBP`);

// Create an object called car with a make, model, and colour. Add a method called advert that returns a string detailing the car's make, model, and colour. Log the result of calling the method to the console.

let car = {
  make: "Toyota",
  model: "Corolla",
  color: "Grey",
  advert: () => {
    return `This is a ${car.make} ${car.model} in ${car.color} color! Get it now!`;
  },
};
console.log(car.advert());

// Create an object called book with a title, author, and number of pages. Add a method called advert that returns a string explaining the book's details for a website advert. Log the result of calling the method to the console.

let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  advert: () => {
    return `This is the book "${book.title}" by ${book.author}. It has ${book.pages} pages. Get it now!`;
  },
};
console.log(book.advert());
