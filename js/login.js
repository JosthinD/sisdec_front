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
  const documentNumber = document.getElementById("documentNumber").value;
  const name = document.getElementById("name").value;

  // Aquí puedes enviar los datos al servidor
  // Por ahora, simplemente mostramos una alerta
  alert("Información enviada:\nDocumento: " + documentNumber + "\nNombre: " + name);

  // Cerrar modal después de enviar la información
  document.getElementById("modal").style.display = "none";
});

const url = 'https://localhost:7215/api/Login';

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`${url}?email=${email}&password=${password}`, {
    method: 'GET',
    headers: {
      'accept': '*/*'
    }
  })
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((result) => {

    if (result.isSuccess) { // Verificar si el inicio de sesión fue exitoso
      // Redirigir a la página correspondiente según el rol

      sessionStorage.setItem('email', email); // Guardar el email en la sesión

      switch(result.data.rol) {
        case 'Administrador':
          window.location.href = 'welcomeadmin.html';
          break;
        case 'Decano':
          window.location.href = 'welcomedec.html';
          break;
        case 'Maestro':
          window.location.href = 'welcomeprof.html';
          break;
        default:
          // Redirigir a una página de error u otra página por defecto
          window.location.href = 'welcomeadmin.html';
          break;
      }
    } else {
      // Mostrar un mensaje de error en un alert
      alert(result.message);
    }
  })
  .catch((error) => {
    // Mostrar un alert con el mensaje de error del catch
    alert("Lo sentimos, estamos experimentando problemas técnicos. Por favor, inténtalo de nuevo más tarde. Error: 500");
  });
});



