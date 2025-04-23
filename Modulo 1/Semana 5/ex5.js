/*Após o login no setor RH, deverá aparecer um botão com o nome “Ver cargos e salários”.

Ao clicar o botão, deverá aparecer uma tabela com os campos nome, setor, cargo e salario (preenchimento a sua escolha).*/

function verificarLogin() {
    const usuario = document.querySelector('#userID').value.trim();
    const senha = document.querySelector('input[name="password"]').value.trim();
    const setor = document.querySelector('select[name="setor"]').value;
    const divMensagemErro = document.querySelector('#mensagemErro');
    const divProduto = document.querySelector('#produto');
    const rhArea = document.querySelector('#rhArea');

    const credenciais = {
        comercial: { user: 'CMCL12', senha: 'Com&c1@l' },
        rh: { user: '98HR', senha: 'RH!@2025' },
        ti: { user: 'DEV4567TI', senha: 'IT&&||==2025' }
    };

  
    divMensagemErro.textContent = '';
    divProduto.style.display = 'none';
    divProduto.innerHTML = '';
    rhArea.style.display = 'none';
    rhArea.innerHTML = '';

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
                <img src="https://via.placeholder.com/200x150.png?text=Smartphone" alt="Produto: Smartphone">
                <h2>Smartphone Galaxy Z</h2>
                <p>R$ 3.499,00</p>
            `;
        }

        if (setor === 'rh') {
            rhArea.style.display = 'block';

           
            const botao = document.createElement('button');
            botao.textContent = "Ver cargos e salários";
            botao.onclick = mostrarTabelaRH;

           
            rhArea.appendChild(botao);
        }

    } else {
        divMensagemErro.textContent = "Usuário ou senha incorretos para o setor selecionado.";
    }
}

function mostrarTabelaRH() {
    const rhArea = document.querySelector('#rhArea');

   
    if (document.querySelector('#tabelaSalarios')) return;

    const tabelaHTML = `
        <table id="tabelaSalarios">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Setor</th>
                    <th>Cargo</th>
                    <th>Salário</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Maria Lima</td>
                    <td>RH</td>
                    <td>Analista de RH</td>
                    <td>R$ 4.200,00</td>
                </tr>
                <tr>
                    <td>João Silva</td>
                    <td>RH</td>
                    <td>Coordenador de RH</td>
                    <td>R$ 6.000,00</td>
                </tr>
                <tr>
                    <td>Ana Costa</td>
                    <td>RH</td>
                    <td>Assistente de RH</td>
                    <td>R$ 3.100,00</td>
                </tr>
            </tbody>
        </table>
    `;

   
    rhArea.innerHTML += tabelaHTML;
}
