//bài 1 Loop


// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
//const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'John') {
//     console.log(names[i] + ' is the best');
//   } else {
//     console.log(names[i]);
//   }
// }


//Bài 2 Break & Continue
// Break
// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//       console.log('Breaking...');
//       break;
//     }
//     console.log(i);
//   }
  
//   // Continue
//   for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//       console.log('Skipping 13...');
//       continue;
//     }
//     console.log(i);
//   }


//Bài 3 while
// let i = 0;

// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// // Loop over arrays
// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// // Nesting while loops
// while (i <= 5) {
//   console.log('Number ' + i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }

//   i++;
// }

// // Do While Loop - Always runs once
// do {
//   console.log('Number ' + i);
//   i++;
// } while (i <= 20);



//Bài 4
// For Loop
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// While Loop
// let j = 1;

// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }

//   j++;
// }
//Bài 5 For of  loop
// Loop through arrays
// const items = ['book', 'table', 'chair', 'kite'];
// const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// // for (const item of items) {
// //   console.log(item);
// // }

// for (const user of users) {
//   console.log(user.name);
// }

// // Loop over strings
// const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

// // Loop over Maps
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// for (const [key, value] of map) {
//   console.log(key, value);
// }



//Bài 6 For in loop
// Loop through objects
// const colorObj = {
//     color1: 'red',
//     color2: 'blue',
//     color3: 'orange',
//     color4: 'green',
//   };
  
//   for (const key in colorObj) {
//     console.log(key, colorObj[key]);
//   }
  
//   // Loop through arrays
//   const colorArr = ['red', 'green', 'blue', 'yellow'];
  
//   for (const key in colorArr) {
//     console.log(colorArr[key]);
//   }
//Bài 7 forEach
// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// // View prototype chain
// console.log(socials.__proto__);

// // Long form
// socials.forEach(function (item) {
//   console.log(item);
// });

// // Short form
// socials.forEach((item) => console.log(item));

// // We can also pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Using a named function
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// // Array of objects
// const socialObjs = [
//   { name: 'Twitter', url: 'https://twitter.com' },
//   { name: 'Facebook', url: 'https://facebook.com' },
//   { name: 'Linkedin', url: 'https://linkedin.com' },
//   { name: 'Instagram', url: 'https://instagram.com' },
// ];

// socialObjs.forEach((item) => console.log(item.url));
//Bài 8 Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// // Short version
// const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// // Same with forEach
// const evenNumbers3 = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Get only retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// // console.log(retailCompanies);

// // Get companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// // console.log(earlyCompanies);

// // Get companies that lasted 10 years or more
// const longCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(longCompanies);
//Bài 9 map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// // Same with forEach
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Create an array of company names
// const companyNames = companies.map((company) => company.name);
// // console.log(companyNames);

// // Create an array with just company and category
// const companyInfo = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// });

// // Create an array of objects with the name and the length of each company in years
// const companyYears = companies.map((company) => {
//   return {
//     name: company.name,
//     length: company.end - company.start + ' years',
//   };
// });

// console.log(companyYears);

// // Chain map methods
// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqrt) {
//     return sqrt * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });

// // Chaining different methods
// const evenDouble = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

// console.log(evenDouble);
//Bài 10 reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Add all numbers together
// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// // Using a for loop
// const sum3 = () => {
//   let acc = 0;
//   for (const cur of numbers) {
//     acc += cur;
//   }
//   return acc;
// };

// // Shopping cart example (objects)
// const cart = [
//   { id: 1, name: 'Product 1', price: 130 },
//   { id: 2, name: 'Product 2', price: 150 },
//   { id: 3, name: 'Product 3', price: 200 },
// ];

// const total = cart.reduce(function (acc, product) {
//   return acc + product.price;
// }, 0);

// console.log(total);
//Bài 11 Array Method Challenges
// Challenge 1
// const people = [
//     {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@gmail.com',
//       phone: '111-111-1111',
//       age: 30,
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Poe',
//       email: 'jane@gmail.com',
//       phone: '222-222-2222',
//       age: 25,
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Foe',
//       email: 'bob@gmail.com',
//       phone: '333-333-3333',
//       age: 45,
//     },
//     {
//       firstName: 'Sara',
//       lastName: 'Soe',
//       email: 'Sara@gmail.com',
//       phone: '444-444-4444',
//       age: 19,
//     },
//     {
//       firstName: 'Jose',
//       lastName: 'Koe',
//       email: 'jose@gmail.com',
//       phone: '555-555-5555',
//       age: 23,
//     },
//   ];
  
//   const youngPeople = people
//     .filter((person) => person.age <= 25)
//     .map((person) => ({
//       name: person.firstName + ' ' + person.lastName,
//       email: person.email,
//     }));
  
//   console.log(youngPeople);
  
//   // Challenge 2
//   const numbers = [2, -30, 50, 20, -12, -9, 7];
  
//   const positiveSum = numbers
//     .filter((number) => number > 0)
//     .reduce((acc, cur) => acc + cur, 0);
  
//   console.log(positiveSum);
  
//   // Challenge 3
//   const words = ['coder', 'programmer', 'developer'];
  
//   const cWords = words.map((word) => {
//     return word[0].toUpperCase() + word.slice(1, word.length);
//   });
  
//   console.log(cWords);