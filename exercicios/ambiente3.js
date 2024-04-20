let num = [200, 500, 700]
num.push(Number(900)) 
num.push(Number(1200))
num.sort(Number)
num.sort(Number)
num.sort(Number)

// for(let i = 0; (i < Number(num.length)); i++){
//     console.log(num[i])
// }

//Percorrendo vetores de forma simplificada com "in"

// for (let i in num){
//     console.log(num[i])
// }

//existe o comando indexOf, que me retorna o index a partir do valor que se encontra nele. Caso nao exista, ele retorna -1

console.log(num.indexOf(1210))