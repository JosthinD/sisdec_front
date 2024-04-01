//document.addEventListener("DOMContentLoaded", function() {
//    var usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
//    var datosUsuario = ("ID Usuario:" + usuario.data.id + " " +"Nombre:" + usuario.data.primerNombre);

//    document.getElementById('nombreUsuario').innerText = datosUsuario;
//});

document.addEventListener("DOMContentLoaded", function() {
    var usuario = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('id_use').textContent = usuario.data.id;
        document.getElementById('primerNombre').textContent = usuario.data.primerNombre;
        document.getElementById('Rol').textContent = usuario.data.rol;
    }
});

//const userIdpri = document.getElementById('id_use').value;

document.getElementById("menuButton").addEventListener("click", function() {
    var menuContainer = document.getElementById("menuContainer");
    if (menuContainer.style.display !== "block") {
      menuContainer.style.display = "block";
    } else {
      menuContainer.style.display = "none";
    }
  });


document.getElementById('Buttonplanaccion').addEventListener('click', function() {
    window.location.href = 'planaccion.html?from=welcomeprof';
});
    
document.getElementById('Buttonpractasigna').addEventListener('click', function() {
    window.location.href = 'pracporasig.html?from=welcomeprof';
});

document.getElementById('Buttonatenestudi').addEventListener('click', function() {
    window.location.href = 'atenestudiantes.html?from=welcomeprof';
});


  // Este codigo es para la consulta de plan de accion:
const buttonconsplanaccion = document.getElementById('Buttonconsplanaccion');
buttonconsplanaccion.addEventListener('click', () => {

    var usuarioString = sessionStorage.getItem('usuario');
    var usuario = JSON.parse(usuarioString);
    var id = usuario.data.id;

    fetch(`${window.config.SERVER_URL}api/Documents/GetAllPlanAccionAcademicoPorUsuario?IdUsuario=${id}`, {
        method: 'GET',
        headers: {
            'accept': '*/*'
        }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {

            sessionStorage.setItem('datee', JSON.stringify(result.data));

            window.location.href = 'profconsplanaccion.html';
        }
        else {
            alert("No se encuentran registros asociados al usuario.");
        }
    })
    .catch((error) => console.error(error));
});

//// aqui se acaba el codigo de consulta plan de accion

  // Este codigo es para la consulta de practica por asignatura:
const buttonprofconspracporasig = document.getElementById('Buttonconspracporasig');
buttonprofconspracporasig.addEventListener('click', () => {

    var usuarioString = sessionStorage.getItem('usuario');
    var usuario = JSON.parse(usuarioString);
    var id = usuario.data.id;

    fetch(`${window.config.SERVER_URL}api/Documents/GetAllPracticaPorAsignaturaPorUsuario?IdUsuario=${id}`, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    })
    .then((response) => response.json()) 
    .then((result) => {
        if (result.isSuccess) {

            sessionStorage.setItem('datee', JSON.stringify(result.data));

            window.location.href = 'profconspracporasig.html';
        }
        else {
            alert("No se encuentran registros asociados al usuario.");
        }
    })
    .catch((error) => console.error(error));
});

//// aqui se acaba el codigo de consulta practica por asignatura

  // Este codigo es para la consulta de atencion al estudiante:
  const buttonprofconsatenest = document.getElementById('Buttonconsatenestu');
  buttonprofconsatenest.addEventListener('click', () => {
  
      var usuarioString = sessionStorage.getItem('usuario');
      var usuario = JSON.parse(usuarioString);
      var id = usuario.data.id;
  
      fetch(`${window.config.SERVER_URL}api/Documents/GetAllAtencionEstudiantesPorUsuario?IdUsuario=${id}`, {
          method: 'GET',
          headers: {
              'Accept': '*/*'
          }
      })
      .then((response) => response.json()) 
      .then((result) => {
          if (result.isSuccess) {
  
              sessionStorage.setItem('datee', JSON.stringify(result.data));
  
              window.location.href = 'profconsatenestu.html';
          }
          else {
              alert("No se encuentran registros asociados al usuario.");
          }
      })
      .catch((error) => console.error(error));
  });
  
  //// aqui se acaba el codigo de consulta atencion al estudiante


const myModal = document.getElementById('myModal');
const myModalCloseButton = document.getElementById('myModalClose');

myModalCloseButton.addEventListener('click', () => {
    myModal.style.display = 'none';
});

const cerrarSesionButton = document.querySelector('button[data-action="cerrar-sesion"]');

cerrarSesionButton.addEventListener('click', () => {
    window.location.href = 'index.html#';
});

const editUserButton = document.querySelector('button:nth-child(2)');
const modal = document.getElementById('myModal');

    //Obtener el correo electrónico guardado en sessionStorage
    const email = sessionStorage.getItem('email');

editUserButton.addEventListener('click', () => {


    // Realizar la solicitud FETCH para obtener los datos del usuario
    fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
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

    fetch("https://localhost:7215/api/Users/PutDataUser", requestOptions)
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
  fetch(`https://localhost:7215/api/Users/GetAllDataUser?email=${email}`, {
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

        fetch(`https://localhost:7215/api/Users/VerifyPasswordForUser?userId=${userId}&contraseña=${oldPassword}`, {
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

                fetch(`https://localhost:7215/api/Users/UpdateUserPassword?userId=${userId}&contraseña=${newPassword}`, requestOptions)
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
