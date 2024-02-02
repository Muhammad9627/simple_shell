//string methods

// let text = "500";
// text = text.padStart(4,"x");
// console.log(text);
// let numb = 10005;
// let text = numb.toString();
// console.log(text.padStart(4,0));
// let text = "Hello world!"
// let result = text.repeat(2);
// console.log(result);
// let text = "please visit Microsoft ";
// let newText = text.replace("Microsoft","W3Schools");
// console.log(newText);
// let text = "please visit Microsoft ";
// let newText = text.replace(/MICROSOFT/i,"W3Schools");
// console.log(newText);
// let text = "please visit Microsoft , Microsoft, Microsoft ,Microsoft ";
// let newText = text.replace(/MICROSOFT/g,"W3Schools");
// console.log(newText);
// let text = "please visit Microsoft , Microsoft, Microsoft ,Microsoft ";
// let newText = text.replaceAll("Microsoft","W3Schools");
// console.log(newText);
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray[0]);
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index);
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// console.log(index);
// let text = "The Rain in spain stays mainly in the plain";
// text.match("ain");
// console.log(text);
// let x = 123;
// console.log(x.toString() + "<br>" +
// (123).toString() + "<br>" +
// (100 + 23).toString());
// let x = 9.656;
// console.log(x.toExponential() + "<br>" +
// x.toExponential(2) + "<br>" +
// x.toExponential(4) + "<br>" +
// x.toExponential(6));
// let x = 9.656;
// console.log(  x.toFixed(0) + "<br>" +
// x.toFixed(2) + "<br>" +
// x.toFixed(4) + "<br>" +
// x.toFixed(6));
// let x = 9.656;
// console.log(x.toPrecision() + "<br>" +
//     x.toPrecision(2) + "<br>" +
//     x.toPrecision(4) + "<br>" +
//     x.toPrecision(6));
// let x = 123;
// console.log(x.valueOf() + "<br>" +
//     (123).valueOf() + "<br>" +
//     (100 + 23).valueOf());
// console.log( Number(true) + "<br>" +
// Number(false) + "<br>" +
// Number("10") + "<br>" +
// Number("  10") + "<br>" +
// Number("10  ") + "<br>" +
// Number(" 10  ") + "<br>" +
// Number("10.33") + "<br>" +
// Number("10,33") + "<br>" +
// Number("10 33") + "<br>" +
// Number("John"));
// let x = new Date("1970-01-01");
// console.log(Number(x));
// let x = new Date("1970-01-02");
// console.log(Number(x));
// let x = new Date("2017-09-30");
// console.log(Number(x));
// console.log(parseInt("-10") + "<br>" +
// parseInt("-10.33") + "<br>" +
// parseInt("10") + "<br>" +
// parseInt("10.33") + "<br>" +
// parseInt("10 6") + "<br>" +
// parseInt("10 years") + "<br>" +
// parseInt("years 10"));
// console.log(parseFloat("10") + "<br>" +
// parseFloat("10.33") + "<br>" +
// parseFloat("10 6") + "<br>" +
// parseFloat("10 years") + "<br>" +
// parseFloat("years 10"));
// console.log(Number.isInteger(10) + "<br>" + Number.isInteger(10.5));
// console.log(Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890));
// console.log(Number.parseFloat("10") + "<br>" +
// Number.parseFloat("10.33") + "<br>" +
// Number.parseFloat("10 20 30") + "<br>" +
// Number.parseFloat("10 years") + "<br>" +
// Number.parseFloat("years 10"));
// console.log(Number.parseInt("-10") + "<br>" +
// Number.parseInt("-10.33") + "<br>" +
// Number.parseInt("10") + "<br>" +
// Number.parseInt("10.33") + "<br>" +
// Number.parseInt("10 6") + "<br>" +
// Number.parseInt("10 years") + "<br>" +
// Number.parseInt("years 10"));

//sorting array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
//sort works based on alphabetic order


//looping an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

//array.for each
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// console.log(text);
// function myFunction(value) {
//     text += "<li>" + value + "</li>";
//   }

