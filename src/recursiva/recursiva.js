function countdown(number){
    if(number <1) return
    setTimeout(() => {
    console.log(number)
    countdown(number -1)
    },)
   // for(let i = number; i > 0; i--){
   //     console.log(i)
   //}
}

countdown(5)


function sum(numbers,result=0){
    if (numbers<=1){
        return result
    }
    return sum(numbers-1,result+numbers)
}

console.log(sum(3))

//function exec(numero){
 //   console.log(numero)
   // exec(number+1)
//}
//exec(1)
//ESSA FUNÇAO VAI DAR INFINITO