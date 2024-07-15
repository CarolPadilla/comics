// URL de la API
const apiURL = 'https://mindicador.cl/api';

// Monedas soportadas y sus íconos
const monedas = [
    { id: 'dolar', nombre: 'Dólar', icono: 'fas fa-dollar-sign', color: 'text-primary' },
    { id: 'euro', nombre: 'Euro', icono: 'fas fa-euro-sign', color: 'text-info' },
    { id: 'uf', nombre: 'UF', icono: 'fas fa-money-bill-wave', color: 'text-success' },
    { id: 'utm', nombre: 'UTM', icono: 'fas fa-calculator', color: 'text-warning' },
    { id: 'ivp', nombre: 'IVP', icono: 'fas fa-percentage', color: 'text-secondary' },
    { id: 'dolar_intercambio', nombre: 'Dólar Intercambio', icono: 'fas fa-exchange-alt', color: 'text-danger' },
    { id: 'ipc', nombre: 'IPC', icono: 'fas fa-chart-line', color: 'text-dark' },
    { id: 'imacec', nombre: 'IMACEC', icono: 'fas fa-chart-pie', color: 'text-muted' },
    { id: 'tpm', nombre: 'TPM', icono: 'fas fa-university', color: 'text-primary' },
    { id: 'libra_cobre', nombre: 'Libra de Cobre', icono: 'fas fa-cubes', color: 'text-info' },
    { id: 'tasa_desempleo', nombre: 'Tasa de Desempleo', icono: 'fas fa-user-slash', color: 'text-danger' },
    { id: 'bitcoin', nombre: 'Bitcoin', icono: 'fab fa-bitcoin', color: 'text-warning' }
];

// Función para crear una tarjeta para una moneda
function crearTarjetaMoneda(moneda, valor) {
    return `
        <div class="card-wrapper">
            <div class="card text-center shadow-lg">
                <div class="card-body">
                    <i class="${moneda.icono} fa-3x mb-3 ${moneda.color}"></i>
                    <h5 class="card-title">${moneda.nombre}</h5>
                    <p class="card-text">Valor actual: <span id="${moneda.id}" class="fw-bold">${valor}</span></p>
                    <button class="btn btn-primary" onclick="actualizarValor('${moneda.id}')">Actualizar</button>
                </div>
            </div>
        </div>
    `;
}

// Función para obtener y mostrar los valores de todas las monedas
async function obtenerValores() {
    try {
        let response = await fetch(apiURL);
        let data = await response.json();
        let cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = '';

        monedas.forEach(moneda => {
            let valor = data[moneda.id] ? data[moneda.id].valor : 'No disponible';
            cardsContainer.innerHTML += crearTarjetaMoneda(moneda, valor);
        });

    } catch (error) {
        console.error('Error al obtener los valores:', error);
    }
}

// Función para actualizar el valor de una moneda específica
async function actualizarValor(monedaId) {
    try {
        let response = await fetch(apiURL);
        let data = await response.json();
        document.getElementById(monedaId).textContent = data[monedaId] ? data[monedaId].valor : 'No disponible';
    } catch (error) {
        console.error(`Error al actualizar el valor de ${monedaId}:`, error);
    }
}

// Llamar a la función para obtener y mostrar los valores al cargar la página
window.onload = obtenerValores;

