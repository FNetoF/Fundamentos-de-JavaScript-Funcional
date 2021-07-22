// JavaScript é totalmente flexivel

const logParams = (a, b, c) => {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) // Passando mais parametros - o js ignorou os parametro adicionais
logParams(1, 2, 3) // Passando três parametros
logParams(1, 2) // Passando dois parametros - Ele executa os dois parametros e no terceiro apresenta undefined/não definido
logParams(1) // Passando um parametro - Ele executa o primeiro e nos outros apresenta undefined/não definido
logParams() // Passando nenhum parametro - Eele executa e apresenta undefined/não definido em todos eles


// Definido um valor padrão para um parâmetro

const defaultParams = (a = 0, b = 0, c = 0) => {
    console.log(a, b, c)
}

defaultParams(2, 4, 8)
defaultParams(2, 4)
defaultParams(2)
defaultParams()


// Existe a posibilidade de passar uma quandidade indefinida de parâmetros?
// Passando valores de uma forma flexivel

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const logNums = nums => {
    for (const i of nums) {
        console.log(i)
    }
}

logNums([10, 11, 12, 13, 14, 15])

// spred/rest ...variables
// Ela função vai conseguir receber uma quandidade váriavel de parametros, 
// e todos os parametros são armazenados dentro de uma função
const logNumss = (...nums) => {
    console.log(nums);
};

logNumss(26, 27, 28, 29, 30);


// Ex: a soma de todos os numeros
const sumAll = (...nums) => {
    let total = 0
    for(let numero of nums) {
        total += numero
    }
    return total
}

console.log(sumAll(1,2,3,4,5))
