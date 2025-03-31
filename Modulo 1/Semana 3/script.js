let setor = 'AD';
let horasTrabalhadas = 230;
let valorHora = 9.50;
let nomeFuncionario = 'André Rosa de Matos';

function calcularSalarioBase(setor, horasTrabalhadas, valorHora) {
    let salario;

    if (setor === "GE") {
        salario = 220 * valorHora;
    } else {
        if (horasTrabalhadas > 220) {
            let horasExcedentes = horasTrabalhadas - 220;
            salario = 220 * valorHora + (horasExcedentes * (valorHora * 2));
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
