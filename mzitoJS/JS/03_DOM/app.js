//####################################################// THE DOM ANATOMY //################################################

//The browser gives us a window object and inside that we have a document object ... 
//then root element. Document is a property of window object
//-- What is DOM (Document Object Model) -- It is a structured repesentation of an html document

// -- Tree of nodes/elements created by the browser
// -- JavaScript can be used to read/write/manipulate the DOM
// -- Object Oriented Representation -- has set properties and methods


////////////////////////////////////////////////////// 1. DOCUMENT PROPERTIES (Exermining the Document Object)

// let val;

// val = document; // --- This gives an Html collection
// val = document.all;
// val = document.all[];
// val = document.all.length;
// val = document.head;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;  // -- This is a html page

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts.length;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let arrayScripts = Array.from(scripts);

// arrayScripts.forEach(function(script){
     //      console.log(script.getAttribute('src'));
     // })

// console.log(val);

//************************************************************** */ 2. DOM SELECTORS // *************************

// DOM SELECTORS - This are Document Object Methods that allows us to pull things from the DOM. Selection and manipulation

// Single Element Selector getELementById & querySelector ********* -- Single selectors will grap the first element
// we can select classes, ids and elements with querySelector

// getElementById() - Only select by ID ..................................

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change styling
// document.getElementById('task-title').style.background = "#333";
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';



// // Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style= "color:red">Task List</span>';

// *** Changing Content, Styling, Getting things

// document.querySelector() ................................................ we can select by anything

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'gold';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = "#ccc";
// document.querySelector('li:nth-child(even)').style.background = '#f4f4'


// DOM Selector for Multiple Elements ********** They return html collection or node lists

// document.getELementsByClassName()........................................

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello Steve';
// console.log(document.getElementsByClassName('collection-item').item(1).style.color = 'red')

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// document.getELementsByTagName() An HTMLCollection is not an Array.............

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[1].textContent = 'Hello';


// // Convert HTML Collection into an Array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// })
// console.log(lis);


