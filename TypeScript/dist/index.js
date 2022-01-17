"use strict";
// trc --watch
// how to run the js code in ts ==> node index
// Basic Types
let id = 5;
let company = "Jiwan Jeon";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid;
pid = "22"; // or pid = 22
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Down);
const user = {
    id: 1,
    name: "John",
};
// Same one as top
// const user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: 'John'
// }
// Type Assertion
let cid = 1;
let customerId = cid; //or = cid as number
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log(2);
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        // console.log(123); this could be console whenever the object run
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "jiwan jeon");
const mike = new Person(2, "Jiwan");
console.log(brad, mike);
console.log(brad.register());
class Person1 {
    constructor(id, name) {
        // console.log(123); this could be console whenever the object run
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Jiwan", "Developer");
console.log(emp.name);
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
