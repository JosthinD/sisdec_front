// Abrir modal al hacer clic en "¿Olvidaste tu contraseña?"
document.getElementById("forgotPassword").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Enviar información y mostrar alerta al hacer clic en "Enviar novedad"
document.getElementById("send").addEventListener("click", function() {

// Obtener datos ingresados por el usuario
const email_pw = document.getElementById("email_pw").value;

// Realizar la solicitud FETCH para obtener los datos del usuario
fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email_pw}`, {
    method: 'GET',
    headers: {
        'accept': '*/*'
    }
})
    .then(response => response.json())
    .then((result) => {

        if (result.isSuccess) {

          sessionStorage.setItem('usuario', JSON.stringify(result));

          const usuario = JSON.parse(sessionStorage.getItem('usuario'));
          const idUsuario = usuario.data.id;

          const myHeaders = new Headers();
          myHeaders.append("accept", "*/*");
          myHeaders.append("Content-Type", "application/json");

          const raw = JSON.stringify({
              "asunto": "Olvide mi contraseña",
              "descripcion": "Ayuda, olvidé mi contraseña",
              "idUsuario": idUsuario
          });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${window.config.SERVER_URL}api/Support/NewSoporte`, requestOptions)
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((result) => {
                alert(result.message+("<<Se ha enviado la novedad al administrador, espere respuesta.>>")); // Mostrar la respuesta en una alerta
                console.log(result); // Opcional: Mostrar la respuesta en la consola
            })
            .catch(error => console.error(error));

        }


    })
    .catch(error => console.error('error', error));

  // Cerrar modal después de enviar la información
  document.getElementById("modal").style.display = "none";
})


document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('loadingBackdrop').style.display = 'block'; // Mostrar el fondo semi-transparente
  document.getElementById('loading').style.display = 'block'; // Mostrar el loading



  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  sessionStorage.setItem('email', email);

  fetch(`${window.config.SERVER_URL}api/Login?email=${email}&password=${password}`, {
    method: 'GET',
    headers: {
      'accept': '*/*'
    }
  })
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((result) => {


    document.getElementById('loading').style.display = 'none';
    document.getElementById('loadingBackdrop').style.display = 'none'; // Ocultar el fondo semi-transparente
    
    if (result.isSuccess) { // Verificar si el inicio de sesión fue exitoso
      // Redirigir a la página correspondiente según el rol

      

      const email = document.getElementById('email').value;

      fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email}`, {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
      })
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => {

        sessionStorage.setItem('usuario', JSON.stringify(data));

//        var usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
        
//        alert(`Datos del usuario:
//            ID: ${usuario.data.id}
//            Nombre: ${usuario.data.primerNombre}`);

        sessionStorage.setItem('email', email); // Guardar el email en la sesión
        
        switch(result.data.rol) {
          
          case 'Administrador':
              window.location.href = 'welcomeadmin.html';

              sessionStorage.setItem('isLoggedIn', 'true');

              break;
          case 'Decano':
              window.location.href = 'welcomedec.html';

              sessionStorage.setItem('isLoggedIn', 'true');
              break;
          case 'Maestro':
              window.location.href = 'welcomeprof.html';

              sessionStorage.setItem('isLoggedIn', 'true');
              break;
          default:
              // Redirigir a una página de error u otra página por defecto
              break;
      }      
        })
   
      .catch((error) => console.error(error));
 
    } 
    
    else {
      alert(result.message);
    }
  })
  .catch((error) => {

    document.getElementById('loading').style.display = 'none';
    document.getElementById('loadingBackdrop').style.display = 'none'; // Asegurar que se oculte incluso en error
    console.error('Error:', error);
    //alert("Error en el proceso de login. Por favor, inténtalo de nuevo más tarde.");
    // Mostrar un alert con el mensaje de error del catch
    alert("Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde. Error: 500");
  });



});





