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
          row.insertCell(3).textContent = data.modulo;
          row.insertCell(4).textContent = data.fecha;
          row.insertCell(5).textContent = data.hora;
          row.insertCell(6).textContent = data.semestre;
          row.insertCell(7).textContent = data.grupo;
          row.insertCell(8).textContent = data.jornada;
          row.insertCell(9).textContent = data.motivo;
          row.insertCell(10).textContent = data.observaciones;
          row.insertCell(11).textContent = data.aprobacionEstudiante;
          row.insertCell(12).textContent = data.idUsuario;
      });
  }

});