let inactivityTimeout;

function resetInactivityTimeout() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        // Cerrar sesión o redirigir a la página de inicio de sesión
        window.location.href = 'index.html';
    }, 300000); // 5 minutos (300,000 ms)
}


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
            row.insertCell(2).textContent = data.fecha;
            row.insertCell(3).textContent = data.director;
            row.insertCell(4).textContent = data.fechaDos;
            row.insertCell(5).textContent = data.actividad;
            row.insertCell(6).textContent = data.descripcion;
            row.insertCell(7).textContent = data.duracion;
            row.insertCell(8).textContent = data.lugar;
            row.insertCell(9).textContent = data.horaInicio;
            row.insertCell(10).textContent = data.horaFin;
            row.insertCell(11).textContent = data.responsable;
            row.insertCell(12).textContent = data.participantes;
            row.insertCell(13).textContent = data.evidencias;
            row.insertCell(14).textContent = data.idUsuario;
        });
    }

});