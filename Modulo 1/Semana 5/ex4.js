/*Após o login no setor comercial, exibir uma imagem de um produto (a escolha) e será visualizado o nome do produto e valor (a sua escolha).*/

function verificarLogin() {
    const usuario = document.querySelector('#userID').value.trim();
    const senha = document.querySelector('input[name="password"]').value.trim();
    const setor = document.querySelector('select[name="setor"]').value;
    const divMensagemErro = document.querySelector('#mensagemErro');
    const divProduto = document.querySelector('#produto');

    const credenciais = {
        comercial: { user: 'CMCL12', senha: 'Com&c1@l' },
        rh: { user: '98HR', senha: 'RH!@2025' },
        ti: { user: 'DEV4567TI', senha: 'IT&&||==2025' }
    };

    
    divMensagemErro.textContent = '';
    divProduto.style.display = 'none';
    divProduto.innerHTML = '';

    if (!setor) {
        divMensagemErro.textContent = "Por favor, selecione um setor.";
        return;
    }

    const dadosSetor = credenciais[setor];

    if (usuario === dadosSetor.user && senha === dadosSetor.senha) {
        alert("Login bem-sucedido!");

        if (setor === 'comercial') {
            divProduto.style.display = 'block';
            divProduto.innerHTML = `
                <img src="https://m.media-amazon.com/images/I/41sbiIUaT0L._SR290,290_.jpg" alt="Produto: Smartphone">
                <h2>Smartphone Galaxy Z</h2>
                <p>R$ 3.499,00</p>
            `;
        }

    } else {
        divMensagemErro.textContent = "Usuário ou senha incorretos para o setor selecionado.";
    }
}
