// Obtener el botón por su ID
const buttonvolver = document.getElementById('ButtonVolver');

// Agregar un event listener para escuchar el clic
buttonvolver.addEventListener('click', () => {
    // Redireccionar a soportec.html
  window.location.href = 'welcomeadmin.html';
});

const output = document.getElementById('output');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    output.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    output.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
    output.textContent = 'Error: ' + event.error;
});