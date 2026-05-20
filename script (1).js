// script.js

// ==========================================
// Ejercicio 1: Simulador de Transferencia de Calor
// ==========================================
function calcularCalor(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Captura estricta de datos
    const t0 = parseFloat(document.getElementById('t0').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t').value);

    // Ecuación de enfriamiento: T = Ts + (T0 - Ts) * e^(-k*t)
    const exponente = -k * t;
    const temperaturaFinal = ts + (t0 - ts) * Math.exp(exponente);
    
    // Redondeo al entero más cercano
    const temperaturaRedondeada = Math.round(temperaturaFinal);

    // Renderizado dinámico
    const divResultado = document.getElementById('resultado-calor');
    divResultado.classList.remove('error');
    divResultado.style.display = 'block';
    divResultado.innerHTML = `La temperatura final del objeto es: <strong>${temperaturaRedondeada}°</strong> (Valor exacto: ${temperaturaFinal.toFixed(4)}°)`;
}

// ==========================================
// Ejercicio 2: Calculador de Combinaciones Complejas
// ==========================================

// Función propia para calcular el factorial iterativamente sin librerías
function factorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Implementación de la Fórmula General de Combinaciones: C(n,r) = n! / (r! * (n-r)!)
function calcularCombinacion(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function calcularCombinaciones(event) {
    event.preventDefault();

    // Captura de datos de los dos grupos
    const n1 = parseInt(document.getElementById('n1').value, 10);
    const r1 = parseInt(document.getElementById('r1').value, 10);
    const n2 = parseInt(document.getElementById('n2').value, 10);
    const r2 = parseInt(document.getElementById('r2').value, 10);

    const divResultado = document.getElementById('resultado-combinaciones');

    // Validación lógica estricta: r no puede ser mayor que n
    if (r1 > n1 || r2 > n2) {
        divResultado.classList.add('error');
        divResultado.style.display = 'block';
        divResultado.innerHTML = '<strong>Error de validación:</strong> El número de elementos a seleccionar (r) no puede ser mayor al total de elementos disponibles (n).';
        return;
    }

    // Procesamiento matemático
    const combinacionesG1 = calcularCombinacion(n1, r1);
    const combinacionesG2 = calcularCombinacion(n2, r2);
    
    // Producto total de ambos grupos
    const totalPosibilidades = combinacionesG1 * combinacionesG2;

    // Renderizado y formateo (.toLocaleString() añade separadores de miles para mayor legibilidad)
    divResultado.classList.remove('error');
    divResultado.style.display = 'block';
    divResultado.innerHTML = `
        Combinaciones del Grupo 1 (C<sub>${n1},${r1}</sub>): ${combinacionesG1.toLocaleString()}<br>
        Combinaciones del Grupo 2 (C<sub>${n2},${r2}</sub>): ${combinacionesG2.toLocaleString()}<br>
        <br>
        <strong>Total general de combinaciones posibles: ${totalPosibilidades.toLocaleString()}</strong>
    `;
}