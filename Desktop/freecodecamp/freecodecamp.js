//commenting
/**multilinecommenting
 * hdflfhv
 * fovvhfv
 * apvhvl
 */
// number = 9;

//data types and varriables
/**undefined,null,boolean,string,symbol,number,object */

//declaration
var myName = "beau"

//storing variable with assignment operators
var a;
var b = 2;
a = 7;
b = a;
console.log(a)

//initialising varriable with assignment operators
var a = 9;
--
//uninitialized variables
var a = 5;
var b = 10;
var c = "i am a";
//do not change the code
a = a + 1;
b = b + 5;
c = c + "string!";

//case sensivity in variable
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//assignments
studlyCapVar = 10;
properCamelCase = "a string";
titleCaseOver = 9000;

//adding numbers
var sum = 10 + 10;
console.log(sum)

//subtracting numbers
var difference = 45 - 0;
console.log(difference)

//multiplying Numbers
var product = 8 * 10;
console.log(product)

//dividing numbers
var quotient = 60 / 5;
console.log(quotient)

//incrementing numbers
var myVar = 87;
myVar++;

//decrementig
var myVar = 87;
myVar--;

//decimal numbers(float)
myVar = 9.3;
myVar = 0.0001;

// multiplying decimal numbers
var product = 2.5 * 4.3;
console.log(product)

//dividing decimal numbers
var quotient = 5.5 / 3.3
console.log(quotient);

//finding remainder
var remainder = 11 % 3;
console.log(remainder);

//compound assignment with augumented addition
a = a + 12
b = 9 + b
c = c + 7;
//
a += 12;
b += 9;
c += 7;

//compound assignment with augumented subtraction
a = a - 12;
b = 9 - b;
c = c - 7;
//
a -= 12;
b -= 9;
c -= 7;

//compound assignment with augumented multiplication
a = a * 12;
b = 9 * b;
c = c * 7;
//
a *= 12;
b *= 9;
c *= 7;

//compound assignment with augumented division
a = a / 12;
b = 9 / b;
c = c / 7;
//
a /= 12;
b /= 9;
c /= 7;

//declearing string variables
var myFirstName = "alam";
var mylastName = "turing";

// escaping literals quote in string
var myStr = "I am a double quoted\" string \"inside double quote"

//quoting string without single quote
var myStr = '<a href =\"https://www.//example.com" target="_blank">link</a>'

//escaping sequence in string
/**
 code output
 * \' single quote
 *\" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed 
 */
var myStr;
myStr = "firstLine\n\t\\\secondline\nThirdline";

//concatenating string with plus operator
var ourStr = "i come first." + "i come second";
console.log(ourStr);

//concatenating string with plus equals operator
var ourStr = "i come first.";
ourStr += "i come second";
console.log(ourStr);

//constructing string with variables
var ourName = "freecodecamp";
var ourStr = "hello, our name is" + ourName + ", how are you?";
console.log(myStr);

//appending variables to string
var anAdjective = "awesome";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

//finding the length of string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length
console.log(firstNameLength);

//bracket notation to find first character in a string
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//string immutability
var myStr = "jello world";
myStr[0] = "hello world";

//bracket notation to find nth character in string
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

//bracket notation to find the last character in string
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

//bracket notation to find nth to the last character in string
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

//word blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "the" + " " + myAdjective + "" + myNoun + " " + myVerb + "to the store" + myAdverb + "."
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//storing multiple values with an array
var ourArray = ["john", 23];
var myArray = ["Quincy", 1];

//nested array
var ourArray = [["john", 23], ["the universe", 42], ["everything", 100101]];
var myArray = [["Quincy", 1], ["bulls", 23], ["white sox", 45]];

//access array data with indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log(ourData);

//modifing array data with indexes
var ourArray = [12, 23, 45];
ourArray[1] = 45;
console.log(ourArray);

//access multidimensional arrays with indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

//manipulating arrays with push()
var ourArray = ["stimpson", "j", "cat"];
ourArray.push(["happy", "joy"]);

