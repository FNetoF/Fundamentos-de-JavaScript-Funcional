/**
 * Entede-se que uma linguagem de programação tem Função First-class 
 * quando suas funções são tratadas como qualquer outra variável. 
 * Por exemplo, numa linguagem desse tipo, a função pode ser passada 
 * como argumento pra outras funções, ser retornada por outra função 
 * e pode ser atribuída como um valor à uma variável.
 */

const add = function(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

console.log(add(10, 30))
console.log(subtract(10, 30))
console.log(divide(10, 30))
console.log(multiply(10, 30))

