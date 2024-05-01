// function parimpar(num){
//     if (num % 2 == 0 ){
//         return 'par'
//     }else{
//         return 'impar'
//     }
// }

// console.log(parimpar(8))

function fatorial(n){
    let fat = 1
    for( n; (n < 1); n--){
        fat *= n
        return fat
    }
}
console.log(fatorial(5))