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

document.addEventListener("DOMContentLoaded", function() {
    const btnConsultardata = document.getElementById('btnconsultar');
    const tabladataa = document.getElementById('tabladata').getElementsByTagName('tbody')[0];

    btnConsultardata.addEventListener('click', async () => {
        const usuario = document.getElementById('idusuario').value;

        const url = `${window.config.SERVER_URL}api/Documents/GetAllPracticaPorAsignaturaPorUsuario?IdUsuario=${usuario}`;
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


var modal = document.getElementById("myModal");
var btn = document.getElementById("btnactualizar");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const buttonactuinfo = document.getElementById('btnactualizarinfo');

buttonactuinfo.addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const programa = document.getElementById('idprograma').value;
    const director = document.getElementById('iddirector').value;
    const semestre = document.getElementById('idsemestre').value;
    const nombrePractica = document.getElementById('idnombrePractica').value;
    const numeroPractica = document.getElementById('idnumeroPractica').value;
    const lugar = document.getElementById('idlugar').value;
    const horas = document.getElementById('idhoras').value;
    const observaciones = document.getElementById('idobservaciones').value;
    const introduccion = document.getElementById('idintroduccion').value;
    const objetivoGeneral = document.getElementById('idobjetivoGeneral').value;
    const objetivosEspecificos = document.getElementById('idobjetivosEspecificos').value;
    const evidenciasActividades = document.getElementById('idevidenciasActividades').value;
    const objetosUsados = document.getElementById('idobjetosUsados').value;
    const resultadoAprendizaje = document.getElementById('idresultadoAprendizaje').value;
    const evaluacionPractica = document.getElementById('idevaluacionPractica').value;
    const idUsuario = document.getElementById('idUsuario').value;
  
    // Validar que todos los campos estén llenos
    if (!id || !programa || !director || !semestre || !nombrePractica || !numeroPractica || !lugar || !horas || !observaciones || !introduccion || !objetivoGeneral || !objetivosEspecificos || !evidenciasActividades || !objetosUsados || !resultadoAprendizaje ||!evaluacionPractica || !idUsuario) {
      alert('Por favor, completa todos los campos.');
      return; // Detener la ejecución del código
    }
  
    // Si todos los campos están llenos, continuar con el código de la solicitud fetch
    fetch(`${window.config.SERVER_URL}api/Documents/ActualizarPracticaPorAsignatura`, {
        method: 'PUT',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": id,
          "programa": programa,
          "director": director,
          "semestre": semestre,
          "nombrePractica": nombrePractica,
          "numeroPractica": numeroPractica,
          "lugar": lugar,
          "horas": horas,
          "observaciones": observaciones,
          "introduccion": introduccion,
          "objetivoGeneral": objetivoGeneral,
          "objetivosEspecificos": objetivosEspecificos,
          "evidenciasActividades": evidenciasActividades,
          "objetosUsados": objetosUsados,
          "resultadoAprendizaje": resultadoAprendizaje,
          "evaluacionPractica": evaluacionPractica,
          "idUsuario": idUsuario
        })
      })
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((result) => {
        alert(result.message); // Mostrar la respuesta en una alerta
        console.log
    })
    .catch((error) => console.error(error));
  });
  



