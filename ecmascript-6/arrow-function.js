//Arrow Function =>
//Em sua maioria não tem nome (anonima)

//function anonima:
let circleArea = function (r){
    let pi = Math.PI
    let area = pi * Math.pow(r, 2)
    return area.toFixed(2);
}

console.log(circleArea(6))

//Arrow Function:

let circleArea2 = (r) => {
    let pi = Math.PI
    let area = pi * Math.pow(r, 2)
    return area.toFixed(2);
}

console.log(circleArea2(6))

//Forma reduzida:

let circleArea3 = (r) => (Math.PI * r * r).toFixed(2)
console.log(circleArea3(6)) //Este, caso não tenha as chaves, não precisa colocar o return