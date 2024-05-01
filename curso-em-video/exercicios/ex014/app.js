//definindo itens que usarei
let con = document.querySelector('main .console')
let adbutton = document.getElementById('adbutton')
let fnsbutton = document.getElementById('fnsbutton')
let lista = []
let soma = 0

//criando funcao adicionar
function adicionar() {

    //pegando dados digitados pelo usuario
    let txtnum = document.getElementById('idnum')
    let num = txtnum.value

    //verificando validade do numero
    if (txtnum.value.length == 0 || num < 1 || num > 100 || (lista.indexOf(num) != -1)) {
        alert('O numero é invalido ou é repetido. Verifique os valores e tente novamente!')
    } else {          //adicinando numero no array
        lista.push(num)
        con.innerHTML += `<p>O número ${num} foi adicionado à lista!</p>`
    }

}

//criando elemento de escuta de evento
adbutton.addEventListener('click', adicionar)

//criando função de finalizar

fnsbutton.addEventListener('click', () => {
    //limpando console
    con.innerHTML = ''
    //verificando validade da requisição
    if(lista.length == 0){
        alert('Algo deve ser adicionado antes de finalizar a lista para que haja alguma análise!')
    }else{//inserindo dados da analise
        con.innerHTML += `<p>Ao todo temos ${lista.length} numeros cadastrados</p>`
        lista.sort(Number)
        con.innerHTML += `<p>O maior valor informado foi ${lista[Number(lista.length) - 1]}</p> <p>O menor valor informado foi ${lista[0]}</p>`
        //fazendo a soma dos numeros do array
        for (let i in lista){
            soma += Number(lista[i])
        }
        con.innerHTML += `<p>A soma dos numeros cadastrados é: ${soma}</p> <p>A média dos numeros cadastrados é: ${soma/Number(lista.length)}</p>`
    }
})

