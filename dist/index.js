"use strict";
//important notes
//TSC is typescript compiler
//for mac run gloably sudo npm i -g typescript
/*
then new file > index.js
then write something and then tsc index.js
tsc index --watch (watching for changes)
tsc --init (creates ts config file)
is important there:
"module": "commonjs"
"rootDir": "./src"
"outDir": "./dist"
"target": "es6"
then we can just run tsc
or node index

*/
//basic types
let id = 5;
console.log("ID:", id);
let company = "Traversy media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
// ids.push("hello") //
ids.push(5);
//tuple
let person = [1, "Brad", true];
//tuple array
let employee;
employee = [
    [1, "Brad"],
    [3, "John"],
    [4, "Jill"],
    [4, "Jill"],
];
// union
let pid; //could be string or number eathier
pid = 22;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
console.log(Direction2.Left);
//objects
//first example of type declaration
const user1 = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 1,
    name: "John",
};
//type asssertion
let cid = 1; //firstly its in type of any
// let customerId = <number>cid //just different approach
let customerId = cid; //then we reassign any to declared type of number
//functions
function addNum(x, y) {
    //arguments type and returning function type
    return x + y; //meanwhile function can only return number type
}
console.log(addNum(3, 5));
// void function that does not returns value
function log(message) {
    //function des not return anything then its void
    console.log(message);
}
const user3 = {
    id: 1,
    name: "John",
};
const p1 = 1;
const add = (x, y) => x + y; //wil work because is same as interface
// const add2: MathFunc = (x: number, y: string): number => x + y;
//wil not work because its not same as interface
const sub = (x, y) => x + y; //wil work because is same as interface
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
}
const brad = new Person(1, "Brad Trasov");
const mike = new Person(2, "Mike Jordan");
console.log(brad, mike);
//data modifiers
//there is three types of data modifiers: public private and protected
//private - only inside of class
//protected only inside of class or from instance of the class
//public (default) fully accesible
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//   brad2.id = 5 because of id is private its only accesible inside of class
// console.log(brad2.id) //also will give error because of private
const brad2 = new Person(1, "Brad Trasov 2");
const mike2 = new Person(2, "Mike Jordan 2");
// console.log(brad2.register());
//generics
//instead of having any we can use <T> here whic is placeholder of the type, and then we define type in the beggining of calling function. allows to create  reuseble components whith any data types we want
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "joe"]);
strArray.push("hello");
