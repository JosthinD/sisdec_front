// Obtener el botón por su ID
const buttonvolver = document.getElementById('ButtonVolver');

// Agregar un event listener para escuchar el clic
buttonvolver.addEventListener('click', () => {
    // Redireccionar a soportec.html
  window.location.href = 'welcomedec.html';
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

document.addEventListener("DOMContentLoaded", function() {
    const btnConsultardata = document.getElementById('btnconsultar');
    const tabladataa = document.getElementById('tabladata').getElementsByTagName('tbody')[0];

    btnConsultardata.addEventListener('click', async () => {
        const usuario = document.getElementById('idusuario').value;

        const url = `${window.config.SERVER_URL}api/Documents/GetAllPlanAccionAcademicoPorUsuario?IdUsuario=${usuario}`;
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

                    tabladataa.innerHTML = '';

                    data.data.forEach(function(data) {
                        var row = tabladataa.insertRow();
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


