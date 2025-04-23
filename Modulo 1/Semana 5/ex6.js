/*Após o login no setor TI, cairemos em uma exibição de um campo para preenchimento e um botão.

O intuito é que no campo seja colocado um número qualquer e, ao pressionar o botão, seja feita a conversão para número binário e exibido para o usuário.*/

function verificarLogin() {
    const usuario = document.querySelector('#userID').value.trim();
    const senha = document.querySelector('input[name="password"]').value.trim();
    const setor = document.querySelector('select[name="setor"]').value;
    const divMensagemErro = document.querySelector('#mensagemErro');
    const divProduto = document.querySelector('#produto');
    const rhArea = document.querySelector('#rhArea');
    const tiArea = document.querySelector('#tiArea');

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
    tiArea.style.display = 'none';
    tiArea.innerHTML = '';

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

        if (setor === 'ti') {
            tiArea.style.display = 'block';
            tiArea.innerHTML = `
                <input type="number" id="numeroTI" placeholder="Digite um número">
                <button onclick="converterParaBinario()">Converter para Binário</button>
                <div id="resultadoBinario"></div>
            `;
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


function converterParaBinario() {
    const numero = document.querySelector('#numeroTI').value;
    const resultado = document.querySelector('#resultadoBinario');

    if (numero === '') {
        resultado.textContent = "Por favor, digite um número.";
        return;
    }

    const binario = parseInt(numero, 10).toString(2);
    resultado.textContent = `Binário: ${binario}`;
}
