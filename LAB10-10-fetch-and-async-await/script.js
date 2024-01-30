//Bài 1
// Fetching a JSON file
// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // Fetching a text file
// fetch('./test.txt')
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// // Fetching from an API
// fetch('https://api.github.com/users/bradtraversy')
//   .then((response) => response.json())
//   .then((data) => (document.querySelector('h1').textContent = data.login));
//Bài 2
// function fetchUser() {
//     showSpinner();
//     fetch('https://randomuser.me/api')
//       .then((res) => res.json())
//       .then((data) => {
//         hideSpinner();
//         displayUser(data.results[0]);
//       });
//   }
  
//   function displayUser(user) {
//     const userDisplay = document.querySelector('#user');
  
//     if (user.gender === 'female') {
//       document.body.style.backgroundColor = 'rebeccapurple';
//     } else {
//       document.body.style.backgroundColor = 'steelblue';
//     }
  
//     userDisplay.innerHTML = `
//     <div class="flex justify-between">
//     <div class="flex">
//       <img
//         class="w-48 h-48 rounded-full mr-8"
//         src="${user.picture.large}"
//       />
//       <div class="space-y-3">
//         <p class="text-xl">
//           <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Email: </span> ${user.email}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Phone: </span> ${user.phone}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
//         </p>
//         <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
//       </div>
//     </div>
//   </div>
//     `;
//   }
  
//   function showSpinner() {
//     document.querySelector('.spinner').style.display = 'block';
//   }
  
//   function hideSpinner() {
//     document.querySelector('.spinner').style.display = 'none';
//   }
  
//   document.querySelector('#generate').addEventListener('click', fetchUser);
  
//   fetchUser();
//Bài 3
/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

// function createPost({ title, body }) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         body,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         token: 'abc123',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }
  
//   createPost({ title: 'My Post', body: 'This is my Post' });
//Bài 4
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=10')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.classList.add('todo');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();

//   const newTodo = {
//     title: e.target.firstElementChild.value,
//     completed: false,
//   };

//   fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
// };

// const toggleCompleted = (e) => {
//   if (e.target.classList.contains('todo')) {
//     e.target.classList.toggle('done');

//     updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
//   }
// };

// const updateTodo = (id, completed) => {
//   fetch(`${apiUrl}/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ completed }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// const deleteTodo = (e) => {
//   if (e.target.classList.contains('todo')) {
//     const id = e.target.dataset.id;
//     fetch(`${apiUrl}/${id}`, {
//       method: 'DELETE',
//     })
//       .then((res) => res.json())
//       .then(() => e.target.remove());
//   }
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodos);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
//   document
//     .querySelector('#todo-list')
//     .addEventListener('click', toggleCompleted);
//   document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
// };

// init();
//Bài 5
// Success
// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   });

// // The issue here is that the 'success' shows and the .catch() does NOT run for an error status like 404 or 500
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Catch ONLY runs on a network error
// fetch('http://hello123.net')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Test with response.ok
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Check for specific code
// fetch('http://httpstat.us/200')
//   .then((response) => {
//     if (response.status === 404) {
//       throw new Error('Not Found');
//     } else if (response.status === 500) {
//       throw new Error('Server Error');
//     } else if (response.status !== 200) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//Bài 6
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: 'John', age: 20 });
//     }, 1000);
//   });
  
//   // promise.then((data) => console.log(data));
  
//   async function getPromise() {
//     const response = await promise;
//     console.log(response);
//   }
  
//   // getPromise();
  
//   async function getUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
  
//     console.log(data);
//   }
  
//   // getUsers();
  
//   const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
  
//     throw new Error('Hello');
  
//     console.log(data);
//   };
  
//   getPosts().catch((error) => console.log(error));
//Bài 7
// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

// function double(number) {
//     if (isNaN(number)) {
//       throw new Error(number + ' is not a number');
//     }
  
//     return number * 2;
//   }
  
//   try {
//     const y = double('hello');
//     console.log(y);
//   } catch (error) {
//     console.log(error);
//   }
//Bài 8
// const getUsers = async () => {
//     try {
//       // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const response = await fetch('http://httpstat.us/500');
  
//       if (!response.ok) {
//         throw new Error('Request Failed');
//       }
  
//       const data = await response.text();
  
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   const getPosts = async () => {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const response = await fetch('http://httpstat.us/500');
  
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
  
//     const data = await response.text();
  
//     console.log(data);
//   };
  
//   // getUsers();
//   getPosts().catch((error) => console.log(error));
//Bài 9
function getData(endpoint) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', endpoint);
  
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject('Error: Something went wrong');
          }
        }
      };
  
      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 3000) + 1000);
    });
  }
  
  // getData('./movies.json')
  //   .then((movies) => {
  //     console.log(movies);
  //     return getData('./actors.json');
  //   })
  //   .then((actors) => {
  //     console.log(actors);
  //     return getData('./directors.json');
  //   })
  //   .then((directors) => {
  //     console.log(directors);
  //   })
  //   .catch((error) => console.log(error));
  
  async function getAllData() {
    const movies = await getData('./movies.json');
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    console.log(movies, actors, directors);
  }
  
  async function getAllDataWithFetch() {
    const moviesRes = await fetch('./movies.json');
    const movies = await moviesRes.json();
  
    const actorsRes = await fetch('./actors.json');
    const actors = await actorsRes.json();
  
    const directorsRes = await fetch('./directors.json');
    const directors = await directorsRes.json();
  
    console.log(movies, actors, directors);
  }
  
  async function getAllDataPromiseAll() {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
      fetch('./movies.json'),
      fetch('./actors.json'),
      fetch('./directors.json'),
    ]);
  
    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();
  
    console.log(movies, actors, directors);
  }
  
  async function getAllDataPromiseAll2() {
    const [movies, actors, directors] = await Promise.all([
      fetch('./movies.json').then((res) => res.json()),
      fetch('./actors.json').then((res) => res.json()),
      fetch('./directors.json').then((res) => res.json()),
    ]);
  
    console.log(movies, actors, directors);
  }
  
  // getAllData();
  // getAllDataWithFetch();
  // getAllDataPromiseAll();
  getAllDataPromiseAll2();