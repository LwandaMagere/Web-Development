// DOM

// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain; // loop back address
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0]['method'];

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// console.log(val);
// ..................................................................................

// let scripts = document.scripts;

// let arrayScrips = Array.from(scripts);

// arrayScrips.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// console.log(scripts)
// console.log(Array.isArray(scripts));



//...........................................................................................................................

// DOM SELECTORS FOR SINGLE ELEMENTS

// 1. document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element ........................................
// console.log(document.getElementById('task-title').id);

// // Change styling...........................................................
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // Change content .......................................................
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'Dado';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // 2. document.querySelector() -- it's much powerful we can select them by anything instead of class or id

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// DOM SELECTORS FOR MULTIPLE ELEMENTS

// 1. getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[2].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// const lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// 2. document.querySelectorAll() node list

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// console.log(items);

// getElementById(), querySelector(), getElementsByClassName(), getElementsByClassName(), getElementsByTagName();
// querySelectorAll()

// ..........................................................................................................&&&&&&&&&&&&&&&&&&&&&&&

// TRAVERSING THE DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes -- this includes the text(spaces) -- returns node list
// val  = list.childNodes;
// val  = list.childNodes[1];
// val  = list.childNodes[0].nodeName;
// val  = list.childNodes[1].nodeType; // 1 2 3 8 9 10

// /**
//  * 1.Element node
//  * 2.Attribute (deprected)
//  * 3.Text node
//  * 8.Comment
//  * 9.Document itself
//  * 10.Doctype
//  */

// // Get the children element nodes -- this doesn't include text(space) -- returns the html collection
// // val = list.children;

// // val = list.children[3].children[0];

// // // first child
// // val = list.firstChild;
// // val = list.firstElementChild;

// // // last child
// // val = list.lastChild;
// // val = list.lastElementChild;

// // // Count child element
// // val = list.childElementCount;

// // // Get  parent nodes
// // val = listItem.parentNode;
// // val = listItem.parentElement;
// // val = listItem.parentElement.parentElement;

// // // Get next sibling
// // val = listItem.nextSibling;
// // val = listItem.nextElementSibling;
// // val = listItem.nextElementSibling.nextElementSibling;

// // // Get prev sibling
// // val = listItem.previousSibling;
// // val = listItem.nextElementSibling;
// // val = listItem.previousElementSibling;

// // console.log(val);

// // CREATING ELEMENTS

// // Creat elements
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';
// // Add id
// li.id = 'new-item';
// // Add Attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));
// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// // Create link
// const link = document.createElement('a');
// // Add class
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link to li
// li.appendChild(link);
// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// ..........................................................................................................

// REMOVING AND REPLACING ELEMENTS

// Create element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// cardAction  = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();
// // Remove child node
// list.removeChild(lis[3]);

// CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.setAttribute('title','Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

// EVENT LISTENERS

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World!');

//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(a) {
//     console.log('Clicked...');

//     let val;
//     val = a; // e is the event object

//     // Event target element
//     val = a.target;
//     val = a.target.id;
//     val = a.target.className;
//     val = a.target.classList;

//     // a.target.innerText = 'Hello';

//     //Event Type
//     val = a.type;
//     // TimeStamp
//     val = a.timeStamp;
//     // Coordinates of the events relative to the window
//     val = a.clientY;
//     val = a.clientX;
//      // Coordinates of the events relative to the element
//      val = a.offsetY;
//      val = a.offsetX;

//     console.log(val);


//     a.preventDefault();
// }
// ..........................................................................................................

// MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse leave
// card.addEventListener('mouseleave', runEvent);
// // Mouse over
// card.addEventListener('mouseover', runEvent);
// // Mouse out
// card.addEventListener('mouseout', runEvent); 

// Mouse move
// card.addEventListener('mousemove', runEvent);

// // Event handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// ..........................................................................................................

// KEYBOARD INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Key down
// taskInput.addEventListener('keydown', runEvent);
// // Key up
// taskInput.addEventListener('keyup', runEvent);
// // Key press
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change -- use select n disable materialize
// taskInput.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // console.log(e.target.value);

    // e.preventDefault();
}










