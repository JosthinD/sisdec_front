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

const buttonvolver = document.getElementById('ButtonVolver');

buttonvolver.addEventListener('click', () => {
    window.location.href = 'welcomedec.html';
});

document.addEventListener("DOMContentLoaded", function() {
    var datee = JSON.parse(sessionStorage.getItem('datee'));

    if (datee) {
        // Itera sobre los elementos en datee y cuenta aquellos que tienen el atributo 'id'
        totalRegistros = datee.filter(function(item) {
            return item.hasOwnProperty('id');
        }).length;
        // Actualiza el contenido del elemento con id "totalRegistros" con el total de registros encontrados
        document.getElementById('totalRegistros').textContent = totalRegistros;

        // Calcular la distribución de prácticas por programa
        var practicesByProgram = {};
        datee.forEach(function(practice) {
            var programa = practice.programa;
            if (practicesByProgram.hasOwnProperty(programa)) {
                practicesByProgram[programa]++;
            } else {
                practicesByProgram[programa] = 1;
            }
        });

        // Preparar los datos para el gráfico de pastel
        var labels = Object.keys(practicesByProgram);
        var data = labels.map(function(programa) {
            return practicesByProgram[programa];
        });

        // Crear el gráfico de pastel
        var ctx = document.getElementById('pieChart').getContext('2d');
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Prácticas por programa' // Título del gráfico
                }
            }
        });

        // Calcular la cantidad de prácticas por programa
        var practicesByProgram = {};
        datee.forEach(function(practice) {
            if (practicesByProgram.hasOwnProperty(practice.programa)) {
                practicesByProgram[practice.programa]++;
            } else {
                practicesByProgram[practice.programa] = 1;
            }
        });

        // Preparar los datos para el gráfico de barras
        labels = Object.keys(practicesByProgram); // Reutiliza la variable existente
        data = labels.map(function(label) {
            return practicesByProgram[label];
        });

        // Crear el gráfico de barras
        var ctx = document.getElementById('barChart').getContext('2d');
        var barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Cantidad de prácticas por programa',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de las barras
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Calcular la cantidad de prácticas por semestre
        var practicesBySemester = {};
        datee.forEach(function(practice) {
            var semester = practice.semestre;
            if (practicesBySemester.hasOwnProperty(semester)) {
                practicesBySemester[semester]++;
            } else {
                practicesBySemester[semester] = 1;
            }
        });

        // Ordenar los semestres cronológicamente
        var sortedSemesters = Object.keys(practicesBySemester).sort(function(a, b) {
            return new Date(a) - new Date(b);
        });

        // Preparar los datos para el gráfico de líneas
        labels = sortedSemesters; // Reutiliza la variable existente
        data = labels.map(function(semester) {
            return practicesBySemester[semester];
        });

        // Crear el gráfico de líneas
        var ctx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Número de prácticas por semestre',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Preparar los datos para el gráfico de dispersión
        var data = datee.map(function(practice) {
            return { x: practice.horas, y: practice.numeroPractica };
        });

        // Crear el gráfico de dispersión
        var ctx = document.getElementById('scatterChart').getContext('2d');
        var scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Relación entre horas de práctica y número de práctica',
                    data: data,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)', // Color de los puntos
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Horas de práctica'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Número de práctica'
                        }
                    }
                }
            }
        });

        // Crear el gráfico de barras para el usuario con más registros
        let userCounts = {};
        datee.forEach(item => {
            if (userCounts[item.idUsuario]) {
                userCounts[item.idUsuario]++;
            } else {
                userCounts[item.idUsuario] = 1;
            }
        });

        let maxUser = null;
        let maxCount = 0;
        Object.keys(userCounts).forEach(userId => {
            if (userCounts[userId] > maxCount) {
                maxCount = userCounts[userId];
                maxUser = userId;
            }
        });

        labels = Object.keys(userCounts); // Reutiliza la variable existente
        data = Object.values(userCounts);

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Número de registros',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
