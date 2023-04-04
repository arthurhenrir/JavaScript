window.onload = () => {
    console.log("teste")
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click

    function valorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const tipoOperacao = valorInput('tipoOperacao')
        const valor1 = valorInput('valor1')
        const valor2 = valorInput('valor2')
        const resultado = Matematica[tipoOperacao](Number(valor1), Number(valor2))
        console.log('O resultado é:', resultado)
        document.getElementById('resultado')
            .innerText = `A operação de ${tipoOperacao} entre ${valor1} e ${valor2} é ${resultado}`
    }
}