//manipulating arrays with pop()
var outArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
var myArray = [["john", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop()
console.log(myArray);

//manipulating arrays with shift() /[add things to the begin of the array]
var ourArray = ["stimpson", "j", ["cat"]];
var removedFromOurArray = ourArray.shift()

//manipulating arrays with unshift() /[add things to the begin of the array]
var ourArray = ["stimpson", "j", "cat"];
ourArray.shift();
ourArray.unshift("happy");
var myArray = [["john", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["paul", 35]);

//shopping list
var myList = [["cereal", 3]["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//write reusable code with functions
function ourReusableFunction() {
    console.log("heyya world");
}
ourReusableFunction();

//passing values to functions with argument
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

//global scope and functions
var myGlobal = 10;
function fun1() {
    var oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//local scope and functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//global vs local scope in functions
var outerWear = "t=shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit);
console.log(outerWear);

//return a value from a function with return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//understanding undefined value returned from a function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

//assignment with a returned value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

//stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift;
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:" + JSON.stringify(testArr));

//boolean value
function welcomeToBooleans() {
    return false;

}

//using conditional logic with if statement
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes, it's true";
    }
    return "no, it's false"
}
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes,that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

//comparison with the equality operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//comparison with the strict equality operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

//practice comparing different value
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

//comparison with the inequality operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

//comparison with the strict inequality operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

//comparison with the logical and operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

//comparison with the greater than or equal to operator
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterThanOrEqual(10));

//comparison with the less than operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val > 55) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10));

//comparison with the less than or equal to operator
function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessThanOrEqual(10));

//comparison with the logical and operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {

        return "Yes";

    }
    return "No";
}
testLogicalAnd(10);

//comparison with the logical Or operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {

        return "Outside";

    }
    return "Inside";
}
testLogicalOr(10);

//else statement
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5"
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}

//else if statement
function testElseIf(val) {
    if (val > 5) {
        return "Greater than 5"
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

//Logical order in if else statement
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5"
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

//chaining if else statement
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "change Me";
    }
}
console.log(testSize(7));

//golf code
var names = ["Hole-in-one!", "Eagle", "Bardie", "Par", "Bogey", "Double Bogey"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= -2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2]
    }
    else if (strokes == par - 1) {
        return names[2]
    }
    else if (strokes == par) {
        return names[3]
    }
    else if (strokes == par + 1) {
        return names[4]
    }
    else if (strokes == par + 2) {
        return names[5]
    }
    else if (strokes == par + 3) {
        return names[6]
    } else
        return "Change Me";
}
golfScore(5, 4);

//switch statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }
    return answer;
}
console.log(caseInSwitch(1));

//Default Option in Switch Statement
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case a:
            answer = "apple";
            break;
        case b:
            answer = "bird";
            break;
        case c:
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"));

//Multiple identical option in switvh statement
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1));

//Replacing if else chain with switch 
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "marley"
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine"
            break;


    }
    return answer;
}

//Returning boolean value from functions
function isLess(a, b) {

    return a < b;
}
console.log(isLess(10, 15));

//Returning early pattern from functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

//counting cards
var count = 0;
function cc(card) {
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

//Building javascript object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing object properties with bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

//Accessing object properties with variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

//updating object properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everthing!"]
};
ourDog.name = "Happy Camper";
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

//Add new properties to an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog['bark'] = "woof!";

//Delete properties from an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
delete ourDog.bark;

//using objects for lookup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"

    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

//     switch (val) {
//         case "alpha":
//             result = "Adams";
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":
//             result = "Frank";
//             break

//     }
// }
//testing object for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("gift"));

//Manipulating complex objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "realease_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];

//Accessing nested objects
var mystorage = {
    "car": {
        "inside": {
            "gloves box": "map",
            "passenger seat": "crumbs"
        },
        "outside": { "trunk": "jack" }
    }
};
var gloveBoxContents = mystorage.car.inside["gloves box"];
console.log(gloveBoxContents)

//Accessing nested arrays
var myPlants = [
    {
        type: "flower",
        list: [
            "rose", "tulip", "dandelion"
        ]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];
var secondTree = myPlants[1].list[1];//array uses [] , while object uses .

//Record Collection
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "track": [
            "Let it Rock",
            "You Give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince ",
        "track": [
            "1999",
            "Little red corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "track": []
    },
    "5439": {
        "album": "ABBA Gold",

    }

};
var collectionCopy = JSON.parse(JSON.stringify(collection));//keeping a copy of object before changing
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];// creating property if it already exist
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

