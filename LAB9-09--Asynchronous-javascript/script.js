//Bài 1
// setTimeout - takes in a callback and a time to wait until that callback is executed

// setTimeout(function () {
//     console.log('Hello from callback');
//   }, 2000);
  
//   // Named function
//   setTimeout(changeText, 3000);
  
//   function changeText() {
//     document.querySelector('h1').textContent = 'Hello from callback';
//   }
  
//   // clearTimeout() will clear a timer
//   const timerId = setTimeout(changeText, 3000);
  
//   document.querySelector('#cancel').addEventListener('click', () => {
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('Timer Cancelled');
//   });


//Bài 2
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeRandomColor, 1000);
//   }
// }

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// function changeRandomColor() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = `#${randomColor}`;
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);
//Bài 3
// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
//   ];
  
//   function createPost(post, cb) {
//     setTimeout(() => {
//       posts.push(post);
//       cb();
//     }, 2000);
//   }
  
//   function getPosts() {
//     setTimeout(() => {
//       posts.forEach(function (post) {
//         const div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//         document.querySelector('#posts').appendChild(div);
//       });
//     }, 1000);
//   }
  
//   createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
//Bài 4
// const xhr = new XMLHttpRequest();

// // Sepcify method and endpoint/URL
// // xhr.open('GET', './movies.json');
// xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// // readyState has 5 possible values
// // - 0: request not initialized
// // - 1: server connection established
// // - 2: request received
// // - 3: processing request
// // - 4: request finished and response is ready
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

//     data.forEach((repo) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// // Send request
// xhr.send();
//Bài 5
// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);
//Bài 6
// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);
//Bài 7
// Create a promise
// const promise = new Promise((resolve, reject) => {
//     // Do some async task
//     setTimeout(() => {
//       console.log('Async task complete');
//       resolve();
//     }, 1000);
//   });
  
//   // promise.then(() => {
//   //   console.log('Promise consumed..');
//   // });
  
//   const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
  
//       if (!error) {
//         resolve({ name: 'John', age: 30 });
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 1000);
//   });
  
//   getUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('The promise has been resolved or rejected'));
  
//   console.log('Hello from global scope');
//Bài 8
// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
//   ];
  
//   function createPost(post) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let error = false;
  
//         if (!error) {
//           posts.push(post);
//           resolve();
//         } else {
//           reject('Something went wrong');
//         }
//       }, 2000);
//     });
//   }
  
//   function getPosts() {
//     setTimeout(() => {
//       posts.forEach(function (post) {
//         const div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//         document.querySelector('#posts').appendChild(div);
//       });
//     }, 1000);
//   }
  
//   function showError(error) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<strong>${error}</strong>`;
//     document.getElementById('posts').appendChild(h3);
//   }
  
//   createPost({ title: 'Post Three', body: 'This is post' })
//     .then(getPosts)
//     .catch(showError);
//Bài 9
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
  
//       if (!error) {
//         resolve({ name: 'John', age: 30 });
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 1000);
//   });
  
//   promise
//     .then((user) => {
//       console.log(user);
//       return user.name;
//     })
//     .then((name) => {
//       console.log(name);
//       return name.length;
//     })
//     .then((nameLength) => {
//       console.log(nameLength);
//     })
//     .catch((error) => {
//       console.log(error);
//       return 123;
//     })
    // .then((x) => console.log('This will run no matter what', x));
//Bài 10
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
  
//       xhr.open('GET', endpoint);
  
//       xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           if (this.status === 200) {
//             resolve(JSON.parse(this.responseText));
//           } else {
//             reject('Something went wrong');
//           }
//         }
//       };
  
//       setTimeout(() => {
//         xhr.send();
//       }, Math.floor(Math.random() * 3000) + 1000);
//     });
//   }
  
//   // Whatever we return from a .then() is passed into the next .then() callback function args
//   getData('./movies.json')
//     .then((movies) => {
//       console.log(movies);
//       return getData('./actors.json');
//     })
//     .then((actors) => {
//       console.log(actors);
//       return getData('./directors.json');
//     })
//     .then((directors) => {
//       console.log(directors);
//     })
//     .catch((error) => console.log(error));
// //Bài 11
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
  
//       xhr.open('GET', endpoint);
  
//       xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           if (this.status === 200) {
//             resolve(JSON.parse(this.responseText));
//           } else {
//             reject('Something went wrong');
//           }
//         }
//       };
  
//       setTimeout(() => {
//         xhr.send();
//       }, Math.floor(Math.random() * 3000) + 1000);
//     });
//   }
  
//   const moviesPromise = getData('./movies.json');
//   const actorsPromise = getData('./actors.json');
//   const directorsPromise = getData('./directors.json');
  
//   const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello World');
//   });
  
//   // Takes in promises
//   Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
//     .then((data) => {
//       // Returns an array of promise results
//       console.log(data);
//     })
//     .catch((error) => console.log(error));