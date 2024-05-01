function contar() {
    let con = document.querySelector('div.console')
    con.innerHTML = ''
    //pegando caixas de input do usuário
    let txtinic = document.getElementById('idinic')
    let txtfim = document.getElementById('idfim')
    let txtstep = document.getElementById('idstep')

    //pegando informações que o usuario digitou
    numInic = Number(txtinic.value)
    numFim = Number(txtfim.value)
    numStep = Number(txtstep.value)

    //evitando loop infinito
    numStep == 0 ? numStep = 1 : numStep = numStep 
    numStep < 0 ? numStep = numStep*(-1) : numStep = numStep 
    
    //verificando se os inputs foram preenchidos
    if (txtinic.value.length == 0 || txtfim.value.length == 0 || txtstep.value.length == 0) {
        alert('Todas as caixas precisam ser preenchidas')
    } else if (numInic < numFim) {          //contagem crescente
        while (numInic <= numFim) {
            con.innerHTML += `${numInic} <i class="fa-solid fa-hand-point-right"></i>`
            numInic += numStep
        }
        con.innerHTML += '<i class="fa-solid fa-flag-checkered"></i>'
    }else if (numInic > numFim) {           //contagem decrescente
        while (numInic >= numFim) {
            con.innerHTML += `${numInic} <i class="fa-solid fa-hand-point-right"></i>`
            numInic -= numStep
        }
        con.innerHTML += '<i class="fa-solid fa-flag-checkered"></i>'
    }else{
        alert('Os numeros: "inicial e final" nao podem ser iguais!')
    }
}