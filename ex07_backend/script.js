const APP_ID = 'BHvRpEjGnNVp6lppiQbUi7jpX1l3HQYo1LmVTozC'; 
    const API_KEY = 'h0WfC7F5nzAWIQQxNwbFwgfxmzHRv2vJu5fvewkn'; 
    const BASE_URL = 'https://parseapi.back4app.com/classes/Despesa';
    
    const headers = {
      'X-Parse-Application-Id': BHvRpEjGnNVp6lppiQbUi7jpX1l3HQYo1LmVTozC ,
      'X-Parse-REST-API-Key': h0WfC7F5nzAWIQQxNwbFwgfxmzHRv2vJu5fvewkn,
      'Content-Type': 'application/json',
    };

    const formDespesa = document.getElementById('form-despesa');
    const despesasLista = document.getElementById('despesas-lista');
    const totalDespesas = document.getElementById('total-despesas');


    async function carregarDespesas() {
      const response = await fetch(BASE_URL, { headers });
      const data = await response.json();
      listarDespesas(data.results);
    }

    function listarDespesas(despesas) {
      despesasLista.innerHTML = '';
      let total = 0;

      despesas.forEach(despesa => {
        total += despesa.valor;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${despesa.descricao}</td>
          <td>R$ ${despesa.valor.toFixed(2)}</td>
          <td>
            <button onclick="atualizarValor('${despesa.objectId}', ${despesa.valor})">Atualizar Valor</button>
            <button onclick="deletarDespesa('${despesa.objectId}')">Deletar</button>
          </td>
        `;
        despesasLista.appendChild(row);
      });

      totalDespesas.textContent = `R$ ${total.toFixed(2)}`;
    }

    formDespesa.addEventListener('submit', async (e) => {
      e.preventDefault();
      const descricao = document.getElementById('descricao').value;
      const valor = parseFloat(document.getElementById('valor').value);

      if (!descricao || isNaN(valor)) return;

      const despesa = { descricao, valor };

      await fetch(BASE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(despesa),
      });

      formDespesa.reset();
      carregarDespesas();
    });

    async function atualizarValor(objectId, valorAtual) {
      const novoValor = prompt('Digite o novo valor:', valorAtual);

      if (novoValor !== null && !isNaN(parseFloat(novoValor))) {
        await fetch(`${BASE_URL}/${objectId}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({ valor: parseFloat(novoValor) }),
        });
        carregarDespesas();
      }
    }

    async function deletarDespesa(objectId) {
      await fetch(`${BASE_URL}/${objectId}`, {
        method: 'DELETE',
        headers,
      });
      carregarDespesas();
    }

    carregarDespesas();