const buttonvolver = document.getElementById('ButtonVolver');


buttonvolver.addEventListener('click', () => {

  window.location.href = 'welcomedec.html';
});


const output = document.getElementById('introduccion');
const startBtn = document.getElementById('startuno');
const stopBtn = document.getElementById('stopuno');

const recognition = new webkitSpeechRecognition(); // Para navegadores que no soportan la última API, usar: new SpeechRecognition();
recognition.lang = 'es-ES'; // Establecer el idioma de reconocimiento

startBtn.addEventListener('click', () => {
    recognition.start();
    output.value = 'Escuchando...'; // Usar 'value' en lugar de 'textContent'
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    output.value = 'Detenido'; // Usar 'value' en lugar de 'textContent'
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    output.value = transcript; // Usar 'value' en lugar de 'textContent'
});

recognition.addEventListener('error', (event) => {
    output.value = 'Error: ' + event.error; // Usar 'value' en lugar de 'textContent'
});

// Segundo textarea
const outputObjGeneral = document.getElementById('objgeneral');
const startBtnObjGeneral = document.getElementById('startdos');
const stopBtnObjGeneral = document.getElementById('stopdos');

const recognitionObjGeneral = new webkitSpeechRecognition();
recognitionObjGeneral.lang = 'es-ES';

startBtnObjGeneral.addEventListener('click', () => {
    recognitionObjGeneral.start();
    outputObjGeneral.textContent = 'Escuchando...';
});

stopBtnObjGeneral.addEventListener('click', () => {
    recognitionObjGeneral.stop();
    outputObjGeneral.textContent = 'Detenido';
});

recognitionObjGeneral.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputObjGeneral.textContent = transcript;
});

recognitionObjGeneral.addEventListener('error', (event) => {
    outputObjGeneral.textContent = 'Error: ' + event.error;
});


// Tercer textarea
const outputObjEspecifico = document.getElementById('objespecifico');
const startBtnObjEspecifico = document.getElementById('starttres');
const stopBtnObjEspecifico = document.getElementById('stoptres');

const recognitionObjEspecifico = new webkitSpeechRecognition();
recognitionObjEspecifico.lang = 'es-ES';

startBtnObjEspecifico.addEventListener('click', () => {
    recognitionObjEspecifico.start();
    outputObjEspecifico.textContent = 'Escuchando...';
});

stopBtnObjEspecifico.addEventListener('click', () => {
    recognitionObjEspecifico.stop();
    outputObjEspecifico.textContent = 'Detenido';
});

recognitionObjEspecifico.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputObjEspecifico.textContent = transcript;
});

recognitionObjEspecifico.addEventListener('error', (event) => {
    outputObjEspecifico.textContent = 'Error: ' + event.error;
});


// Cuarto textarea
const outputDescip = document.getElementById('descip');
const startBtnDescip = document.getElementById('startcuatro');
const stopBtnDescip = document.getElementById('stopcuatro');

const recognitionDescip = new webkitSpeechRecognition();
recognitionDescip.lang = 'es-ES';

startBtnDescip.addEventListener('click', () => {
    recognitionDescip.start();
    outputDescip.textContent = 'Escuchando...';
});

stopBtnDescip.addEventListener('click', () => {
    recognitionDescip.stop();
    outputDescip.textContent = 'Detenido';
});

recognitionDescip.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputDescip.textContent = transcript;
});

recognitionDescip.addEventListener('error', (event) => {
    outputDescip.textContent = 'Error: ' + event.error;
});


// Quinto textarea
const outputObjetos = document.getElementById('objetos');
const startBtnObjetos = document.getElementById('startcinco');
const stopBtnObjetos = document.getElementById('stopcinco');

const recognitionObjetos = new webkitSpeechRecognition();
recognitionObjetos.lang = 'es-ES';

startBtnObjetos.addEventListener('click', () => {
    recognitionObjetos.start();
    outputObjetos.textContent = 'Escuchando...';
});

stopBtnObjetos.addEventListener('click', () => {
    recognitionObjetos.stop();
    outputObjetos.textContent = 'Detenido';
});

recognitionObjetos.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputObjetos.textContent = transcript;
});

recognitionObjetos.addEventListener('error', (event) => {
    outputObjetos.textContent = 'Error: ' + event.error;
});


