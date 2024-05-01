function verificar() {
    //pegando data atual e data digitada
    let data = new Date();
    let ano = data.getFullYear();
    let txtAnoNasc = document.getElementById('ano');
    let anoNasc = txtAnoNasc.value
    let con = document.querySelector('main .con')
    //verificação de validade do ano digitado
    if (Number(anoNasc) < 0 || Number(anoNasc) < 1900 || Number(anoNasc) > ano) {
        alert('[ERRO!] Verifique o ano digitado e tente novamente')
    } else {
        //calculo idade
        let idade = Number(ano) - Number(anoNasc)
        //pegando sexo do usuario
        let sex = document.getElementsByName('sexo')
        let gen = ''
        sex[0].checked ? gen = 'homem' : gen = 'mulher'
        gen == 'homem' ? con.innerHTML = `Você é um homem de ${idade} anos!` : con.innerHTML = `Você é uma mulher de ${idade} anos!`
        //carregando foto exemplo
            //homem criança
        if (idade < 15 && gen == 'homem') {
            let img = document.getElementById('imagem')
            img.src = 'img/crianca-homem.jpg'
        } 
        //mulher criança
        else if (idade < 15 && gen == 'mulher') {
            let img = document.getElementById('imagem')
            img.src = 'img/crianca-mulher.jpg'
        } 
        //homem jovem/adulto
        else if (idade < 40 && gen == 'homem') {
            let img = document.getElementById('imagem')
            img.src = 'img/jovem-homem.jpg'
        } 
        //mulher jovem/adulta
        else if (idade < 40 && gen == 'mulher') {
            let img = document.getElementById('imagem')
            img.src = 'img/jovem-mulher.jpg'
        } 
        //homem idoso
        else if (idade >= 40 && gen == 'homem') {
            let img = document.getElementById('imagem')
            img.src = 'img/homem-idoso.jpg'
        }
        //mulher idosa
         else {
            let img = document.getElementById('imagem')
            img.src = 'img/mulher-idosa.jpg'
        }
    }
}