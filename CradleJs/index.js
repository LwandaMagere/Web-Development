console.log("Mwanzo!");

// *******************************************
let person = {
    name: 'Steve',
    age: 30
};

// Dot Notation
person.name = 'Dado';

//Bracket Notation
let selection = 'name';   // check out the keyword is given a variable
person[selection] = 'Mary';

console.log(person.name);
//****************************************** 

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; // check out new element added
console.log(selectedColors);
//************************************************* */

// Performing a task
function greet(name, lastName){
    console.log('Hello '+ name + ' ' + lastName)
}

// Calculating a value
function square(number){
    return number * number;
}

 greet('Steven', 'Dado');
console.log(square(2));
//*********************************************** */

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
//********************************************* */
// Logical OR (||)
// Return True if one of the operand is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

//NOT(!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
//********************************************************** */

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
//************************************** */

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening');
//********************************** */

let role = 'moderator';

switch (role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');

}
//************************************************************* */

// for-in
const mtu = {
    name: 'Steven',
    age: 30
};

for (let key in mtu)
    console.log(key, mtu[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index);

// for of
for (color of colors)
    console.log(color);
//************************************** */
// hoisting
let number = max(3,3);
console.log(number);

function max(a, b){
    if (a > b) return a;
    return b;
    // return (a > b) ? a : b;
}
//******************************************* */

// FizzBuzz
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
        return 'Not a Number';
    if ((input % 3 == 0) && (input % 5 == 0))
            return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';

        return input;
}
//*********************************************************** */
const array = [0, null, undefined, 1, '', 3, 2];

console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;
}
//************************************************************************************ */
const marks = [60, 80, 70, 80, 70, 100];
// 0-59   F
// 60-69  D
// 70-79 C
// 80-89  B
// 90-100 A
console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
//************************************** */
for (let i = 0; i < 5; i++){
    console.log('Hello World', i)
}

showStars(10);

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i =0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

//******************************************************************* */
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    inVisble: true,
    draw: function(){
        console.log('draw');
    }
};
// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
//const another = new Circle(1);

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function(){
    console.log('draw');
}`);

Circle.call({}, 2);

console.log(Circle.radius);
//*************************************************************** */
 let x = { value: 10};
 let y = x;

 x.value = 20;

 console.log( x.value);
 //*********************************************************** */

 const world = {
     radius: 1,
     draw(){
         console.log('draw');
     }
 };

 for (let key in world)
    console.log(key, world[key]);

for (let key of Object.keys(world))
    console.log(key);
//************************************************************ */

// CLONING
const Dunia = {
    radius: 4,
    draw(){
        console.log('Chora Saba!')
    }
};

// const ingine = {};

// for (let key in Dunia)
//     ingine[key] = Dunia[key];

const ingine = Object.assign({}, Dunia);

console.log(ingine);
//************************************************************************** */

// Adding elements
const numbers = [3, 4];

// End
numbers.push(5, 6);

console.log(numbers);

//Beginning
numbers.unshift(1, 2);

console.log(numbers);

// Adding in the Middle
 numbers.splice(2, 0, 'a', 'b');

 console.log(numbers);

//Finding Elements
 const numb = [1,2,3,4];

 console.log(numb.indexOf('a'));
 console.log(numb.lastIndexOf(4));
 console.log(numbers.indexOf(1) !== -1);
 console.log(numb.includes(1));

 const courses = [
     {id: 1, name: 'a'},
     {id: 2, name: 'b'}
 ];

 console.log(courses.includes({id: 1, name: 'a'}))

// Finding Elements (Reference Types)

//  const course = courses.find(function(course){
//     return course.name === 'a';
//  })

 // Arrow Function
 const course = courses.find(course => course.name === 'a');
// .findIndex
 console.log(course);
 
 //****************************************************************** */

 // Removing Element .pop(), .shift(), .splice()

 // Emptying an array numbers.length = 0; numbers.splice(0, numbers.length)

 // Combining and Slicing Arrays
 const first = [1, 2, 3];
 const second = [4, 5, 6];

 const combined = first.concat(second);

 const slice = combined.slice(2, 4);

 console.log(slice);
 console.log(combined);

 // The spread operator
 const combine = [...first, 'a', ...second, 'b'];
 console.log(combine);

 // Iterating an Array
 const faaf = [1, 2, 3];

 for (let dud of faaf)
    console.log(dud);

faaf.forEach(function(dud){
    console.log(dud);
})

// Joining Arrays
const sasa = [1, 2, 3];
const joined = sasa.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// Sorting Arrays .sort(), . reverse()

// Testing the elements of an array
const numberi = [1, 2, 3];

const allPositive = numbers.every(function(value){
    return value >= 0;
})
// . some() .filter() .mao()
console.log(allPositive);

// Reducing and Array
const punguza = [1, -1, 2, 3];

let sum = 0;
for (let n of punguza)
    sum += n;

console.log(sum);

const add = punguza.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(add);
//********************************************** */

// Function Declaration
function walk(){
    console.log('walk');
}

// Function Expression
let run = function(){
    console.log('run');
}
let move = run;
run();
move();

// Try and catch

const Ubuntu = {
    firstName: 'Steven',
    lastName: 'Dado',
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error("Value is not a string.");
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    Ubuntu.fullName = null;
}
catch (e){
    console.log(Ubuntu);
}







  







