/*Desenvolva uma função onde você receberá um número inteiro e, ela, lhe retornará quantos números pares existem até a chegada do número informado. Utilize a estrutura de repetição DO WHILE/WHILE (exclua o número 0 da conta).

Ex.: Informo 10 e o retorno será 5 (que é a quantidade de números primos (2, 4, 6, 8 e 10).*/


function contarPares(n) {
    let contador = 1;
    let pares = 0;

    while (contador <= n) {
        if (contador % 2 === 0) {
            pares++;
        }
        contador++;
    }

    return pares;
}


console.log(contarPares(10)); 
