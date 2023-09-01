/*
 * Variables, Data Types, and Typing
 */

/* Variables */

let wordData = "Word Data"

console.log (wordData)

let subtotal= 100
let tax = subtotal* 0.07
let totalwithtax = subtotal + tax

console.log (totalwithtax);

/* Data Types */

let obj = {
    key1: "value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2key1: "internal object value",
    }
};

console.log (obj.obj2.obj2key1

/* Typing Systems */)

//let variable : string = "string";

let var1="2";
let var2 = 5;
let result = var1 + var2
console.log (result)

/*Operators*/
 let add = 1+1;
let sub = 2-1;
let mult = 2*4;
let division = 4/3;
let mod = 129 % 5;
console.log(add)
console.log(sub)
console.log(mult)
console.log(division)
console.log (mod)

/*Conditionals, Functions, Loops and Scope */

//Equals : checks to see if two values are the same
let equals = 1 === 1;
console.log(equals)
let equalsw= 1 == '1';
console.log(equalsw)

    //strong equality "===", only compares similar types
    //weak equality "==", coerces equality between different data types

//Greater Than: checks to see if one value is larger than another

let greaterThan = 5 > 1;
console.log(greaterThan)

// Less Than: compares to see if one value is less than another

let lessThan = 2 < 10;
console.log(lessThan)

// Greater than or equals: compares to see if a value is equal or larger than another

let greaterThanEq = 5 >= 5;
console.log(greaterThanEq)

// Less Than or equals: same as in math

let lessThanEq = 4 <= 9;
console.log(lessThanEq)

// Inequality checks if two numbers are not the same

let notEquals = 5 !== 2;
console.log(notEquals)

/*...*/

let storeA = 35.10;
let storeB = 4.40;
let storeAislower = storeA < storeB
console.log(storeAislower)
function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB
    if (storeAIsLower) {
        console.log("Store A has the lower price")
    } else if (storeB < storeA) {
        console.log("Store B has the lower price")
    } else {
        console.log("their prices are the same.")
    }
}
compareStorePrices(10, 45);
compareStorePrices(48,3);
compareStorePrices(308,308);

//remember java is case sensitive!

function squareNum (number) {
    return number * number;
}
let squarednumber =squareNum(71073);
console.log(squarednumber)

/*Scope*/

let b=10;
function addNumbers (n, m, b) {
    console.log(b);
    let b;
    if (1===1){
         b = 8;
    }
    console.log(b);
    return n + m;
}
 addNumbers(2,3,10);

/*
 *   Arrays
 */

let ourArray = [1, 2, 3, 4, 5, 6, 7];
console.log(ourArray [4][0])

/*
 * Loops
 */
    let arrLen = ourArray.length
    for (let i=0; i<=arrLen; i++){
        console.log("I is equal to: ", + i);
        console.log(ourArray[i]);
        for (let j=0; j<10; j ++) {
            console.log('J is equal to: ' + j);
        }
}
/* While Loop */
let R = 0;
while (R < 10) {
    console.log('RUN');
    R = R + 1;
}

/*
 ( Objects, Interfaces and API's
 */

let dog = {
    name:  "steve",
    color: "brown",
    breed: "pug",
    size: "small",
    bark: function () {
        console.log("BARK!");
        },
};

dog.bark();

function z(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y= {
    name: "Tom",
    num: 10,
};
z(y);
console.log(y);