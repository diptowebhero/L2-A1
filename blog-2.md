# Generics in TypeScript

## Introduction

Generics help us write reusable TypeScript code. With generics, we can create one function that works with different types of data, such as string, number, or object.

## Without Generics

Without generics, we may need to write separate functions for different types.

```ts
function getFirstString(items: string[]): string {
  return items[0];
}

function getFirstNumber(items: number[]): number {
  return items[0];
}
```

Both functions do the same work, but for different types. This creates repeated code.

## With Generics

Generics solve this problem.

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Now the same function can work with strings, numbers, or other data types.

```ts
const name = getFirstItem(["Alice", "Bob"]);
const number = getFirstItem([10, 20, 30]);
```

TypeScript understands that `name` is a string and `number` is a number.

## Generics with Objects

Generics are also useful for objects.

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const userName = getProperty(user, "name");
```

Here, the key must exist in the object. This helps prevent mistakes.

## Conclusion

Generics make TypeScript code reusable and safe. They reduce repeated code and help us keep correct types. For this reason, generics are very useful in TypeScript projects.