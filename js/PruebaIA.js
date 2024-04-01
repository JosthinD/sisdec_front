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