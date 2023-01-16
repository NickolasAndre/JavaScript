var num = [5,4,7,1,8]
num[5] = 6
num.push(9)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(5)
if(pos == -1){
    console.log('valor invalido')
}else{

console.log(`O valor 8 está na posição ${pos}`)
}