//deixando placeholder no console do site
con = document.querySelector('div.console')
con.innerHTML = '<p style="color: gray;" >O resultado aparecerá aqui...</p>'

function gerarTabuada() {
    //limpando o console caso tenha algo escrito
    con.innerHTML = ''

    // pegando numero digitado
    let cxnum = document.getElementById('idnum')
    num = cxnum.value

    //digitando tabuada no "console"
    if(cxnum.value.length != 0){
        for (let i = 1; (i <= 10); i++) {
            con.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`
        }
    }else{
        alert('O numero deve ser preenchido!')
        con.innerHTML = '<p style="color: gray;" >O resultado aparecerá aqui...</p>'
    }

}