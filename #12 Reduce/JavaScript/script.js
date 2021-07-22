const number = [1, 2, 3, 4, 5, 6]

const sum = (total, elemento) => total + elemento

const total = number.reduce(sum)

console.log(total)

// calcular a média dos elementos
const avg = (acumulador, elemento, indice, array) => {
  if (indice === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } 
  else {
    return acumulador + elemento;
  }
}

const result = number.reduce(avg);

console.log(result)

