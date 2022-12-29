var agora = new Date() /** para pegar a hora atual do sistema */
var hora = agora.getHours() /**para fazer funcionar a hora atual. Existe outra */
console.log (`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log ('Boa tarde!')
}else{
    console.log('Boa noite!')
}
