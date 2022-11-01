const inputNotas = document.querySelectorAll('.radio')
const labelNotas = document.querySelectorAll('.nota')
const btnEnviar = document.getElementById('btn')

function redirecioarParaFeedback(){
    window.location = './feedback.html'
}

inputNotas.forEach((item, indice) => {
    item.addEventListener('click', () => {
        sessionStorage.setItem('dados', item.value)

        btnEnviar.addEventListener('click', () => {
            redirecioarParaFeedback()
        })
    })
})

labelNotas.forEach((item, indice, array) => {
    item.addEventListener('click', () => {
        labelNotas.forEach((item) => {
            item.classList.remove('selecionado')
            item.classList.add('padrao')
        })

        if(item.classList.contains('padrao')){
            item.classList.remove('padrao')
            item.classList.add('selecionado')
        }
    })

})