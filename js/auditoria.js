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
  window.location.href = 'welcomeadmin.html';
});


document.addEventListener("DOMContentLoaded", function() {
    var logs = JSON.parse(sessionStorage.getItem('logs'));

    if (logs) {
        var tablaLogs = document.getElementById('tablaLogs');

        logs.forEach(function(log) {
            var row = tablaLogs.getElementsByTagName('tbody')[0].insertRow();
            row.insertCell(0).textContent = log.id;
            row.insertCell(1).textContent = log.idAccion;
            row.insertCell(2).textContent = log.descripcion;
            row.insertCell(3).textContent = log.dateLog;
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const btnConsultarLogs = document.getElementById('btnconsultarlogs');
    const tablaLogs = document.getElementById('tablaLogs').getElementsByTagName('tbody')[0];

    btnConsultarLogs.addEventListener('click', async () => {
        const fecha = document.getElementById('fechalogs').value;
        const idAccion = document.getElementById('opcionesacciones').value;

        const url = `${window.config.SERVER_URL}api/Data/GetLogsByActionIdAndDate?idAccion=${idAccion}&fecha=${fecha}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.isSuccess) {

                    tablaLogs.innerHTML = '';

                    data.data.forEach(function(log) {
                        var row = tablaLogs.insertRow();
                        row.insertCell(0).textContent = log.id;
                        row.insertCell(1).textContent = log.idAccion;
                        row.insertCell(2).textContent = log.descripcion;
                        row.insertCell(3).textContent = new Date(log.dateLog).toLocaleString();
                    });

                } else {
                    console.error('Error en la respuesta del API:', data.message);
                }
            } else {
                alert("No se encuentran registros asociados a los datos ingresados.");
            }
        } catch (error) {
            console.error('Error al realizar la petición fetch:', error);
        }
    });
});