// document.querySelectorAll() they are the same as the two above except it returns node list 
// which counts things like text nodes that are spaces,
// it allows array methods and forEach without conversion,
// you can still use length with an html collection...........................

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index} : Dado`
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// for (let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4';
// }

// console.log(items);

////////////////////////////////////////////////////// 3. TRAVERSING  THE DOM ---Parents and children of specific nodes

// 1.childNodes -gives node list, textnodes (line breaks). nodeName, nodeType
// 2.children - giv element nodes and not text
// 3.firstChild - gives text node then elements
// 4.firstElementChild - gives element, if u don't want to deal with text nodes
// 5.lastchild
// 6.lastElementChild
// 7.childElementCount

// 8. parentNode/parentElement
// 9. nextSibling
// 10. nextElementSibling

// 11.previousSibling
// 12.previousElementSibling

     // const list = document.querySelector('ul.collection');
     // const listItem = document.querySelector('li.collection-item:first-child');

     // val = list;
     // val = listItem;

// Get child nodes -- text node are line breaks

     // val = list.childNodes
     // val = list.childNodes[0];
     // val = list.childNodes[0].nodeName;
     // val = list.childNodes[0].nodeType;// Element, text node, comment, doc itself, Doctype

// Get the children element nodes -- returns html collection

     // val = list.children;
     // val = list.children[0];
     // list.children[0].innerText = 'Mastery';
     // list.children[0].textContent = 'Steve';

// Get children of children

     // val = list.children[3].children;
     // val = list.children[3].children[0].id = 'test-link';
     // val = list.children[3].children[0];

     // val = list.firstChild;
     // val = list.firstElementChild;
     // val = list.lastChild;
     // val = list.lastElementChild;
     // val = list.childElementCount;

// Get Parent node

     // val = listItem.parentNode;
     // val = listItem.parentElement; // the same as the abode
     // val = listItem.parentElement.parentElement;

// Get next sibling

     // val = listItem.nextSibling // deals with other types of nodes not jst elements e.g text nodes
     // val = listItem.nextElementSibling.nextElementSibling;


// Get previous Sibling

     // val = listItem.previousSibling;
     // val = listItem.previousElementSibling

// // Get children element nodes -- returns html collection
// val = list.children;
// val = list.children[0];
// val = list.children[0].textContent = 'Hello';
// // Children of children
// val = list.children[3].children;
// val = list.children[3].children[0];
// val = list.children[3].children[0].id = 'test-link';

// console.log(val);

// // 1. Element           -- These numbers pertain to what type of nodes these are
// // 2. Attribute (deprecated)
// // 3. Text Node
// // 8. comment
// // 9. Document itself
// // 10. Doctype


/////////////////////////////////////////////////////////////////////// 4. CREATING ELEMENTS

     // // Create Element
     // const li = document.createElement('li');

     // // Add class Name
     // li.className = 'Collection-item';

     // // Add id
     // li.id = 'new-item';

     // // Add Attribute
     // li.setAttribute('title', 'New-Item');

     // // Create text node and append
     // li.appendChild(document.createTextNode('Hello World!'));

     // // Create new link element
     // const link = document.createElement('a');

     // // Add class name
     // link.className = 'delete-item secondary-content';

     // // Add icon html
     // link.innerHTML = '<i class="fa fa-remove"><i/>';

     // // Append link into li
     // li.appendChild(link);

     // // Append li as child to ul
     // document.querySelector('ul.collection').appendChild(li);

     // console.log(li);

//////////////////////////////////////////////////////////////////// 5. REPLACE N REMOVE ELEMENTS, HOW TO WORK WITH CLASSES

     // // Replace Element

     // const newHeading = document.createElement('h2');
     // newHeading.id = 'task-title';
     // newHeading.appendChild(document.createTextNode('Task List'));

     // const oldHeading = document.getElementById('task-title');
     // const cardAction = document.querySelector('.card-action');
     // // Replace
     // cardAction.replaceChild(newHeading, oldHeading);

     // // Remove Element
     // const lis = document.querySelectorAll('li');
     // const list = document.querySelector('ul');
     // // lis[0].remove();

     // // Remove child element -- they are zero based
     // // list.removeChild(lis[1]);

     // // Classes and Attributes
     // const firstLi = document.querySelector('li:first-child');
     // const link = firstLi.children[0];

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
     // val = link.setAttribute('title', 'Google');
     // val = link.hasAttribute('href');
     // link.removeAttribute('title');

     // val = link;

/////////////////////////////////////////////// 6. EVENT LISTENERS -- interacting with the ui

     // document.querySelector('.clear-tasks').addEventListener('click', function(e) {
     //      console.log('Hello World!');
     //      e.preventDefault(); // prevent default behaviour
          
     //      // e -- is the event object
          
     // })

     // document.querySelector('.clear-tasks').addEventListener('mouseover', onCLick);

     // function onCLick(e) {
     //      //console.log('clicked')
     //      let val;
     //      val = e;
      
     //      // Event target element
     //      val = e.target;
     //      val = e.target.id;
     //      val = e.target.className;
     //      val = e.target.classList;

     //      e.target.innerText = 'Hello';

     //      // Event type
     //      val = e.type;

     //      // Timestamp
     //      val = e.timeStamp;

     //      // Coord to events relative to the window
     //      val = e.clientY;
     //      val = e.clientX;

     //       // Coord to events relative to the element itself
     //       val = e.offsetY;
     //       val = e.clientX;
          

     //      console.log(val);

     //      e.preventDefault();
     // }

//////////////////////////////////////////////////////////////////////////// 7. MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse up
//clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// Mouse leave
// card.addEventListener('mouseleave', runEvent);
// Mouse over
// card.addEventListener('mouseover', runEvent); // mouseout n over will fire off when u go to another element that is inside of that element
// Mouse out 
// card.addEventListener('mouseout', runEvent);
// Mouse move
// card.addEventListener('mousemove', runEvent);


// Event handler
// function runEvent(e) {
//      console.log(`EVENT TYPE: ${e.type}`);
     
//      heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//      document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }


//////////////////////////////////////////////////////////////////////////// 8. KEYBOARD INPUT, FORM EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// key down
// taskInput.addEventListener('keydown', runEvent);

// key up
// taskInput.addEventListener('keyup', runEvent);

// Key press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur -- when you  put outside of an input
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
     console.log(`EVENT TYPE ${e.type}`);
     console.log(e.target.value);

     heading.innerText = e.target.value;

     // Get value
     // console.log(taskInput.value);
}



// NOTES NOTES NOTES EXTRA NOTES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ***** %%%%%%%

// 1. document.getElementById('task-title').id;
// 2. document.querySelector('#task-title');
// 3. document.getElementsByClassName('collection-item') -html colle
// 4. document.getElementsByTagName('li')
// 5. document.querySelectorAll(ul.collection) - returns nodes list

// 1. val = list.childNodes - even text nodes
// 2. val = list.children - html collections, elements only
// 3. val = list.children[3].children;
// 4. val = list.firstChild - even text nodes
// 5. val = list.firstElementChild - element
// 6. val = list.lastElementChild - return element
// 7. val = list.childELementCount

// 1. val = list.parentNode;
// 2. val = list.parentElement;
// 3. val = list.parentElement.parentElement;

// 1. val = list.nextSibling - text node
// 2. val = list.nextELementSibling.nextELementSibling
// 3. val = list.previousSibling
// 4. val = list.previousElementSibling

// 1. const li = document.createElement('li');
// 2. li.className = 'collection-item'
// 3. li.setAttribute('title', 'New item')
// 4. li.appendChild(document.createTextNode('Helo'))

// 1. cardActon.replaceChild(newHead, oldHead);
// 2. lis[0].remove()
// 3. list.removeChild(lis[3]);

// 1. val = link.className
// 2. val = link.classList[]
// 3. link.classList.add('test'); adding class name
// 4. link.clasList.remove('test');

// 1. val = link.getAttribute('href')
// 2. val = link.setAttribute('href', 'http//google.com')
// 3. val = link.hasAttribute('title')
// -- link.setAttribute('title' 'Google')
// 4. link.removeAttribute('title')

// 1. click
// 2. dblclick
// 3. mousedown
// 4. mouseup
// 5. mouseenter
// 6. mouseleave
// 7. mouseover 
// 8. mouseout
// 9. mousemove
// 10. submit
// 11. keydown
// 12. keyup
// 13. keypress
// 14. focus
// 15. blur -- click out 
// 16. cut
// 17. paste
// 18. input
// 19. change


// Event target element - represent the element that the event happened on
// 1. e.target;
// 2. e.target.id;
// 3. e.target.className;
// 4. e.target.classList;
// 5. e.target.innerText = 'Hello'
// 6. e.type;
// 7. e.timeStamp
// 8. e.clientY; relative to window
// 9. e.clientX;
// 8. e.offsetY; - relative to element
// 9. e.offsetX;

// 1. DOM Selectors
// 2. Traversing the DOM
// 3. Creating ELements
// 4. Removing and Replacing Elements
// 5. Event Listeners
// 6. Mouse Events
// 7. Key Board Input Events




    



















