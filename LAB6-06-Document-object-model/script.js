//Bài 1 Dom introl
// Global window object
// console.log(window);

// // The document object is part of the window object
// console.dir(window.document);

// // We can access DOM elements directly with properties
// console.log(document.body);
// console.log(document.links[0]);

// // We can set properties of elements
// // document.body.innerHTML = '<h1>Hello from body</h1>';

// // The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.write('Hello from JS');

// // We also have methods to select elements more directly
// document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

// document.querySelector('#main h1').innerText = 'Hello';
//Bài 2
// let output;

// // document.all is deprecated
// output = document.all;
// output = document.all[11];
// output = document.all.length;

// // Everything in the html tags
// output = document.documentElement;

// // Head and body tags
// output = document.head;
// output = document.body;

// // HTMLCollection of everything in head/body
// output = document.head.children;
// output = document.body.children;

// // Random properties
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// // Get all forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // Change a form id
// document.forms[0].id = 'new-id';

// // Get all links
// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id = 'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;

// // Get all images
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// // Turn an HTMLCollection into an array
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);
//Bài 3
// document.getElementById()

// console.log(document.getElementById('app-title'));

// // Get attributes
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// // Set attributes
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');

// // Get/change content
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // document.querySelector()

// // Use any CSS selector
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';
//Bài 4
// querySelectorAll()
// Returns a NodeList

// const listItems = document.querySelectorAll('.item');

// // Access elements by index
// console.log(listItems[1].innerText);

// // Setting a color for specific element
// listItems[1].style.color = 'red';

// // We can use forEach() on a NodeList
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

// // getElementsByClassName()
// // Returns an HTMLCollection

// const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// // getElementsByTagName()

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);
//Bài 5
// let output;

// // Get child elements from a parent

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// // Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// // Get sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);
//Bài 6
// let output;

// // Get child nodes

// const parent = document.querySelector('.parent');

// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].outerHTML;

// output = parent.childNodes[3].innerText = 'Child One';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';

// // Get parent node

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement;

// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';

// // Get sibling nodes
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling;
// output = secondItem.previousSibling;

// console.log(output);
//Bài 7
// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // div.innerText = 'Hello World';

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// // document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);
//Bài 8
// Quick & Dirty
// function createListItem(item) {
//     const li = document.createElement('li');
  
//     li.innerHTML = `${item}
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
  
//     document.querySelector('.items').appendChild(li);
//   }
  
//   // Clean & Performant
//   function createNewItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));
  
//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';
  
//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
  
//     button.appendChild(icon);
//     li.appendChild(button);
  
//     document.querySelector('.items').appendChild(li);
//   }
  
//   createListItem('Eggs');
//   createNewItem('Cheese');
//Bài 9
// function createNewItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));
  
//     const button = createButton('remove-item btn-link text-red');
  
//     li.appendChild(button);
  
//     document.querySelector('.items').appendChild(li);
//   }
  
//   function createButton(classes) {
//     const button = document.createElement('button');
//     button.className = classes;
  
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
  
//     return button;
//   }
  
//   function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
//   }
  
//   createNewItem('Cheese');
//   createNewItem('Sauce');
//Bài 10
// insertAdjacentElement Example
// function insertElement() {
//     const filter = document.querySelector('.filter');
  
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';
  
//     filter.insertAdjacentElement('beforebegin', h1);
//   }
  
//   // insertAdjacentText Example
//   function insertText() {
//     const item = document.querySelector('li:first-child');
  
//     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
//   }
  
//   // insertAdjacentHTML example
//   function insertHTML() {
//     const clearBtn = document.querySelector('#clear');
  
//     clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
//   }
  
//   // insertBefore Example
//   function insertBeforeItem() {
//     const ul = document.querySelector('ul');
  
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';
  
//     const thirdItem = document.querySelector('li:nth-child(3)');
  
//     ul.insertBefore(li, thirdItem);
//   }
  
//   insertElement();
  
  /*
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
  */
//Bài 11
// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
//   }
  
//   // New element to insert
//   const li = document.createElement('li');
//   li.textContent = 'Insert Me After!';
  
//   // Existing element to insert after
//   const firstItem = document.querySelector('li:first-child');
  
//   // Our custom function
//   insertAfter(li, firstItem);
//Bài 12
// replaceWith() Method
// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child');
  
//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';
  
//     firstItem.replaceWith(li);
//   }
  
//   // OuterHTML Property
//   function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');
  
//     secondItem.outerHTML = '<li>Replaced Second</li>';
//   }
  
//   // Replace All Items
//   function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
  
//     // lis.forEach((item, index) => {
//     //   // item.outerHTML = '<li>Replace All</li>';
//     //   if (index === 1) {
//     //     item.innerHTML = 'Second Item';
//     //   } else {
//     //     item.innerHTML = 'Replace All';
//     //   }
//     // });
  
//     lis.forEach(
//       (item, index) =>
//         (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
//     );
//   }
  
//   // replaceChild() Method
//   function replaceChildHeading() {
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');
  
//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shopping List';
//     header.replaceChild(h2, h1);
//   }
  
//   replaceFirstItem();
//   replaceSecondItem();
//   replaceAllItems();
//   replaceChildHeading();
//Bài 13
// remove() Method
// function removeClearButton() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.remove();
//   }
  
//   // removeChild() Method
//   function removeFirstItem() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');
  
//     ul.removeChild(li);
//   }
  
//   // Other examples
  
//   function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNumber})`);
  
//     ul.removeChild(li);
//   }
  
//   function removeItem2(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('li')[itemNumber - 1];
  
//     ul.removeChild(li);
//   }
  
//   function removeItem3(itemNumber) {
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
//   }
  
//   const removeItem4 = (itemNumber) =>
//     document.querySelectorAll('li')[itemNumber - 1].remove();
  
//   removeClearButton();
//   // removeFirstItem();
//   // removeItem(2);
//   removeItem4(2);
//Bài 14
// const text = document.querySelector('p');
// const itemList = document.querySelector('.item-list');
// const items = itemList.querySelectorAll('li');

// function run() {
//   // className - Gets a string of all classes
//   console.log(itemList.className);
//   // Changing the classes with className
//   text.className = 'card dark';

//   // classList - Array of classes, which also has methods to add, remove, toggle and replace
//   console.log(itemList.classList);

//   // We can loop through the classes
//   itemList.classList.forEach((c) => console.log(c));

//   // Add, remove, toggle, replace
//   text.classList.add('dark');
//   text.classList.remove('card');
//   text.classList.toggle('hidden');
//   text.classList.replace('card', 'dark');

//   // style property - Add styles to elements
//   itemList.style.lineHeight = '3';

//   items.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 2) {
//       item.style.color = 'blue';
//     }
//   });
// }

// document.querySelector('button').onclick = run;