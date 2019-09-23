// let baseSalary = 30000;
// let overTime = 10;
// let rate = 20;

// function getWage(baseSalary, overTime, rate){
//     return baseSalary + (overTime * rate);
// }

// let employee = {
//     baseSalary: 30000,
//     overTime: 10,
//     rate: 20,
//     getWage: function(){
//         return this.baseSalary + (this.overTime * this.rate);
//     }
// };
// employee.getWage();

// //************************************************** */
// function Circl(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circl = new Circl(10);

// for (let key in circl){
//     if (typeof circl[key] !== 'function')
//         console.log(key, circl[key]);
// }

// const keys = Object.keys(circl);
// console.log(keys);

// if ('radius' in circl)
//     console.log('Circle has a radius.');
// //******************************************* */

// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = {x: 0, y: 0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };

//     this.draw = function(){
//         console.log('draw');
//     }
//     Object.defineProperty(this, 'defaultLocation', {
//     get: function(){
//         return defaultLocation;
//     },
    
//     set: function(value){
//         if (!value.x || !value.y)
//             throw new Error('Invalid location.');
//         defaultLocation = value;
//     }

//     })

// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// // circle.getDefaultLocation();
// circle.draw();

//************************************************************** */
// function Stopwatch(){
//     let startTime, endTime, running, duration = 0;

//     this.start = function(){
//         if (running)
//         throw new Error('Stopwatch has already started.')
//         running = true;
//         startTime = new Date();
//     };

//     this.stop = function(){
//         if (!running)
//         throw new Error('Stopwatch is not started.')
//         running = false;
//         startTime = new Date();

//         const seconds = (endTime.getTime() - startTime()) / 1000;
//         duration += seconds;

//     };

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;

//     };

//     Object.defineProperty(this, 'duration', {
//         get: function(){
//             return duration;
//         }
//     });
// }

// Property Descriptor
let person = {name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
