const { palavrasSorteio, palavrasChute } = require("./dicionario.js")

function compararPalavras() {
    const chuteArray = chute.split('')
    // esse split divide uma string em parte e retorna um array
    //  tipo a palavra gato, ele retorna g,a,t,o
    const secretaArray = secreta.split('')
    let resultado = new Array(5)

    for (let i = 0; i < 5; i++) {
        if (chuteArray[i] === secretaArray[i]) {
            resultado[i] = "✅"
            secretaArray[i] = null //esse null marca as letras que ja foram usadas
        }
    }
    for (let i = 0; i < 5; i++) 
    {
        if (resultado === "✅") continue // esse continue só continua mesmo, dependendo do for🙏
    }

    const indexSecreta = secretaArray.indexOf(chuteArray[i])
    if (indexSecreta !== -1) {
        resultado[i] = "⚠"
        secretaArray[indexSecreta] = null
    } else {
        resultado[i] = "⬛"
    }
    return resultado.join(' ') //esse join pega um array e junta numa string colocando espaco, o que ra g,a,t,o vira g a t o. coisa de maluco.
}

module.exports = { compararPalavras }