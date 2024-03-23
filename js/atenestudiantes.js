const buttonvolver = document.getElementById('ButtonVolver');

buttonvolver.addEventListener('click', () => {

  window.location.href = 'welcomedec.html';
});


const buttonguardar = document.getElementById('btnguardar');

buttonguardar.addEventListener('click', () => {
  // Obtener los datos de la tabla
  const programa = document.getElementById("idprograma").innerText;
  const director = document.getElementById("iddirector").innerText;
  const modulo = document.getElementById("idmodulo").innerText;

  // Obtener los demás datos de la tabla
  const fecha = document.getElementById("idfecha").value;
  const hora = document.getElementById("idnomest").value;
  const semestre = document.getElementById("idsemestre").value;
  const grupo = document.getElementById("idgrupo").value;
  const jornada = document.getElementById("idjornada").value;
  const motivo = document.getElementById("idmotivo").value;
  const observaciones = document.getElementById("idobservaciones").value;
  const aprobacionEstudiante = document.getElementById("idaprobacionest").value;

  // Validar que todos los campos estén diligenciados
  if (
    !programa.trim() ||
    !director.trim() ||
    !modulo.trim() ||
    !fecha.trim() ||
    !hora.trim() ||
    !semestre.trim() ||
    !grupo.trim() ||
    !jornada.trim() ||
    !motivo.trim() ||
    !observaciones.trim() ||
    !aprobacionEstudiante.trim()
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
      fetch(`${window.config.SERVER_URL}api/Documents/AgregarNuevaAtencionEstudiantes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          programa,
          director,
          modulo,
          fecha,
          hora,
          semestre,
          grupo,
          jornada,
          motivo,
          observaciones,
          aprobacionEstudiante,
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


