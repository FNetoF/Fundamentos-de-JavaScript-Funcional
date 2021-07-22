const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(function (elemento) {
  return elemento * 2;
});

const numbersV22 = numbers.map((elemento) => {
  return elemento * 2;
});

const numbersV222 = numbers.map((elemento) => elemento * 2);

console.log(numbersV2);
console.log(numbersV22);
console.log(numbersV222);

// Sem usar uma função com parametro com outra função
const numbersV3 = [];
for (let numero of numbers) {
  numbersV3.push(numero * 2);
}

console.log(numbersV3);

const students = [
  { name: "Jake", score: 6.4 },
  { name: "Susan", score: 8.6 },
  { name: "Emma", score: 9.4 },
  { name: "Peter", score: 9.1 },
];

// Pegar as notas dos alunos e arredondar as notas para cima
const getScore = (elemento) => elemento.score;

console.log(
  students
    .map(getScore)
    .map(Math.ceil) // arredonda para cima
    .map(Math.floor) // arredonda para baixo
);

// ou

const result = students
  .map(getScore)
  .map(Math.ceil)
  .map(Math.floor);

  console.log(result);
