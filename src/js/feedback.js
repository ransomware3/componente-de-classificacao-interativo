let notaEscolhida = sessionStorage.getItem('dados')
const feedbackNota = document.querySelector('.feedback-nota-escolhida')

console.log(notaEscolhida)

feedbackNota.innerHTML = "You selected " + notaEscolhida + " out of 5"