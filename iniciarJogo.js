const escolherPalavraSecreta = require("./escolherPalavraSecreta.js")
const validarPalpite = require("./validarPalpite.js")
const compararPalavras = require("./CompararPalavras.js")
const rl = require('readline-sync');
//isso ai sao as importacoes pra essa funcao funcionar


function iniciarJogo() {

    console.log("Iniciando o jogo")

    const palavraSecreta = escolherPalavraSecreta()
    let tentativas = 0 // isso aqui é pra iniciar o jogo com 0 tentativas
    let acertou = false
    const historico = [] //esse array ele guarda todoas as tentativas do jogador, por isso começa vazio
    while (tentativas < 6 && !acertou) {
        console.log(`Tentativa: ${tentativas + 1} /6`) // aqui ele mostra o numero de tentativas 
        let palpite = rl.question("Digite uma palavra.").toLowerCase // pra digitar a palavra e se escrever em capslock ela vira caixa baixa😺
        if (!validarPalpite(validarPalpite)) {
            console.log("Palpite inválido. Tente novamente.")
            continue // volta pro começo

        }

        const resultado = compararPalavras(palpite, palavraSecreta)
        historico.push({ palpite, resultado })  // .push guarda palpite e o resultado
        console.log("/n Seus chutes: ")
        historico.forEach((item, i) => {
            console.log(`${i + 1}. ${item.palpite} ${item.resultado}`) //pega as palavras digitadas e o resultado kk
        })


        if (palpite === palavraSecreta) {
            acertou = true // aqui muda o status do cara, la no começo tava falso ai acertou e ficou true 😺
            console.log(`Parabéns!! você acertou a palavra secreta: ${palavraSecreta}`)
            console.log("Fim do jogo!")

        }
        console.log("")
        tentativas++
    }

    if (!acertou) 
    {
        console.log(`Suas tentativas acabaram. A palvra era ${palavraSecreta}`)
    }


}
module.exports = { iniciarJogo }