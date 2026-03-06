import { palavrasChute } from "./dicionario";


export function validarPalpite(palpite) 
{
    if(palpite.length !== 5) 
    {
        return false;

    }

    if(!/^[a-zA-Z]+$/.test(palpite))
   {

    console.log("Use apenas letras.")
    return false;

   }

   if(!palavrasChute.includes(palpite))
   {
    console.log("A palavra não existe no dicionário.")
    return false;
   }

   return true;
}