/**
 * PROYECTO: Calculadora Fitness
 * Descripción: Manejo de IMC, Galería y Formulario.
 */

// --- CALCULADORA IMC ---
const btnCalcular = document.getElementById('btn-calcular');

btnCalcular.addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const resultadoTexto = document.getElementById('resultado-imc');

    if (peso > 0 && alturaCm > 0) {
        const alturaM = alturaCm / 100;
        const imc = (peso / (alturaM * alturaM)).toFixed(2);
        
        let categoria = "";
        let color = "";

        // Determinamos la categoría según el resultado
        if (imc < 18.5) {
            categoria = "Bajo peso";
            color = "orange";
        } else if (imc < 24.9) {
            categoria = "Peso Normal";
            color = "green";
        } else {
            categoria = "Sobrepeso";
            color = "red";
        }

        resultadoTexto.innerHTML = `Tu IMC es <strong>${imc}</strong> (${categoria})`;
        resultadoTexto.style.color = color;
    } else {
        alert("Por favor, completa los datos correctamente.");
    }
});

// --- GALERÍA DE PLANES DE EJERCICIOS ---
const imagenes = document.querySelectorAll('.img-rutina');
const modal = document.getElementById('visor-modal');
const imgModal = document.getElementById('img-modal-contenido');
const btnCerrar = document.getElementById('cerrar-modal');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        modal.style.display = 'flex';
        const rutaPlan = this.getAttribute('data-plan'); 
        imgModal.src = rutaPlan; 
    });
});

// Cerrar modal (se mantiene igual)
btnCerrar.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.style.display = 'none';
});

// --- FORMULARIO ---
document.getElementById('gym-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    const nombre = document.getElementById('nombre').value;
    alert(`¡Hola ${nombre}! Tu solicitud ha sido enviada correctamente.`);
    this.reset(); // Limpia el formulario
});

// --- DESCRIPCIONES DEL MENÚ ---
const enlacesMenu = document.querySelectorAll('.nav-links a');
const modalDesc = document.getElementById('modal-descripcion');
const textoDesc = document.getElementById('texto-descripcion');
const btnCerrarDesc = document.getElementById('cerrar-descripcion');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        // Se evita que salte directamente a la sección para poder leer la info
        event.preventDefault(); 
        
        const info = this.getAttribute('data-info');
        const destino = this.getAttribute('href'); // Se guarda a dónde quería ir el usuario

        textoDesc.innerText = info;
        modalDesc.style.display = 'flex';
    });
});

// Cerrar la descripción
btnCerrarDesc.addEventListener('click', () => {
    modalDesc.style.display = 'none';
});

// También cerrar si se hace clic fuera del cuadro blanco
window.addEventListener('click', (e) => {
    if (e.target === modalDesc) {
        modalDesc.style.display = 'none';
    }
});