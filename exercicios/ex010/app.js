//Horas
let agora = new Date()
let texto = document.getElementById('texto')

let hora = agora.getHours()

function carregar(){
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    texto.innerHTML = `<p>Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos!</p>`

    let botao = document.querySelector('main > button')
    botao.addEventListener('click', atualizar)

    function atualizar() {
        location.reload()
    }
}

//mudando imagem e cor do fundo
let imagem = document.getElementById('imagem')
let body = document.body

if (hora >= 0 && hora < 12) {
    imagem.innerHTML = '<img src="imagens/amanhecer.jpg" alt="foto amanhecer">'
    body.style.backgroundColor = 'rgb(219, 159, 100);'
} else if (hora >= 12 && hora <= 18) {
    imagem.innerHTML = '<img src="imagens/entardecer.jpg" alt="foto entardecer">'
    body.style.backgroundColor = 'rgb(255, 112, 103)'
}else{
    imagem.innerHTML = '<img src="imagens/anoitecer.jpg" alt="foto entardecer">'
    body.style.backgroundColor = 'rgb(3, 3, 20)'
}