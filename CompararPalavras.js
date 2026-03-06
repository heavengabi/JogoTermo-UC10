import



function compararPalavras(palavrasSorteio, palavrasChute) {

    for (let i = 0; i < palavrasSorteio.length; i++) {

        if (palavrasChute[i] === palavrasSorteio[i]) {
            console.log(palavrasChute[i] + " correta");
        }

        else if (palavrasSorteio.includes(palavrasChute[i])) {
            console.log(palavrasChute[i] + " existe mas em outra posição");
        }

        else {
            console.log(palavrasChute[i] + " não existe");
        }

    }

}

compararPalavras();