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


document.addEventListener("DOMContentLoaded", function() {
    var usuario = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('id_use').textContent = usuario.data.id;
        document.getElementById('primerNombre').textContent = usuario.data.primerNombre;
        document.getElementById('Rol').textContent = usuario.data.rol;
    }
});

document.getElementById("menuButton").addEventListener("click", function() {
    var menuContainer = document.getElementById("menuContainer");
    if (menuContainer.style.display !== "block") {
      menuContainer.style.display = "block";
    } else {
      menuContainer.style.display = "none";
    }
  });


// Obtener el botón por su ID
const buttonSoporteTecnico = document.getElementById('ButtonSoportetecnico');

// Agregar un event listener para escuchar el clic
buttonSoporteTecnico.addEventListener('click', () => {
      // Redireccionar a soportec.html
    window.location.href = 'soportec.html';
});

// Obtener el botón por su ID
const buttongestionusuarios = document.getElementById('ButtonGestionUsuarios');

// Agregar un event listener para escuchar el clic
buttongestionusuarios.addEventListener('click', () => {
      // Redireccionar a soportec.html
      fetch(`${window.config.SERVER_URL}api/Users/GetAllUsers`, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('info', JSON.stringify(result.data));

            // Redireccionar a auditoria.html
            window.location.href = 'gestionusuarios.html';
        }
    })
    .catch((error) => console.error(error));



});

// Obtener el botón por su ID
const buttonAuditoria = document.getElementById('ButtonAuditoria');

// Agregar un event listener para escuchar el clic
buttonAuditoria.addEventListener('click', () => {
    fetch(`${window.config.SERVER_URL}api/Data/GetAllLogs`, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {
            // Guardar la información en sessionStorage
            sessionStorage.setItem('logs', JSON.stringify(result.data));

            // Redireccionar a auditoria.html
            window.location.href = 'auditoria.html';
        }
    })
    .catch((error) => console.error(error));
});


// Obtener el botón por su ID
const buttonPruebaIA = document.getElementById('ButtonPruebaIA');

// Agregar un event listener para escuchar el clic
buttonPruebaIA.addEventListener('click', () => {
      // Redireccionar a soportec.html
    window.location.href = 'PruebaIA.html';
});


const cerrarSesionButton = document.querySelector('button[data-action="cerrar-sesion"]');

cerrarSesionButton.addEventListener('click', () => {
    window.location.href = 'index.html#';
});

const myModal = document.getElementById('myModal');
const myModalCloseButton = document.getElementById('myModalClose');

myModalCloseButton.addEventListener('click', () => {
    myModal.style.display = 'none';
});

const editUserButton = document.querySelector('button:nth-child(2)');
const modal = document.getElementById('myModal');

    //Obtener el correo electrónico guardado en sessionStorage
    const email = sessionStorage.getItem('email');

editUserButton.addEventListener('click', () => {


    // Realizar la solicitud FETCH para obtener los datos del usuario
    fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
          'accept': '*/*'
      }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde.");
        }
        return response.json();
    })
    .then((data) => {
      // Mostrar los datos del usuario en el modal
      document.getElementById('id').value = data.data.id;
      document.getElementById('firstName').value = data.data.primerNombre;
      document.getElementById('secondName').value = data.data.segundoNombre;
      document.getElementById('lastName').value = data.data.primerApellido;
      document.getElementById('secondLastName').value = data.data.segundoApellido;
      document.getElementById('phone').value = data.data.telefono;
      document.getElementById('emailget').value = data.data.correo;
  
      // Mostrar el modal
      modal.style.display = 'block';
    })
    .catch((error) => {
        // Manejar el error
        alert('Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde.');
        console.error(error);
    });

});

const enviarButton = document.querySelector('.Users-form button');

enviarButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "idUser": document.getElementById('id').value,
        "primerNombre": document.getElementById('firstName').value,
        "segundoNombre": document.getElementById('secondName').value,
        "primerApellido": document.getElementById('lastName').value,
        "segundoApellido": document.getElementById('secondLastName').value,
        "telefono": document.getElementById('phone').value,
        "correo": document.getElementById('emailget').value
    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${window.config.SERVER_URL}api/Users/PutDataUser`, requestOptions)
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((result) => {
        alert(result.message); // Mostrar la respuesta en una alerta
        console.log(result); // Opcional: Mostrar la respuesta en la consola
    })
    .catch((error) => console.error(error));
});


const cambiarContraseñaButton = document.querySelector('button:nth-child(3)');
const cambiarContraseñaModal = document.getElementById('cambiarContraseñaModal');
const cambiarContraseñaCloseButton = document.querySelector('#cambiarContraseñaModal .close');

cambiarContraseñaCloseButton.addEventListener('click', () => {
    cambiarContraseñaModal.style.display = 'none';
});

cambiarContraseñaButton.addEventListener('click', () => {
  // Obtener el correo electrónico guardado en sessionStorage
  const email = sessionStorage.getItem('email');
  cambiarContraseñaModal.style.display = 'block';

  // Realizar la solicitud FETCH para obtener los datos del usuario
  fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email}`, {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error('Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde.');
      }
      return response.json();
  })
  .then((data) => {
    // Mostrar los datos del usuario en el modal
    document.getElementById('id_user').value = data.data.id;

    // Mostrar el modal
    modal.style.display = 'modal_camcont';
  })
  .catch((error) => {
      // Manejar el error
      alert('Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde.');
      console.error(error);
  });

});


const newPassword = document.getElementById('newPassword').value;
const confirmNewPassword = document.getElementById('confirmNewPassword').value;

const enviarcontrButton = document.querySelector('#cambiarContraseñaModal button');

enviarcontrButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    if (newPassword !== confirmNewPassword) {
        alert("Las contraseñas no coinciden. Por favor, asegúrate de que las contraseñas coincidan.");
        // Puedes agregar más código aquí para manejar la situación, como limpiar los campos de contraseña.
    } else {
        
        const userId = document.getElementById('id_user').value;
        const oldPassword = document.getElementById('oldPassword').value;

        fetch(`${window.config.SERVER_URL}api/Users/VerifyPasswordForUser?userId=${userId}&contraseña=${oldPassword}`, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
        })
        .then(response => response.json())
        .then((result) => {
            
            console.log(result); // Opcional: Mostrar la respuesta en la consola
            alert(result.message+("<<Contraseña actual>>")); // Mostrar la respuesta en una alerta

            if (result.isSuccess) {

                const userId = document.getElementById('id_user').value;
                const newPassword = document.getElementById('newPassword').value;


                const requestOptions = {
                method: 'PUT',
                headers: {
                    'accept': '*/*'
                },
                redirect: 'follow'
                };

                fetch(`${window.config.SERVER_URL}api/Users/UpdateUserPassword?userId=${userId}&contraseña=${newPassword}`, requestOptions)
                .then((response) => response.json()) // Convertir la respuesta a JSON
                .then((result) => {
                    alert(result.message); // Mostrar la respuesta en una alerta
                    console.log(result); // Opcional: Mostrar la respuesta en la consola
                })
                .catch(error => console.error(error));
            }
        });
    }
});
