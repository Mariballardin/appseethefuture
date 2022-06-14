//  variáveis
//  dados de entrada
//  dados de saída

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
 const respostas = [
       "Certeza!",
    "Pergunta amanhã de novo? Preciso      pensar um pouco mais.",
     "ahaha você é hilááário!",
     "Melhor não saber, honestamente.",     "Nossa! Eu também queria saber. Se descobrir me conta.",
     "Pergunte novamente mais tarde.",

  "Sim, com certeza",
           "Minha resposta é não.",
           "Melhor não te dizer agora.",
           "Depende muito do ponto de vista.",
           "Minhas fontes dizem não.",
          "Provavelmente.",
           "Acho chato.",
           "Não é possível prever agora.",
     "Perspectiva boa.",
     "Whaaaaat?",
      "Não entendi.",     "Sim.",
        "kkk tá de sacanagem?!",
     "Achei boba essa pergunta.",
     "Nem vou comentar, jovem.",
     "Companheiro, pare de pensar essas besteiras.",
     "Se chover amanhã, a resposta é sim!",
  ]

 function fazerPergunta(){

  if (inputPergunta.value == "") {

    alert("Faz a pergunta primeiro.. eu sou médium mas nem tanto!")
    return 
    // toda a função que encontra o return ela para imediatamente

  }

    buttonPerguntar.setAttribute("disable",true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  // gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  setTimeout(function() {
    elementoResposta.style.opacity=0
  }, 3000) 
 }
 
//  não entendi como funciona esse comando aí de cima. Não consegui fazer. o total é 23 respostas


//  sumir a resposta depois de 3 segundos
// função pode ficar dentro de Array, objetos, pode ser parâmetro de outra função, pode ficar dentro de uma variável..
// 3000ms é igual a 3 segundos

 
//  const totalRespostas = respostas.length
//  console.log(respostas[totalRespostas])
//  não entendi como funciona esse comando aí de cima. Não consegui fazer. o total é 23 respostas
