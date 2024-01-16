//Bài 1 Array Basics
// let x;

// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// // Get value by index
// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';

// // length is not read-only
// // fruits.length = 2;

// fruits[3] = 'strawberry';

// // Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;

// console.log(x);



//Bài 2 Array Methods
// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // pop() - Take the last value off
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// arr.unshift(99);

// // shift() - Remove first value
// arr.shift();

// // reverse() - Reverse an array
// arr.reverse();

// // includes() - Check to see if something is in the array
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// x = arr.toString();
// x = arr.join();

// x = arr.slice(1, 4);


// x = arr.splice(1, 4);


// x = arr.splice(4, 1);


// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);

//Bài 3 Array Nesting Concat & Spread
// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // Nesting arrays

// // Nesting berries inside of fruits
// fruits.push(berries);

// // Now we can access 'blueberry' with the following
// x = fruits[3][1];

// // Create a new variable and nest both arrays
// const allFruits = [fruits, berries];

// x = allFruits[1][2];

// // concat() - Concatenate arrays
// x = fruits.concat(berries);

// // spread operator (...) - Concatenate with
// x = [...fruits, ...berries];

// // flat() - Flatten an array
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();

// // Static methods of Array object

// // isArray() - Check is is an array
// x = Array.isArray(fruits);

// // from() - Create an array from an array like value
// x = Array.from('12345');

// // of() - Create an array from a set of values
// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);

// console.log(x);


//Bài 4 Array Challenge     
// Challenge 1

// const arr = [1, 2, 3, 4, 5];

// // arr.reverse();
// // arr.push(0);
// // arr.unshift(6);

// // Same result as above
// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// console.log(arr);

// // Challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2);

// // Solution 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);

//Bài 5 Object Literals
// let x;

// // Creating an object
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// // Accessing object properties
// x = person.name; // Dot notation
// x = person['age']; // Bracket notation
// x = person.address.state;
// x = person.hobbies[0];

// // Updating properties
// person.name = 'Jane Doe';
// person['isAdmin'] = false;

// // Deleting properties
// delete person.age;

// // Create new properties
// person.hasChildren = true;

// // Add functions
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// // Keys with multiple words
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);


//Bài 6 Object Spread Operator & Methods
// let x;

// // Create object using the object constructor
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// // Object Nesting
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Spread operator
// const obj3 = { ...obj1, ...obj2 };
// // Same as using ...
// const obj4 = Object.assign({}, obj1, obj2);

// // Array of objects
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// x = todos[0].name;

// // Get array of object keys
// x = Object.keys(todo);

// // Get length of an object
// x = Object.keys(todo).length;

// // Get array of object values
// x = Object.values(todo);

// // Get array of object key/value pairs
// x = Object.entries(todo);

// // Check if object has a property
// x = todo.hasOwnProperty('age');

// console.log(x);



//Bài 7 Destructuring & Naming
// Setting object properties with the same name as a variable
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

// // Destructuring object properties

// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   id: todoId, // rename id to todoId
//   title,
//   user: { name }, // destructuring multiple levels
// } = todo;

// console.log(todoId);

// // Destructuring arrays & using the rest/spread operator
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);


//Bài 8 JSON Intro
// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
//   };
  
//   // Convert to JSON string
//   const str = JSON.stringify(post);
  
//   console.log(str.id);
  
//   // Parse JSON
//   const obj = JSON.parse(str);
  
//   console.log(obj.id);
  
//   // JSON & arrays
//   const posts = [
//     {
//       id: 1,
//       title: 'Post One',
//       body: 'This is the body',
//     },
//     {
//       id: 2,
//       title: 'Post Two',
//       body: 'This is the body',
//     },
//   ];
  
//   const str2 = JSON.stringify(posts);
  
//   console.log(str2);


//Bài 9 Object Challenge
// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Step 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);