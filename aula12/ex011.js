var idade = 67
console.log(`voçê tem ${idade} anos`)
if(idade < 16){
    console.log('Náo votar')
} else if(idade < 18 || idade > 65){
    console.log('voto opcional')
} else{
    console.log('voto obrigatório')
}