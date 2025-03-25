let setor = 'AD';
let  horasTrabalhadas = 230;
let valorHora = 9.50;
let nomeFuncionario = 'André Rosa de Matos';

let salario = 0;


if (setor === "GE"){
    salario = 220 * valorHora;
}
else{
    if(horasTrabalhadas > 220){
        let horasExecedentes = horasTrabalhadas - 220;
        salario = 220 * valorHora + (horasExecedentes * (valorHora *2));
    
    
    }else{
        salario = horasTrabalhadas * valorHora;
    }
    
}

switch(setor){
    
    case "AD":
        salario = salario + (salario / 100 *10)
        break;
    case "GE":
        salario = salario + (salario / 100 * 25)
        break
}

console.log(salario);