/** Como é possivel retornar um função a partir de uma função
 */

function finalprice(taxa, price) {
  return price * (1 + taxa);
}

console.log(finalprice(0.0875, 21.7));
console.log(finalprice(0.0875, 25.1));
console.log(finalprice(0.0875, 107.9));

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

function finalprice2(taxa) {
  return function(price) {
      return price * (1 + taxa);
  }
}

console.log(finalprice2(0.0875)(21.7));
console.log(finalprice2(0.0875)(25.1));
console.log(finalprice2(0.0875)(107.9));

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// curring

function finalprice3(taxa) {
  return function (price) {
    return price * (1 + taxa);
  }
}

// A grande vantagem de fazer isso, é que pode definir esse inposto a uma váriavel

const nycFinalPrice = finalprice3(0.0875)

console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(107.9));
