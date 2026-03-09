// cria um menu para um jogo de termo game direto no terminal node js 
const rl = require('readline-sync');
const {iniciarJogo} = require ("./iniciarJogo.js")

function criarMenu() {
       // Cria o elemento do men
    opcao = 0;
    console.log("\n==============================")
    console.log("Bem-vindo ao Termo Game!");
    console.log("\n1. Jogar");
    console.log("2. instruções");
    console.log("3. sair");
    console.log("==============================")
    
    var opcao = parseInt(rl.question("\nEscolha uma opcao: "));
    while(opcao !== 3){
        if(opcao === 1) {
            iniciarJogo();
            return;
        }else if(opcao === 2) {
            console.clear();
            console.log("Instruções do Termo Game:");
            console.log("Para jogar, você precisa adivinhar a palavra secreta em 6 tentativas. \nCada tentativa deve ser uma palavra de 5 letras. \nApós cada tentativa, você receberá feedback sobre quais letras estão corretas e em suas posições corretas. Boa sorte!");
            console.log("\n1. Jogar");
            console.log("3. sair");
            opcao = parseInt(rl.question("\nEscolha uma opcao: "));
        }else if(opcao === 3) { 
            console.log("\nSaindo do jogo. Até a próxima!");
            return;
        }else{
            console.log("\nOpção inválida. Por favor, escolha uma opção válida.");
            console.clear();
            return criarMenu();
        } 
    

}
}

criarMenu();