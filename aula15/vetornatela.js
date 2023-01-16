var valores = [8,5,7,3,6]

console.log(valores)

/*
for(var pos = 0; pos < valores.length; pos ++){
    console.log(`a posição ${pos} tem o valores ${valores[pos]} `)
}
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}