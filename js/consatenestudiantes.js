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


document.addEventListener("DOMContentLoaded", function() {
  const btnConsultardata = document.getElementById('btnconsultar');
  const tabladataa = document.getElementById('tabladata').getElementsByTagName('tbody')[0];

  btnConsultardata.addEventListener('click', async () => {
      const usuario = document.getElementById('idusuario').value;

      const url = `${window.config.SERVER_URL}api/Documents/GetAllAtencionEstudiantesPorUsuario?IdUsuario=${usuario}`;
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
    const modulo = document.getElementById('idmodulo').value;
    const fecha = document.getElementById('idfecha').value;
    const estudiantes = document.getElementById('idestudiantes').value;
    const semestre = document.getElementById('idsemestre').value;
    const grupo = document.getElementById('idgrupo').value;
    const jornada = document.getElementById('idjornada').value;
    const motivo = document.getElementById('idmotivo').value;
    const observaciones = document.getElementById('idobservaciones').value;
    const aprobacionEstudiante = document.getElementById('idaprobacionEstudiante').value;
    const idUsuario = document.getElementById('idUsuario').value;
  
    // Validar que todos los campos estén llenos
    if (!id || !programa || !director || !modulo || !fecha || !estudiantes || !semestre || !grupo || !jornada || !motivo || !observaciones || !aprobacionEstudiante || !idUsuario) {
      alert('Por favor, completa todos los campos.');
      return; // Detener la ejecución del código
    }
  
    // Si todos los campos están llenos, continuar con el código de la solicitud fetch
    fetch(`${window.config.SERVER_URL}api/Documents/ActualizarAtencionEstudiantes`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({
          "id": id,
          "programa": programa,
          "director": director,
          "modulo": modulo,
          "fecha": fecha,
          "hora": estudiantes,
          "semestre": semestre,
          "grupo": grupo,
          "jornada": jornada,
          "motivo": motivo,
          "observaciones": observaciones,
          "aprobacionEstudiante": aprobacionEstudiante,
          "idUsuario": idUsuario
        })
      })
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((result) => {
        alert(result.message); // Mostrar la respuesta en una alerta
    })
    .catch((error) => console.error(error));
  });