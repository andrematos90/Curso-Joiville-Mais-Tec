/*Explique, descritivamente, o código que foi feito para a busca dos números pares e dos números primos.*/


/*função para contar numeros pares: 

A função recebe um número n, que define o limite da contagem. Ela começa com a variável pares igual a 0, que será usada para armazenar a quantidade de números pares encontrados. A contagem começa do número 1, já que o zero deve ser ignorado.

Utilizando um loop while, a função percorre todos os números de 1 até n. Para cada número i, ela verifica se é par, usando o operador módulo (%), ou seja, se i % 2 === 0. Se for, significa que i é divisível por 2, então incrementa o contador pares.

O valor de i é incrementado em cada repetição, e quando o loop termina (ou seja, quando i ultrapassa n), a função retorna o total armazenado em pares, que representa a quantidade de números pares entre 1 e n/*

/* função de numeros primos: 

A função recebe um número n e conta quantos números primos existem de 2 até n. Começa com a variável primos em 0.

O primeiro for percorre os números de 2 até n, pois o número 1 não é primo.

Para cada número i, a função assume que ele é primo (ehPrimo = true), e verifica se ele tem algum divisor entre 2 e a raiz quadrada de i (isso é uma forma de otimizar o processo).

Se encontrar um divisor (i % j === 0), define ehPrimo como false e interrompe o segundo for com break.

Se, após a verificação, ehPrimo ainda for true, incrementa o contador primos.

No final, retorna o total de números primos encontrados entre 2 e n.
*/

