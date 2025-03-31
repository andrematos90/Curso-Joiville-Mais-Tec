let setor = 'AD';
let horasTrabalhadas = 230;
let valorHora = 9.50;
let nomeFuncionario = 'André Rosa de Matos';
let horasExtras= 0;
let salario;

function calcularSalarioBase(setor, horasTrabalhadas, valorHora) {
   
    if (setor === "GE") {
        salario = 220 * valorHora;
    } else {
        if (horasTrabalhadas > 220) {
             horasExtras = horasTrabalhadas - 220;
            salario = 220 * valorHora + (horasExtras * (valorHora * 2));
        } else {
            salario = horasTrabalhadas * valorHora;
        }
    }

    switch (setor) {
        case "AD":
            salario += salario * 0.10; 
            break;
        case "GE":
            salario += salario * 0.25; 
    }

    return salario; 
}

function buscarValorHora(salarioBase, horasTrabalhadas) {
    return salarioBase / horasTrabalhadas;
}


let salarioBase = calcularSalarioBase(setor, horasTrabalhadas, valorHora);
let valorPorHora = buscarValorHora(salarioBase, horasTrabalhadas);

console.log("Salário Base:", salarioBase);
console.log("Valor por Hora:", valorPorHora);


console.log(`O funcionário, do setor ${setor}, ${nomeFuncionario} teve ${horasTrabalhadas} horas trabalhadas e ${horasExtras} horas extras. Seu salário mensal foi de R$ ${salario}`)
