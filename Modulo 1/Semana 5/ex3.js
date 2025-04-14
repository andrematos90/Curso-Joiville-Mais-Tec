/*Caso a senha seja incorreta, deverá aparecer uma mensagem (dentro de uma div), em vermelho, indicando que o usuário ou a senha estão erradas para o setor escolhido.*/

function verificarLogin() {
    const usuario = document.querySelector('#userID').value.trim();
    const senha = document.querySelector('input[name="password"]').value.trim();
    const setor = document.querySelector('select[name="setor"]').value;
    const divMensagemErro = document.querySelector('#mensagemErro');

    const credenciais = {
        comercial: { user: 'CMCL12', senha: 'Com&c1@l' },
        rh: { user: '98HR', senha: 'RH!@2025' },
        ti: { user: 'DEV4567TI', senha: 'IT&&||==2025' }
    };

    // Limpa a mensagem anterior
    divMensagemErro.textContent = '';

    if (!setor) {
        divMensagemErro.textContent = "Por favor, selecione um setor.";
        return;
    }

    const dadosSetor = credenciais[setor];

    if (usuario === dadosSetor.user && senha === dadosSetor.senha) {
        alert("Login bem-sucedido!");
    } else {
        divMensagemErro.textContent = "Usuário ou senha incorretos para o setor selecionado.";
    }
}
