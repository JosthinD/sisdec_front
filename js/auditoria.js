// Obtener el botón por su ID
const buttonvolver = document.getElementById('ButtonVolver');

// Agregar un event listener para escuchar el clic
buttonvolver.addEventListener('click', () => {
    // Redireccionar a soportec.html
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
                    // Limpiar tabla
                    tablaLogs.innerHTML = '';
                    // Llenar tabla con los nuevos datos
                    data.data.forEach(function(log) {
                        var row = tablaLogs.insertRow();
                        row.insertCell(0).textContent = log.id;
                        row.insertCell(1).textContent = log.idAccion;
                        row.insertCell(2).textContent = log.descripcion;
                        row.insertCell(3).textContent = new Date(log.dateLog).toLocaleString();
                    });
                    // Mostrar alerta con la respuesta del API
                    //alert(JSON.stringify(data));
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

