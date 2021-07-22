// Function declaration
// Function sem parametro de entrada e não retorna nada

function sayHello() {
  console.log("Hello!");
}

sayHello();

// Function que não retorna nada, mas que recebe um argumento

function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo("Felipe Neto");

// Function que recebe valor

function returnHi() {
  return "Hi!";
}

const greeting = returnHi();

console.log(greeting);
console.log(returnHi());

// Function que recebe um parametro e também retorna alguma coisa

function returnHiTo(name) {
  return `Hi ${name}`;
}

console.log(returnHiTo("Felipe Neto"));
