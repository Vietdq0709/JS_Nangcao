//Bài 1  If Statements


// If Statement Syntax
// if (true) {
//     console.log('This is true');
//   }
  
//   if (false) {
//     console.log('This is NOT true');
//   }
  
//   // Evaluation expressions
//   const x = 10;
//   const y = 5;
  
//   if (x >= y) {
//     console.log(`${x} is greater than or equal to ${y}`);
//   }
  
//   if (x === y) {
//     console.log(`${x} is equal to ${y}`);
//   } else {
//     console.log(`${x} is NOT equal to ${y}`);
//   }
  
//   // Block scope
//   if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`);
//   }
  
//   console.log(z); // Throw error
  
//   // Shorthand If/Else
//   if (x >= y)
//     console.log(`${x} is greater than or equal to ${y}`),
//       console.log('This is true');
//   else console.log('This is false');


//Bài 2 Else-If & Nesting
// const d = new Date(10, 30, 2022, 6, 0, 0);
// const hour = d.getHours();

// if (hour < 12) {
//   console.log('Good Morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');
// }

// // Nested If
// if (hour < 12) {
//   console.log('Good Morning');

//   if (hour === 6) {
//     console.log('Wake Up!');
//   }
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');

//   if (hour >= 20) {
//     console.log('zzzzzzzz');
//   }
// }

// if (hour >= 7 && hour < 15) {
//   console.log('It is work time!');
// }

// if (hour === 6 || hour === 20) {
//   console.log('Brush your teeth!');
// }



//Bài 3 Switches
// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// // Immediate value evaluation
// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }

// // Range evaluation
// switch (true) {
//   case hour < 12:
//     console.log('Good Morning');
//     break;
//   case hour < 18:
//     console.log('Good Afternoon');
//     break;
//   default:
//     console.log('Good Night');
// }


//Bài 4  Calculator Challenge
// function calculator(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         result = 'Invalid Operator';
//     }
  
//     console.log(result);
//     return result;
//   }
  
//   calculator(5, 2, '&');


//Bài  5  Truthy & Falsy Values


// const x = function () {};

// if (x) {
//   console.log('This is truthy');
// } else {
//   console.log('This is falsy');
// }

// console.log(Boolean(x));

// // Truthy and falsy caveats
// const children = 3;

// // Checking for literal 0
// if (children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

// // Solution
// if (!isNaN(children)) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

// // Checking for empty arrays
// const posts = ['Post One'];

// // Always true even when empty
// if (posts) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }

// // Solution
// if (posts.length > 0) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }

//Bài 6 Logical Operators
// console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
// console.log(10 > 20 || 30 < 15); // Only one has to be true

// // && - Will return first falsy value or the last value
// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && 0 && 30;
// a = 10 && '' && 0 && 30;

// console.log(a);

// const posts = ['Post One', 'Post Two'];
// posts.length > 0 && console.log(posts[0]);

// // || - Will return the first truthy value or the last value

// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;

// console.log(b);

// // ?? - Returns the right side operand when the left is null or undefined

// let c;

// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// c = 0 ?? 30;
// c = '' ?? 30;

// console.log(c);


// // Checking for empty objects
// const user = {
//   name: 'Brad',
// };

// // Always true, even when no properties
// if (user) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }

// // Solution
// if (Object.keys(user).length > 0) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }

// // Loose Equality (==)
// console.log(false == 0); // true
// console.log('' == 0); // true
// console.log(null == undefined); // true

// // Strict Equality
// console.log(false === 0); // false
// console.log('' === 0); // false
// console.log(null === undefined); // false


//Bài 7 Logical Assignment
// ||= assigns the right side value only if the left is a falsy value.

// let a = null;

// // if (!a) {
// //   a = 10;
// // }

// // a = a || 10;

// a ||= 10;

// console.log(a);

// // &&= assigns the right side value only if the left is a truthy value.

// let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 20;

// b &&= 20;

// console.log(b);

// // ??= assigns the right side value only if the left is null or undefined.

// let c = null;

// if (c === null || c === undefined) {
//   c = 20;
// }

// c = c ?? 20;

// c ??= 20;

// console.log(c);


//Bài 8 Ternary Operator
const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');