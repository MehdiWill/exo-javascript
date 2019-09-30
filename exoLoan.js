
// // 
// function getText(prenom, nom)  {
//   return `${prenom} ${nom}` ;
// }

// 'T'
// let toto = 'tata'

// function getTotoBad() {
//   toto = 'tutu'
// }

// function getTotoGood() {
//   return 'tutu'
// }

// toto = getTotoGood()
// // console.log(toto)


// function disUnMot(mot) {
//   return mot
// }
// console.log(disUnMot('TOTO')) // TOTO
// console.log(disUnMot('TATA')) // TATA

// function add(x,y){
//   return x+y
// }


// console.log(add(5,6)) // 11
// console.log(add(5,2)) // 7

// function compare(x,y){
//     return x===y
// }


// console.log(compare(4,5)) // false
// console.log(compare(5,5)) // true


function returnBigger(){} 
function remplaceBy(){} 
function swap(){} 

// exo1


console.log("isBigger", returnBigger(564, 111)) // 564
console.log("isBigger", returnBigger(564, 1111)) // 1111

// exo2
console.log('remplaceBy', remplaceBy('salut toto', 'toto', 'tata')); // salut tata
console.log('remplaceBy', remplaceBy('salut-toto-titi', '-', ' ')); // salut toto titi

// exo3
let var1 = "TOTO"
let var2 = "TATA"
swap(var1, var2)
console.log("swap", var1, var2) // TATA TOTO


