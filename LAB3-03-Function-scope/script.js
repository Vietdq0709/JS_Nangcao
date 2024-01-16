//Bài 1 Function Basics
// Define a function
// function sayHello() {
//     console.log('Hello World');
//   }
  
//   // Invoke, execute or call a function
//   sayHello();
  
//   // Define a function with parameters
//   function add(num1, num2) {
//     console.log(num1 + num2);
//   }
  
//   // Invoke function with arguments
//   add(5, 10);
  
//   // Parameters vs. Arguments
//   // Parameters are the names of the variables that are used to pass data into a function.
//   // Arguments are the values that are passed into the function
  
//   // Returning a value
//   function subtract(num1, num2) {
//     return num1 - num2;
  
//     console.log('After the return');
//   }
  
//   // Assign the returned value to a variable
//   const result = subtract(10, 2);
  
//   console.log(result, subtract(20, 5));


//Bài 2 More on Params & Arguments


// Default Params
// function registerUser(user = 'Bot') {
//     // Old way - before using `=`
//     // if (!user) {
//     //   user = 'Bot';
//     // }
  
//     return user + ' is registered';
//   }
  
//   console.log(registerUser());
  
//   // Rest Params
//   function sum(...numbers) {
//     let total = 0;
  
//     for (const num of numbers) {
//       total += num;
//     }
  
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
//   // Objects as params
//   function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
//   }
  
//   const user = {
//     id: 1,
//     name: 'John',
//   };
  
//   console.log(loginUser(user));
//   console.log(
//     loginUser({
//       id: 2,
//       name: 'Sara',
//     })
//   );
  
//   // Arrays as params
//   function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
  
//     const item = arr[randomIndex];
  
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Bài 3 Global & Function Scope
// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
// const x = 100;

// console.log(x, 'in global');

// function run() {
//   // Access global vars in functions
//   console.log(window.innerHeight);
//   console.log(x, 'in function');
// }

// run();

// // Access global vars in blocks
// if (true) {
//   console.log(x, 'in block');
// }

// function add() {
//   // Overwriting global x (variable shadowing)
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }

// // Can not access a function scoped variable in global scope
// console.log(y);

// add();




//Bài 4 Block Scope
// const x = 100;

// // An If statement is a block
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// // console.log(y); // ReferenceError: y is not defined

// // A loop is a block
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // console.log(i); // ReferenceError: i is not defined

// // Using var
// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);

// // var IS function scoped
// function run() {
//   var d = 100;
//   console.log(d);
// }

// run();

// // console.log(d);


// const foo = 1;
// var bar = 2; // Put on the window object




//Bài 5 Nested Scope
// function first() {
//     const x = 100;
  
//     function second() {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     // console.log(y);
  
//     second();
//   }
  
//   first();
  
//   if (true) {
//     const x = 100;
  
//     if (x === 100) {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     console.log(y);
//   }



//Bài  6 Function Declaration vs Expression
// Function Declaration
// function addDollarSign(value) {
//     return '$' + value;
//   }
  

//   console.log(addDollarSign(100));
  
//   // Function Expression
//   const addPlusSign = function (value) {
//     return '+' + value;
//   };
  
//   console.log(addPlusSign(200));




//Bài 7 Arrow Functions
//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
// const add = (a, b) => {
//     return a + b;
//   };
  
//   // Implicit Return
//   const subtract = (a, b) => a - b;
  
//   // Can leave off () with a single param
//   const double = (a) => a * 2;
  
//   // Returning an object
//   const createObj = () => ({
//     name: 'Brad',
//   });
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   numbers.forEach(function (n) {
//     console.log(n);
//   });
  
//   // Arrow function in a callback
//   numbers.forEach((n) => console.log(n));
  
//   console.log(add(1, 2));
//   console.log(subtract(10, 5));
//   console.log(double(10));
//   console.log(createObj());



//Bài  8  
// IFFE Syntax (Has it's own scope and runs right away)
// (function () {
//     const user = 'John';
//     console.log(user);
//     const hello = () => console.log('Hello from the IIFE');
//     hello();
//   })();
  
//   // Params
//   (function (name) {
//     console.log('Hello ' + name);
//   })('Shawn');
  
//   // Named IIFE (Can only be called recursively)
//   (function hello() {
//     console.log('Hello');
//   })();


//Bài 9 Function Challenge
// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(35)} \xB0C `);

// // Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([2, 31, 4, 5, 6]));

// // Challenge 3
// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//   console.log(output);
// })(20, 10);



//Bài 10 Execution Contex
//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);


//Bài 11 Call Stack
// Open 'sources' tab and put a breakpoint at the first() function

// First Example

function first() {
    console.log('first...');
  }
  
  function second() {
    console.log('second...');
  }
  
  function third() {
    console.log('third...');
  }
  
  first();
  second();
  third();
  
  // Second Example
  
  // function first() {
  //   console.log('first...');
  //   second();
  // }
  
  // function second() {
  //   console.log('second...');
  //   third();
  // }
  
  // function third() {
  //   console.log('third...');
  // }
  
  // first();