//adding element to array
// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits);

// function myFunction() {
//   fruits[fruits.length] = "Lemon";
//   console.log(fruits);
// }

//sorting numbers
/**const points = [40, 100, 1, 5, 25, 10];
console.log(points);  

points.sort(function(a, b){return a - b}); 
*/
// const points = [40, 100, 1, 5, 25, 10];
// function myFunction() {
//     for (let i = points.length -1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i+1));
//       let k = points[i];
//       points[i] = points[j];
//       points[j] = k;
//     }}console.log(points);

// const points = [40, 100, 1, 5, 25, 10];
// function myArrayMin(arr) {
//     return Math.min.apply(null, arr);
//   }
//   console.log(points);

// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
//   }
  
// const points = [40, 100, 1, 5, 25, 10];

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//     txt += value + "<br>"; 
//   }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value, index, array) {
//   return value * 2;
// }

// const myArr = [1, 2, 3, 4, 5,6];
// const newArr = myArr.flatMap((x) => x * 2);
// document.getElementById("demo").innerHTML = newArr;

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value) {
//   return value > 18;
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }


// function multiply(arr, n) {
//     var product = 1;
//     for (var i = 0; i < n; i++) {
//         product *= arr[i];
//     }
//     console.log(product);
//   }
  
//   multiply([1, 2, 3, 4, 5, 6], 3);

// function duplicate(arr) {
//     const doubleNum = []
  
//     for (let i = 0; i < arr.length; i++) {
//       doubleNum.push(2 * arr[i])
//     }
//     return doubleNum
//   }
  
//   const arr = [1,2,3,4]
//   console.log(duplicate(arr))
  

// function duplicate(arr) {
//     let numDouble = arr;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] != 0) {
//             // Total = numDouble * 2;
//             numDouble[i] = numDouble[i] * 2;
//         }
//     }
//     return numDouble;
// }

// function duplicate(arr){
//     let numDouble = arr;
//     for(let i=0; i=arr.length; i++){
//       if(arr!=0){
//         numDouble[i]= numDouble[i] * 2; 
//       }
//     }
//     return numDouble;
//   }
//   console.log(duplicate([1,2,3,4,5])); 

//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//   text += x + "<br>";
// }

// const name = "W3SCHOOLs";
// let text ="";
// for (const x of name){
//     text += x + "-";
// }
// console.log(text);

// for(const key in obj){
//     //Check if keys are not inherited
//     if(obj.hasOwnProperty(key)){
//       console.log(obj[key]); 
//     }
//  }
 
//  //"Prashant Yadav"
//  //"26"
//  //"Male"
//  //function(){
//  //  return `${this.name} is ${this.age} years old`;
//  //}

//javascript arrays
const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap((x) => x*2);
console.log(newArr);

//array filter
const numbers = [45,4,9,16,25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18);
//javascript arrays filter method
const numbers = [45,4,2,9,16,25];
const over18 = numbers.filter(myFunction);
console.log(over18);
function myFunction(value, index, array) {
    return value % 2 == 0;
}
//javascript arrays filter method
const numbers = [45,4,2,9,16,25];
const over18 = numbers.filter(myFunction);
console.log(over18);
function myFunction(value) {
    return value > 18;
}

//javascript arrays reduce method
const numbers = [45,4,2,9,16,25];
let sum = numbers.reduce(myFunction);
console.log("The sum is " + sum);
function myFunction(total, value, index, array) {
    return  total + value;
}

//javascript arrays reduce method
const numbers = [45,4,2,9,16,25];
let sum = numbers.reduce(myFunction);
console.log(sum);
function myFunction(total, value) {
    return  total + value;
}

//javascript arrays reduce method
const numbers = [45,4,2,9,16,25];
let sum = numbers.reduce(myFunction, 200);
console.log("The sum is " + sum);
function myFunction(total, value) {
    return  total + value;
}
//javascript arrays reduce right method
const numbers = [45,4,2,9,16,25];
let sum = numbers.reduceRight(myFunction, );
console.log("The sum is " + sum);
function myFunction(total, value, index, array) {
    return  total + value;
}

