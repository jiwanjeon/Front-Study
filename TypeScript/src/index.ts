// trc --watch
// how to run the js code in ts ==> node index

// Basic Types
let id: number = 5;
let company: string = "Jiwan Jeon";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number;

pid = "22"; // or pid = 22

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

console.log(Direction1.Up);
console.log(Direction2.Down);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
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
let cid: any = 1;
let customerId = <number>cid; //or = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

log(2);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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

// Classes with Interfaces

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    // console.log(123); this could be console whenever the object run
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Employee extends Person1 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Jiwan", "Developer");

console.log(emp.name);
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);
