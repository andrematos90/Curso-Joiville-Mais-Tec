/*Desenvolva uma função onde você receberá um número inteiro e, ela, lhe retornará quantos números impares existem até a chegada do número informado. Utilize a estrutura de repetição de sua preferência.

Ex.: Informo 10 e o retorno será 5 (que é a quantidade de números primos (1, 3, 5, 7 e 9).*/

function contaImpares(n) {
    let impares = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            impares++;
        }
    }

    return impares;
}


console.log(contaImpares(3));