//javascript arrays reduce right method
const numbers = [45,4,2,9,16,25];
let sum = numbers.reduceRight(myFunction);
console.log("The sum is " + sum);
function myFunction(total, value) {
    return  total + value;
}

//javascript arrays every method
const numbers = [45,4,2,9,16,25];
let allOver18 = numbers.every(myFunction);
console.log(allOver18);
function myFunction(total, value, array) {
    return  value > 18;
}

//javascript arrays every method
const numbers = [45,4,2,9,16,25];
let allOver18 = numbers.every(myFunction);
console.log(allOver18);
function myFunction( value ) {
    return  value > 18;
}

//javascript arrays every method
const numbers = [45,4,2,9,16,25];
let someOver18 = numbers.some(myFunction);
console.log(allOver18);
function myFunction( value, index, array ) {
    return  value > 18;
}

//javascript from method
const myArr = Array.from("ABCDEFG")
console.log(myArr);

//javascript keys method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text ="";
for (let x of keys){
    text += x + "<br>";
    console.log(keys);
}

//javascript array entries method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f){
    console.log(+= x + "<br>");
}

//javascript arrays with method
const months = ["januar", "Februar", "Mar", "April"];
const myMonths = months.with(2,"March");
console.log(myMonths);

//javascript operators
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];
const year = [ ...q1, ...q2, ...q3, ...q4];
console.log(year);

//javascript arrays push method
const cars = ["Saab", "Volvo", "BMW"];
cars[0]= "Toyota";
cars.push("Audi");
//javascript arrays using const
const cars = ["Saab", "Volvo", "BMW"];
{
    const cars = ["Toyota", "Volvo","BMW"];
}
console.log(cars[0]);
//javascript dates
const d = new Date();
console.log(d);
//new date (date string)
const d = new Date("October 13, 2014 11:13:00");
console.log(d);
//new date  string
const d = new Date("2022-03-25");
console.log(d);
//javascript dates
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);
//javascript dates
const d = new Date(2019,15,24,1,33,30);
console.log(d);
//javascript randon integers
function getRndInteger(min,max) {
    return Math.floor(Math.random()*(max - min))+min;  
}
//javascript booleans
const x = new Boolean(false);
const y = new Boolean(false);
console.log(x===y);
//javascript if 
if (new Date().getHours() < 18){
    console.log("Good day!");
}

//javascript if/elseif/else
if(time < 10){
    greeting = "Good Morning";
}else if (time < 20){
    greeting = "Good Day";
}else {
    greeting = "Good evening";
}
console.log(greeting);
//for loop
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
//or
for (let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}
//
for (let i = 0; i < 5; i++){
    text +="The number is" + i + "<br>";
}

//or
const cars = ["BMW", "Volvo", "Saab","Ford"];
let i , len, text;
for (i = 0, len = cars.length, text = "";
i < len; i++){
    text += cars[i] + "<br>";
}
console.log(text);
//or
const person = {fname:"John",lname:"Doe",age:25};
let txt = "";
for (let x in person){txt += person[x] + "";
}
console.log(txt);
//call back function
const numbers = [45,4,9,16,25];
let txt ="";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    txt += value;
}
//do while loop
let i = 0;
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);
//
const cars = ["BMW","Volvo","Saab", "Ford"];
let i = 0;
let text = "";
for (;cars[i];){
    text += cars[i];
    i++;
}
//
const cars = ["BMW","Volvo","Saab", "Ford"];
let i = 0;
let text = "";
while (cars[i]){
    text += cars[i];
    i++;
}
//break
for (let i = 0; i< 10; i++){
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
}
//continue
for (let i = 0; i< 10; i++){
    if (i === 3) {continue;}
    text += "The number is " + i + "<br>";}

    //iterable
    const letters = new set (["a","b","c"]);
    let text = "";
    for (const x of letters){
        text += x + "<br>"
    }
    console.log(text);
    //
    const name = "W3Schools";
    let text = "";
    for (const x of name){
        text += x + "<br>"
    }
    console.log(text);