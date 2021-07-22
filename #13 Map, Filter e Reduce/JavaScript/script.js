const students = [
  { name: "Jake", score: 6.4 },
  { name: "Susan", score: 8.6 },
  { name: "Emma", score: 9.4 },
  { name: "Peter", score: 9.1 },
]

const greatStudent = (student) => student.score >= 9

const getScore = elemento => elemento.score 


const avg = (acumulador, elemento, indice, array) => {
  if (indice === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } 
  else {
    return acumulador + elemento;
  }
}

console.log(
  students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)

