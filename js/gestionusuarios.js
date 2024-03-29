// Obtener el botón por su ID
const buttonvolver = document.getElementById('ButtonVolver');

// Agregar un event listener para escuchar el clic
buttonvolver.addEventListener('click', () => {
    // Redireccionar a soportec.html
  window.location.href = 'welcomeadmin.html';
});

document.addEventListener("DOMContentLoaded", function() {
    var info = JSON.parse(sessionStorage.getItem('info'));

    if (info) {
        var tablainformacion = document.getElementById('tablainformacion');

        info.forEach(function(inf) {
            var row = tablainformacion.getElementsByTagName('tbody')[0].insertRow();
            row.insertCell(0).textContent = inf.id;
            row.insertCell(1).textContent = inf.primerNombre;
            row.insertCell(2).textContent = inf.primerApellido;
            row.insertCell(3).textContent = inf.tipoDocumento;
            row.insertCell(4).textContent = inf.numeroDocumento;
            row.insertCell(5).textContent = inf.genero;
            row.insertCell(6).textContent = inf.correo;
            row.insertCell(7).textContent = inf.rol;
            row.insertCell(8).textContent = inf.estado;
        });
    }
});

// Obtener el botón por su ID
const buttoncontra = document.getElementById('btnguardarcontraseña');

// Agregar un event listener para escuchar el clic
buttoncontra.addEventListener('click', () => {
    const email = document.getElementById('correocont').value;


    fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
          'accept': '*/*'
      }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('dato', JSON.stringify(result));

            const dato = JSON.parse(sessionStorage.getItem('dato'));
            const userId = dato.data.id;
            const contraseña = document.getElementById('contraseña').value;

            
            fetch(`https://localhost:7215/api/Users/UpdateUserPassword?userId=${userId}&contraseña=${contraseña}`, {

            method: 'PUT',
            headers: {
              'Accept': '*/*'
            }
            })
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((result) => {
                  alert(result.message); // Mostrar la respuesta en una alerta
                  console.log(result); // Opcional: Mostrar la respuesta en la consola
            })
            .catch(error => console.error(error));
        }
    })
    .catch((error) => console.error(error));
});

// Obtener el botón por su ID
const buttonesta = document.getElementById('btnguardarestado');

// Agregar un event listener para escuchar el clic
buttonesta.addEventListener('click', () => {
    const email = document.getElementById('correoesta').value;


    fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
          'accept': '*/*'
      }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('dato', JSON.stringify(result));

            const dato = JSON.parse(sessionStorage.getItem('dato'));
            const userId = dato.data.id;
            const nuevoEstadoId = document.getElementById('nuevoEstadoId').value;

            
            fetch(`https://localhost:7215/api/Users/UpdateUserState?userId=${userId}&nuevoEstadoId=${nuevoEstadoId}`, {

            method: 'PUT',
            headers: {
              'Accept': '*/*'
            }
            })
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((result) => {
                  alert(result.message); // Mostrar la respuesta en una alerta
                  console.log(result); // Opcional: Mostrar la respuesta en la consola
            })
            .catch(error => console.error(error));
        }
    })
    .catch((error) => console.error(error));
})

// Obtener el botón por su ID
const buttonrol = document.getElementById('btnguardarrol');

// Agregar un event listener para escuchar el clic
buttonrol.addEventListener('click', () => {
    const email = document.getElementById('correorol').value;


    fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
          'accept': '*/*'
      }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('dato', JSON.stringify(result));

            const dato = JSON.parse(sessionStorage.getItem('dato'));
            const userId = dato.data.id;
            const nuevoRolId = document.getElementById('nuevoRolId').value;

            
            fetch(`https://localhost:7215/api/Users/UpdateUserState?userId=${userId}&nuevoEstadoId=${nuevoRolId}`, {

            method: 'PUT',
            headers: {
              'Accept': '*/*'
            }
            })
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((result) => {
                  alert(result.message); // Mostrar la respuesta en una alerta
                  console.log(result); // Opcional: Mostrar la respuesta en la consola
            })
            .catch(error => console.error(error));
        }
    })
    .catch((error) => console.error(error));
})


// Obtener el botón por su ID
const buttondatos = document.getElementById('btnguardardatos');

// Agregar un event listener para escuchar el clic
buttondatos.addEventListener('click', () => {
    const email = document.getElementById('correodato').value;


    fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
          'accept': '*/*'
      }
    })
    .then((response) => response.json()) 
    .then((result) => {
        
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('dato', JSON.stringify(result));
            const dato = JSON.parse(sessionStorage.getItem('dato'));


            
            const userId = dato.data.id;
            const primerNombre = document.getElementById('primerNombre').value;
            const segundoNombre = document.getElementById('segundoNombre').value;
            const primerApellido = document.getElementById('primerApellido').value;
            const segundoApellido = document.getElementById('segundoApellido').value;
            const telefono = document.getElementById('telefono').value;
            const correo = document.getElementById('correodato').value;


            fetch('https://localhost:7215/api/Users/PutDataUser', {
                method: 'PUT',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "idUser": userId,
                    "primerNombre": primerNombre,
                    "segundoNombre": segundoNombre,
                    "primerApellido": primerApellido,
                    "segundoApellido": segundoApellido,
                    "telefono": telefono,
                    "correo": correo
                })
                })
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((result) => {
                if (!result.isSuccess) {
                    alert(result.message); // Mostrar la respuesta en una alerta
                }
                alert(result.message);
                console.log(result); // Opcional: Mostrar la respuesta en la consola
                })
            .catch(error => console.error(error));
        }
        if (!result.isSuccess) {
            alert(result.message); // Mostrar la respuesta en una alerta
        }
    })
    .catch((error) => {
        alert(result.message);
        console.error(error);
    });
})