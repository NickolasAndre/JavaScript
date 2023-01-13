function contar(){
    var ini = window.document.getElementById("txti")
    var fim = window.document.getElementById ("txtf")
    var passo = window.document.getElementById("txtp")
    var res = document.getElementById ("res")
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERROR] Faltam dados!')
    } else {
        res.innerHTML = 'cantando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0){
            window.alert('passo invalido! Considerando passo 1')
            p = 1
        }

        if(i <f){
            // Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -=p){
                res.innerHTML += `\u{1F449} ${c} `
            }
            res. innerHTML += `\u{1F3C1}`
        }
        
    }
}
