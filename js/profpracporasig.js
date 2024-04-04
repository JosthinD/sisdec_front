let inactivityTimeout;

function resetInactivityTimeout() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        // Cerrar sesión o redirigir a la página de inicio de sesión
        window.location.href = 'index.html';
    }, 300000); // 5 minutos (300,000 ms)
}

// Iniciar el timeout de inactividad cuando se carga la página
resetInactivityTimeout();

// Eventos comunes que deberían resetear el timeout de inactividad
const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];

events.forEach(event => {
    document.addEventListener(event, resetInactivityTimeout);
});

const buttonvolver = document.getElementById('ButtonVolver');


buttonvolver.addEventListener('click', () => {
  window.location.href = 'welcomeprof.html';
});

document.addEventListener("DOMContentLoaded", function() {
    var datee = JSON.parse(sessionStorage.getItem('datee'));

    if (datee) {
        var tabladata = document.getElementById('tabladata');

        datee.forEach(function(data) {
            var row = tabladata.getElementsByTagName('tbody')[0].insertRow();
            row.insertCell(0).textContent = data.id;
            row.insertCell(1).textContent = data.programa;
            row.insertCell(2).textContent = data.director;
            row.insertCell(3).textContent = data.semestre;
            row.insertCell(4).textContent = data.nombrePractica;
            row.insertCell(5).textContent = data.numeroPractica;
            row.insertCell(6).textContent = data.lugar;
            row.insertCell(7).textContent = data.horas;
            row.insertCell(8).textContent = data.observaciones;
            row.insertCell(9).textContent = data.introduccion;
            row.insertCell(10).textContent = data.objetivoGeneral;
            row.insertCell(11).textContent = data.objetivosEspecificos;
            row.insertCell(12).textContent = data.evidenciasActividades;
            row.insertCell(13).textContent = data.objetosUsados;
            row.insertCell(14).textContent = data.resultadoAprendizaje;
            row.insertCell(15).textContent = data.evaluacionPractica;
            row.insertCell(16).textContent = data.idUsuario;
        });
    }

});