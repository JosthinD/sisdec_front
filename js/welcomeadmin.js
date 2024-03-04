const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
    menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
});

const cerrarSesionButton = document.querySelector('button[data-action="cerrar-sesion"]');

cerrarSesionButton.addEventListener('click', () => {
    window.location.href = 'index.html#';
});

const editUserButton = document.getElementById('editUserButton');
const modal = document.getElementById('myModal');

editUserButton.addEventListener('click', () => {
  modal.style.display = 'block';
});



const url = 'https://localhost:7215/api/Users';

document.addEventListener('DOMContentLoaded', function() {
    const email = sessionStorage.getItem('email');
  
    fetch(`${url}?email=${email}`, {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
    })
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((result) => {
      if (result.isSuccess) {
        // Mostrar los datos en los campos del formulario
        document.getElementById('firstName').value = result.data.prinombre;
        document.getElementById('secondName').value = result.data.segnombre;
        document.getElementById('lastName').value = result.data.priapellido;
        document.getElementById('secondLastName').value = result.data.segapellido;
        document.getElementById('phone').value = result.data.telefono;
        document.getElementById('emailget').value = result.data.correo;
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


  const cerrarEdiUsuarioButton = document.querySelector('button[data-action="cerrar-editarusuario"]');

cerrarEdiUsuarioButton.addEventListener('click', () => {
    modal.style.display = 'none';
});