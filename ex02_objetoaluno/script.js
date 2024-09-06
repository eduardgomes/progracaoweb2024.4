document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btJson');
    const output = document.getElementById('jsonOutput');

    button.addEventListener('click', function() {
        const mat = document.getElementById('inputMat').value;
        const nome = document.getElementById('inputNome').value;
        const idade = document.getElementById('inputIdade').value;
        const cpf = document.getElementById('inputCpf').value;

        if (!mat || !nome || !idade || !cpf) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Valida se a idade é um valor inteiro
        if (!Number.isInteger(parseFloat(idade))) {
            alert('A idade deve ser um número inteiro.');
            return;
        }

        const aluno = {
            Mat: mat,
            Nome: nome,
            Idade: parseInt(idade, 10),
            CPF: cpf
        };

        output.textContent = JSON.stringify(aluno, null, 2);
    });
});
