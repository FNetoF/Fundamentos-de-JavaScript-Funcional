// Anonymous function é uma dunção que não tem nome
// Chamando uma anonymous function imediata

(function (a, b, c) {

  console.log(`Result: ${a + b + c}`);

})(1, 2, 3);

// Quando é necessário usar esse tipo de construção?
// Quando você precisa garantir que determinado valores
// vão ta em um escopo mas restrito como é o escopo da função

(function (a, b, c) {

  let x = 3
  console.log(x)
  console.log(`Result: ${a + b + c}`);

})(1, 2, 3);


// Anonymous function sem parametro

(function () {
  let x = 500;
  console.log(x);

})();


// Anonymous function com Arrow Function

(() => {
  console.log("Arrow #01");
})();


// Anonymous function com Arrow Function (Função imediatamente invocada)

(() => console.log("Arrow #02"))();
