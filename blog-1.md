# Why `unknown` Is Safer Than `any`

## Introduction

In TypeScript, `any` and `unknown` can both store any type of value. But they are not equally safe. The `any` type can create problems because TypeScript stops checking the value properly. The `unknown` type is safer because it forces us to check the type before using it.

## Why `any` Is Risky

When we use `any`, TypeScript allows us to do anything with the value.

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed();
```

Here, `toUpperCase()` works because the value is a string. But `toFixed()` is for numbers, so it can create an error. TypeScript does not warn us because the value is `any`.

## Why `unknown` Is Better

The `unknown` type also accepts any value, but we cannot use it directly.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

Here, TypeScript first checks that the value is a string. Then it allows us to use string methods.

## Type Narrowing

Type narrowing means checking the type before using the value.

```ts
function checkValue(value: unknown): string {
  if (typeof value === "string") {
    return "It is a string";
  }

  if (typeof value === "number") {
    return "It is a number";
  }

  return "Unknown type";
}
```

## Conclusion

`any` is risky because it removes type safety. `unknown` is safer because it makes us check the type first. For beginner-friendly and safe TypeScript code, `unknown` is better than `any`.