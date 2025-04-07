/*Crie um menu para executar os exercícios feitos anteriormente. As opções do menu serão as seguintes:

[1] Somar dois números;

[2] Subtrair dois números;

[3] Buscar quantidade números pares;

[4] Buscar quantidade números impares;

[5] Buscar quantidade números primos;

[6] Sair.*/



function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function contarPares(n) {
    let pares = 0;
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            pares++;
        }
        i++;
    }
    return pares;
}

function contarImpares(n) {
    let impares = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            impares++;
        }
    }
    return impares;
}

function contarPrimos(n) {
    let primos = 0;
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

let opcao;

do {
    opcao = parseInt(prompt(
        `[1] Somar dois números\n` +
        `[2] Subtrair dois números\n` +
        `[3] Buscar quantidade de números pares\n` +
        `[4] Buscar quantidade de números ímpares\n` +
        `[5] Buscar quantidade de números primos\n` +
        `[6] Sair`
    ));

    switch(opcao) {
        case 1:
            let a1 = parseInt(prompt("Digite o primeiro número:"));
            let b1 = parseInt(prompt("Digite o segundo número:"));
            alert(`Resultado da soma: ${soma(a1, b1)}`);
            break;
        case 2:
            let a2 = parseInt(prompt("Digite o primeiro número:"));
            let b2 = parseInt(prompt("Digite o segundo número:"));
            alert(`Resultado da subtração: ${subtrai(a2, b2)}`);
            break;
        case 3:
            let numPar = parseInt(prompt("Digite um número inteiro:"));
            alert(`Quantidade de números pares até ${numPar}: ${contarPares(numPar)}`);
            break;
        case 4:
            let numImpar = parseInt(prompt("Digite um número inteiro:"));
            alert(`Quantidade de números ímpares até ${numImpar}: ${contarImpares(numImpar)}`);
            break;
        case 5:
            let numPrimo = parseInt(prompt("Digite um número inteiro:"));
            alert(`Quantidade de números primos até ${numPrimo}: ${contarPrimos(numPrimo)}`);
            break;
        case 6:
            alert("Saindo do programa...");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }
} while (opcao !== 6);
