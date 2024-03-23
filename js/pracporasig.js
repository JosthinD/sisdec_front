const buttonvolver = document.getElementById('ButtonVolver');


buttonvolver.addEventListener('click', () => {

  window.location.href = 'welcomedec.html';
});


const autputintro = document.getElementById('introduccion');
const outputobjge = document.getElementById('objgeneral');
const outputobjes = document.getElementById('objespecifico');
const outputdescr = document.getElementById('descip');
const outputobjet = document.getElementById('objetos');
const outputresul = document.getElementById('resultados');
const outputevalu = document.getElementById('evaluacion');




//ESTE CODIGO IA PARA EL DATO INTRODUCCION:
const startBtnuno = document.getElementById('start1');
const stopBtnuno = document.getElementById('stop1');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtnuno.addEventListener('click', () => {
    recognition.start();
    autputintro.textContent = 'Escuchando...';
});

stopBtnuno.addEventListener('click', () => {
    recognition.stop();
    autputintro.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    autputintro.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  autputintro.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO OBJETIVO GENERAL:

const startBtn2 = document.getElementById('start2');
const stopBtn2 = document.getElementById('stop2');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn2.addEventListener('click', () => {
    recognition.start();
    outputobjge.textContent = 'Escuchando...';
});

stopBtn2.addEventListener('click', () => {
    recognition.stop();
    outputobjge.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputobjge.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputobjge.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO OBJETIVOS ESPECIFICOS:

const startBtn3 = document.getElementById('start3');
const stopBtn3 = document.getElementById('stop3');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    outputobjes.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    outputobjes.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputobjes.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputobjes.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO DESCRIPCION O EVIDENCIAS:

const startBtn4 = document.getElementById('start4');
const stopBtn4 = document.getElementById('stop4');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    outputdescr.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    outputdescr.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputdescr.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputdescr.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO OBJETOS

const startBtn5 = document.getElementById('start5');
const stopBtn5 = document.getElementById('stop5');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    outputobjet.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    outputobjet.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputobjet.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputobjet.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO RESULTADOS:

const startBtn6 = document.getElementById('start6');
const stopBtn6 = document.getElementById('stop6');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    outputresul.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    outputresul.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputresul.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputresul.textContent = 'Error: ' + event.error;
});

//ESTE CODIGO IA PARA EL DATO EVALUACION:

const startBtn7 = document.getElementById('start7');
const stopBtn7 = document.getElementById('stop7');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    outputevalu.textContent = 'Escuchando...';
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    outputevalu.textContent = 'Detenido';
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputevalu.textContent = transcript;
});

recognition.addEventListener('error', (event) => {
  outputevalu.textContent = 'Error: ' + event.error;
});