// Obtener el botón por su ID
const buttonvolver = document.getElementById('ButtonVolver');

// Agregar un event listener para escuchar el clic
buttonvolver.addEventListener('click', () => {
    // Redireccionar a soportec.html
  window.location.href = 'welcomedec.html';
});


const buttonguardar = document.getElementById('btnguardar');

buttonguardar.addEventListener('click', () => {
  // Obtener los datos de la tabla
  const programa = document.getElementById("idprograma").innerText;
  const fecha = document.getElementById("idfecha").innerText;
  const director = document.getElementById("iddirector").innerText;

  // Obtener los demás datos de la tabla
  const fechaDos = document.getElementById("idfechaDos").value;
  const actividad = document.getElementById("idactividad").value;
  const descripcion = document.getElementById("iddescripcion").value;
  const duracion = document.getElementById("idduracion").value;
  const lugar = document.getElementById("idlugar").value;
  const horaInicio = document.getElementById("idhoraInicio").value;
  const horaFin = document.getElementById("idhoraFin").value;
  const responsable = document.getElementById("idresponsable").value;
  const participantes = document.getElementById("idparticipantes").value;
  const evidencias = document.getElementById("idevidencias").value;

  // Validar que todos los campos estén diligenciados
  if (
    !programa.trim() ||
    !fecha.trim() ||
    !director.trim() ||
    !fechaDos.trim() ||
    !actividad.trim() ||
    !descripcion.trim() ||
    !duracion.trim() ||
    !lugar.trim() ||
    !horaInicio.trim() ||
    !horaFin.trim() ||
    !responsable.trim() ||
    !participantes.trim() ||
    !evidencias.trim()
  ) {
    alert("Por favor, complete todos los campos.");
    return; // Detener la ejecución si falta algún campo
  }

  const email = sessionStorage.getItem('email');

  fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email}`, {
      method: 'GET',
      headers: {
          'accept': '*/*'
      }
  })
  .then((response) => response.json()) 
  .then((result) => {
    if (result.isSuccess) {
      const usuario = result.data;
      sessionStorage.setItem('usuario', JSON.stringify(usuario));

      const iduser = usuario.id;

      // Fetch con los datos obtenidos
      fetch(`${window.config.SERVER_URL}api/Documents/AgregarNuevoPlanAccion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          programa,
          fecha,
          director,
          fechaDos,
          actividad,
          descripcion,
          duracion,
          lugar,
          horaInicio,
          horaFin,
          responsable,
          participantes,
          evidencias,
          idUsuario: iduser
        })
      })
      .then((response) => response.json()) 
      .then((result) => {
        alert(result.message);
        console.log(result);
      })
      .catch((error) => console.error(error));

    } else {
      console.error(result.message);
    }
  })
  .catch((error) => console.error(error));
});
