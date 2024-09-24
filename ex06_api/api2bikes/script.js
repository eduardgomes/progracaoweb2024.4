async function getStations() {
    const stationContainer = document.getElementById('stations');
    stationContainer.innerHTML = 'Carregando estações...';

    // Dados simulados - você pode substituir por uma chamada real ao seu back-end.
    const simulatedData = [
        { name: "Estação Central", bikes: 10, free_slots: 5 },
        { name: "Estação Norte", bikes: 8, free_slots: 7 },
        { name: "Estação Sul", bikes: 12, free_slots: 3 },
    ];

    // Simulação de um atraso na resposta para dar a sensação de uma requisição real.
    setTimeout(() => {
        stationContainer.innerHTML = `
            <ul>
                ${simulatedData.map(station => `
                    <li>
                        <strong>${station.name}</strong><br>
                        Bicicletas disponíveis: ${station.bikes}<br>
                        Vagas livres: ${station.free_slots}
                    </li>
                `).join('')}
            </ul>
        `;
    }, 1000);
}