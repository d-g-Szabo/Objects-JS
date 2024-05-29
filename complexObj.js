//complex object

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
};

//acces the properties inside the object
//acces flavour
console.log(biscuit.flavour); //chocolate

//acces dairy in allegyInfo
console.log(biscuit.allergyInfo[0]);

//acces the value salmon in the brandColors in brand in buscuit
console.log(biscuit.brand.brandColors[1]);

//Create an object called blogPost with a title, author, and tags. Log the object to the console.
let blogPost = {
  title: "How to make a cake",
  author: {
    name: "John",
    age: 30,
    favColor: "red",
  },
  tags: ["baking", "cake", "recipe"],
  content: "This is a recipe for a delicious cake",
};

console.log(blogPost);

// Objects inside objects, like the author object here, are accessible by chaining the dot notation together.

console.log(blogPost.author.name); // Output: John

// Arrays inside objects are accessible by using the index of the item in the array.

console.log(blogPost.tags[0]); // Output: baking

// You can print out the number of tags by checking the length of the tags array:

console.log(blogPost.tags.length); // Output: 3

// You can combine this with a traditional for loop:

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 3 tags for post "How to make a cake":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: baking, cake, recipe
}

// Or use a for of loop if you don't need the index:

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: baking, cake, recipe
}

console.log(document);
console.log(document.title);
document.title = "Hello World";
console.log(document.title);
