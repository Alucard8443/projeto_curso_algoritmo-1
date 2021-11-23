var valor01, valor02, resultado, operacao

function acaoBotao(){
    valor01 = prompt("digite o primeiro valor:")
operacao = prompt("digite a operação : Ex: + , - , * , /")
valor02 = prompt ("digite o segundo valor")
    switch (operacao) {
        case "+":
            resultado = parseInt( valor01) + parseInt( valor02 )
            break;
        case "-":
            resultado = parseInt( valor01) - parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01) * parseInt( valor02 )
            break;
        case "/":
            resultado = parseInt( valor01) / parseInt( valor02 )
            break;
    }
        document.getElementById("paragrafo").innerText = resultado
}