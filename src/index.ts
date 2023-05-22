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