//iterate with while loop
var myArray = [];
while (i < 5) {
    myArray.push(i);
    i++;

}
console.log(myArray);

//iterate with for loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);

}
var myArray = [];
console.log(ourArray);
////iterate odd numbers with a for loop
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

//counting backwards with a for loop
var myArray = [];
for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

//iterate through an array with a for loop
var ourArray = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}
console.log(ourTotal);

//Nesting for loop
function multiplyAll(arr) {
    var product = 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            product *= array[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

//iterate with do...while loops
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;

} while (i < 5)

console.log(i, myArray);

//profile lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Larine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hangrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    }, {
        "firstName": "Akira",
        "lastName": "Larine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }

    } return "No such contact"
}
var data = lookUpProfile("Akira", "likes");
console.log(data);

//Generate Random fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction);

//Generate random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // input random number between 0&19
function randomWholeNum() {
    return Math.random();//return Math.floor(Math.random() * 10); input random number between 0&9
}
console.log(randomWholeNum());

//Generate random whole number within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

//use the parseInt function
function convertToInteger(str) {
    return parseInt(str);

} convertToInteger("56");

//using the parseInt function with a radix 
function convertToInteger(str) {
    return parseInt(str, 2)
} convertToInteger("10011");

//use the conditional (ternary) operators
function checkEqual(a, b) {
    return a === b ? true : false;
    return a === b;
}

checkEqual(1, 2);

//using multiple conditional (ternary) operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10));

//difference between the var and let keyword
var catName = "Quincy"; //allow you to declare a variable twice while let does not allow you to declare a variable twice in thesame scope
var quote;
var catName = "Beau";
function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

// compare scopes of the var and let keyword
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is:", i);
    } console.log("Function scope i is:", i);
    return i;
}
checkScope();

//declare read-only variable with thr const keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is amazing!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);

    }
} printManyTimes("freeCodeCamp");

//mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // s = [2,5,7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

//prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
        MATH_CONSTANTS.PI = 99;
    }
    catch (ex) {
        console.log(ex);
    } return MATH_CONSTANTS.PI;

}
const PI = freezeObj();
console.log(PI);

// use arrow function to write concise anonymous functions
const magic = () => new Date();
//write arrow function with parameters
// var myConcat = function( arr1, arr2) {
//     return arr1.concat(arr2);
// };
// console.log(myConcat([1,2],[3,4,5]));
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//write higher order arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//write higher order arrow function
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//use the rest operators with function parameter
const sun = (function () {
    return function sum(...args) {

        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));

//use the spread operator to evaluate array in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

//use distructing assignment to assign variable from object
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
const { x: a, y: b, z: x } = voxel;
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Destructuring assignment with nested object
const LOCAL_FORECAST = {
    today: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tommorow: { max: maxOfTommorow } } = undefined;
    return maxOfTommorow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use Destructuring assignment to assign variable from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

//Use Destructuring assignment with the rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring assignment to pass an object as a function's parameter
const stats = {
    max: 56.78,
    standard_diviation: 43.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

//creare string using template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < array.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)

    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

//write concise object literal declaration using simple fields
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//write concise declarative function
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
};
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);
//==/
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//use getters and setters to control access to an object
class Book {
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}
function makeClass() {
    class Thermostat {
        constructor(temp){
        this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
        return this._temp;
    } set temperature(updatedTemp){
        this._temp = updatedTemp
    }
}
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

//understand the difference between import and require
import {capitalizeString} from "./string_function"
const cap = capitalizeString("hello!")
console.log(cap);// export comst capitalizeString = str.toUpperCase()

//use export to reuse a code block
const capitalizeString = (String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export{capitalizeString};
export const foo = "bar";
export const  bar  ="foo";

//use * to import everthing form a file
import * as capitalizeStrings from "capitalizeStrings";

//create an export fallback with export default
export default function subtract(x,y) {
    return x - y; 
}

//import a default export
import subtract from "math_functions";
subtract(7,4);
