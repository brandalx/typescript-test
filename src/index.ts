//basic types
let id: number = 5;
console.log("ID:", id);
let company: string = "Traversy media";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
// ids.push("hello") //
ids.push(5);

//tuple
let person: [number, string, boolean] = [1, "Brad", true];

//tuple array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [3, "John"],
  [4, "Jill"],
  [4, "Jill"],
];

// union

let pid: string | number; //could be string or number eathier
pid = 22;

//enum
enum Direction1 {
  Up = 1, //will starts from one / if not will start from 0
  Down, //will countinue to evalueta previous + 1
  Left, //will countinue to evalueta previous + 1
  Right, //will countinue to evalueta previous + 1
}

enum Direction2 {
  Up = "Up", //wil print declared string (Up here)
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Left);
console.log(Direction2.Left);

//objects

//first example of type declaration
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

//second example of type declaration (separated)
type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: "John",
};
