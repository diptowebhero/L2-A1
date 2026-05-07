function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}


function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  constructor(public name: string, public age: number) { }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  return firstArray.filter((number) => secondArray.includes(number));
}

