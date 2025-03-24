let setor = 'Desenvolvimento';
let  horasTrabalhadas = 230;
let valorHora = 9.50;
let nomeFuncionario = 'André Rosa de Matos';

let salario = 0;

if(horasTrabalhadas > 220){
    let horasExecedentes = horasTrabalhadas - 220;
    salario = 220 * valorHora + (horasExecedentes * (valorHora *2));


}else{
    salario = horasTrabalhadas * valorHora;
}

console.log(salario);