// Sexto textarea
const outputResultados = document.getElementById('resultados');
const startBtnResultados = document.getElementById('startsexto');
const stopBtnResultados = document.getElementById('stopsexto');

const recognitionResultados = new webkitSpeechRecognition();
recognitionResultados.lang = 'es-ES';

startBtnResultados.addEventListener('click', () => {
    recognitionResultados.start();
    outputResultados.textContent = 'Escuchando...';
});

stopBtnResultados.addEventListener('click', () => {
    recognitionResultados.stop();
    outputResultados.textContent = 'Detenido';
});

recognitionResultados.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputResultados.textContent = transcript;
});

recognitionResultados.addEventListener('error', (event) => {
    outputResultados.textContent = 'Error: ' + event.error;
});


// Séptimo textarea
const outputEvaluacion = document.getElementById('evaluacion');
const startBtnEvaluacion = document.getElementById('startseptimo');
const stopBtnEvaluacion = document.getElementById('stopseptimo');

const recognitionEvaluacion = new webkitSpeechRecognition();
recognitionEvaluacion.lang = 'es-ES';

startBtnEvaluacion.addEventListener('click', () => {
    recognitionEvaluacion.start();
    outputEvaluacion.textContent = 'Escuchando...';
});

stopBtnEvaluacion.addEventListener('click', () => {
    recognitionEvaluacion.stop();
    outputEvaluacion.textContent = 'Detenido';
});

recognitionEvaluacion.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    outputEvaluacion.textContent = transcript;
});

recognitionEvaluacion.addEventListener('error', (event) => {
    outputEvaluacion.textContent = 'Error: ' + event.error;
});


const btnguardar = document.getElementById('btnguardar');

btnguardar.addEventListener('click', () => {
    // Obtener los datos del formulario
    const programa = document.getElementById("idprograma").innerText;
    const director = document.getElementById("iddirector").innerText;
    const semestre = document.getElementById("idsemestre").innerText;
    const nompractica = document.getElementById("idnompractica").innerText;
    const numeropractica = document.getElementById("idnumeropractica").innerText;
    const lugarpractica = document.getElementById("idlugarpractica").innerText;
    const horaspractica = document.getElementById("idhoraspractica").innerText;
    const observacion = document.getElementById("idobservacion").innerText;
    const introduccion = document.getElementById("introduccion").value;
    const objgeneral = document.getElementById("objgeneral").value;
    const objespecifico = document.getElementById("objespecifico").value;
    const descip = document.getElementById("descip").value;
    const objetos = document.getElementById("objetos").value;
    const resultados = document.getElementById("resultados").value;
    const evaluacion = document.getElementById("evaluacion").value;

    // Validar que todos los campos estén diligenciados
    if (
        !programa.trim() ||
        !director.trim() ||
        !semestre.trim() ||
        !nompractica.trim() ||
        !numeropractica.trim() ||
        !lugarpractica.trim() ||
        !horaspractica.trim() ||
        !observacion.trim() ||
        !introduccion.trim() ||
        !objgeneral.trim() ||
        !objespecifico.trim() ||
        !descip.trim() ||
        !objetos.trim() ||
        !resultados.trim() ||
        !evaluacion.trim()
    ) {
        alert("Por favor, complete todos los campos.");
        return; // Detener la ejecución si falta algún campo
    }

    const email = sessionStorage.getItem('email');

    fetch(`${window.config.SERVER_URL}api/Users/GetAllDataUser?email=${email}`, {
        method: 'GET',
        headers: {
            'accept': '*/*'
        }
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.isSuccess) {
                const usuario = result.data;
                sessionStorage.setItem('usuario', JSON.stringify(usuario));

                const iduser = usuario.id;

                // Fetch con los datos obtenidos
                fetch(`${window.config.SERVER_URL}api/Documents/AgregarNuevaPracticaPorAsignatura`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        programa,
                        director,
                        semestre,
                        nompractica,
                        numeropractica,
                        lugarpractica,
                        horaspractica,
                        observacion,
                        introduccion,
                        objgeneral,
                        objespecifico,
                        descip,
                        objetos,
                        resultados,
                        evaluacion,
                        idUsuario: iduser
                    })
                })
                    .then((response) => response.json())
                    .then((result) => {
                        alert(result.message);
                        console.log(result);
                    })
                    .catch((error) => console.error(error));

            } else {
                console.error(result.message);
            }
        })
        .catch((error) => console.error(error));
});

