/*Desenvolva uma função onde você receberá um número inteiro e, ela, lhe retornará quantos números primos existem até a chegada do número informado. Utilize a estrutura de repetição FOR.

Ex.: Informo 10 e o retorno será 4 (que é a quantidade de números primos (2, 3, 5 e 7).*/


let primos = 0;

function qtPrimos(n) {
    for (let i = 2; i <= n; i++) {
        let ehPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos++;
        }
    }
    return primos;
}


console.log(qtPrimos(10)); 
