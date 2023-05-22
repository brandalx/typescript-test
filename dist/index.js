"use strict";
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
