// Function expression

const increment1 = function (numero) {
  return numero + 1
}

console.log(increment1(5))

// Arrow Function é uma função anonima

const increment2 = (numero) => {
  return numero + 1
}

console.log(increment2(8))


// Na Errown function quando tem um único parametro pode tirar os parenteses

const increment3 = numero => {
  return numero + 1
}

console.log(increment3(99))


// Simplificando a Errown function
// Quando ver a Errown function sem cor e não tiver par de chaves{} 
// essa função terá apenas uma linha de código e tudo que tiver 
// nessa linha de código será retornado automaticamente

const increment4 = (numero) => numero + 1

console.log(increment4(199));

// Com 2 parâmetro é obrigado a colocar os parenteses

const sum = (a, b) => a + b

console.log(sum(5, 2));
