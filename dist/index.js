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
