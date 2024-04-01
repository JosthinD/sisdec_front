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
  window.location.href = 'welcomeadmin.html';
});

// Función para obtener y mostrar los registros de la API según el estado seleccionado
async function obtenertodosloscasos() {
    const url = `${window.config.SERVER_URL}api/Support/GetAllSoportes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Limpiar la tabla antes de agregar nuevos datos
        const tbody = document.getElementById('tbodySoportes');
        tbody.innerHTML = '';

        // Agregar las filas a la tabla
        data.data.forEach(soporte => {
            const fila = crearFilaSoporte(soporte);
            tbody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al obtener los casos por estado:', error);
    }
}

// Obtener el botón por su ID
const btntodosloscasos = document.getElementById('btntodosloscasos');

// Agregar un event listener para escuchar el clic en el botón
btntodosloscasos.addEventListener('click', obtenertodosloscasos);

// Función para crear una fila de la tabla con los datos de un soporte
function crearFilaSoporte(soporte) {
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${soporte.id}</td>
        <td>${soporte.asunto}</td>
        <td>${soporte.descripcion}</td>
        <td>${soporte.idUsuario}</td>
        <td>${soporte.fecha}</td>
        <td>${soporte.idEstado}</td>
    `;

    return fila;
}

// Función para obtener y mostrar los casos por filtro en la tabla
async function obtenerCasosPorFiltro() {
    const select = document.getElementById('opcionesfiltroestado');
    const fechafiltro = document.getElementById('fechafiltro').value;
    const idusufiltro = document.getElementById('usuariofiltro').value;
    const estadoId = select.value === '' ? '' : (select.value === 'opcion1' ? 1 : 2); // Asigna el estadoId según la opción seleccionada (1 para "Activos", 2 para "Resueltos")
    const url = `${window.config.SERVER_URL}api/Support/GetSoportesByFilters?fecha=${fechafiltro}&userId=${idusufiltro}&estadoId=${estadoId}`;

    try {
        // Realizar la solicitud GET usando fetch
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': '*/*'
            }
        });
        const result = await response.json();

        // Limpiar la tabla antes de agregar nuevos datos
        const tbody = document.getElementById('tbodySoportes');
        tbody.innerHTML = '';

        // Agregar las filas a la tabla
        result.data.forEach(soporte => {
            const fila = crearFilaSoporte(soporte);
            tbody.appendChild(fila);
        });
    } catch (error) {
        alert("No se encuentran registros asociados a los datos ingresados.");
    }
}

// Obtener el botón por su ID
const btnCasosPorfiltro = document.getElementById('btnCasosPorfiltro');

// Agregar un event listener para escuchar el clic en el botón
btnCasosPorfiltro.addEventListener('click', obtenerCasosPorFiltro);


// Obtener el botón de abrir modal y el modal
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');

// Mostrar el modal al hacer clic en el botón
openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Obtener el botón de cerrar y cerrar el modal al hacer clic en él
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// Obtener el botón por su ID
const btnresolvermodal = document.getElementById('btnresolvermodal');

// Agregar un event listener para escuchar el clic en el botón
btnresolvermodal.addEventListener('click', actualizarcaso);

// Función para obtener y mostrar los casos por filtro en la tabla
async function actualizarcaso() {

    const soporteId = document.getElementById('soporteId').value;
    const select = document.getElementById('opcionesactualizar');
    const nuevoEstadoId = select.value === '' ? '' : (select.value === 'opcion1' ? 1 : 2);
    const url = `${window.config.SERVER_URL}api/Support/UpdateSoporteEstado?`;

    fetch(url, {
        method: 'PUT',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          soporteId: soporteId,
          nuevoEstadoId: nuevoEstadoId
        })
      })
      .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((result) => {
        alert(result.message); // Mostrar la respuesta en una alerta
        console.log(result); // Opcional: Mostrar la respuesta en la consola
    })
    .catch((error) => {
        console.error(error)
        //alert(result.message);
    })

  // Cerrar modal después de enviar la información
  document.getElementById("myModal").style.display = "none";

}
