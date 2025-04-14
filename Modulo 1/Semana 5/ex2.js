/*Utilizando JavaScript, verifique se a senha corresponde as seguintes senhas predefinidas de acesso:

Comercia = CMCL12 (Usuário) / Com&c1@l;

RH = 98HR (Usuário) / RH!@2025 ;

TI = DEV4567TI (Usuário) / IT&&||==2025.*/

function verificarLogin() {
    const usuario = document.querySelector('#userID').value.trim();
    const senha = document.querySelector('input[name="password"]').value.trim();
    const setor = document.querySelector('select[name="setor"]').value;

    const credenciais = {
        comercial: { user: 'CMCL12', senha: 'Com&c1@l' },
        rh: { user: '98HR', senha: 'RH!@2025' },
        ti: { user: 'DEV4567TI', senha: 'IT&&||==2025' }
    };

    if (!setor) {
        alert("Por favor, selecione um setor.");
        return;
    }

    const dadosSetor = credenciais[setor];

    if (usuario === dadosSetor.user && senha === dadosSetor.senha) {
        alert("Login bem-sucedido!");
        
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
