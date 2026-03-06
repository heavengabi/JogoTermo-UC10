import { palavrasSorteio } from "./dicionario";



function sortearPalavra()
{
    const indice = Math.floor(Math.random() * palavrasSorteio.length);
    return palavrasSorteio[indice];
}