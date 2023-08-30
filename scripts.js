const botao = document.querySelector(".tema")
const corpinho = document.querySelector("body")

botao.addEventListener('click', function(){
    corpinho.classList.toggle("escuro")
    botao.classList.toggle('escurinho')
})
