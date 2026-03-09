

function compararPalavras(chute, secreta) {
    // PASSO 1: Transformar strings em arrays
    const chuteArray = chute.split('');
    const secretaArray = secreta.split('');
    let resultado = new Array(5);
    
    // PASSO 2: Marcar VERDES (✅) - letra certa no lugar certo
    for (let i = 0; i < 5; i++) {
        if (chuteArray[i] === secretaArray[i]) {
            resultado[i] = '✅';
            secretaArray[i] = null; // Marca como usada (resolve letras repetidas)
        }
    }
    
    // PASSO 3: Marcar AMARELOS (⚠) e CINZAS (⬛)
    for (let i = 0; i < 5; i++) {
        // Pula se já é verde
        if (resultado[i] === '✅') continue;
        
        // Procura a letra no resto da palavra secreta
        const indexNaSecreta = secretaArray.indexOf(chuteArray[i]);
        
        if (indexNaSecreta !== -1) {
            resultado[i] = '⚠'; // Achou! É amarelo (⚠)
            secretaArray[indexNaSecreta] = null; // Marca como usada
        } else {
            resultado[i] = '⬛'; // Não achou! É cinza
        }
    }
    
    
    return resultado.join(' ');
}

module.exports = { compararPalavras }