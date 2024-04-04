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
        var registrosPorId = {};
        datee.forEach(function(item) {
            if (!registrosPorId[item.id]) {
                registrosPorId[item.id] = 1;
            } else {
                registrosPorId[item.id]++;
            }
        });

        var totalRegistros = Object.values(registrosPorId).reduce(function(total, cantidad) {
            return total + cantidad;
        }, 0);

        document.getElementById('totalRegistros').textContent = totalRegistros;

        var registrosPorSemestreYJornada = {};
        datee.forEach(function(item) {
            var key = item.semestre + '-' + item.jornada;
            if (!registrosPorSemestreYJornada[key]) {
                registrosPorSemestreYJornada[key] = 1;
            } else {
                registrosPorSemestreYJornada[key]++;
            }
        });

        var semestres = [];
        var jornadas = [];
        var cantidades = [];
        for (var key in registrosPorSemestreYJornada) {
            var parts = key.split('-');
            semestres.push(parts[0]);
            jornadas.push(parts[1]);
            cantidades.push(registrosPorSemestreYJornada[key]);
        }

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: semestres.map((s, i) => `${s} - ${jornadas[i]}`),
                datasets: [{
                    label: 'Cantidad de registros por semetre relacionado con la jornada:',
                    data: cantidades,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        precision: 0
                    }
                }
            }
        });

        var aprobados = datee.filter(function(item) {
            return item.aprobacionEstudiante === 'SI';
        }).length;
        var rechazados = datee.filter(function(item) {
            return item.aprobacionEstudiante === 'NO';
        }).length;

        var ctx = document.getElementById('myPieChart').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Aprobados', 'Rechazados'],
                datasets: [{
                    data: [aprobados, rechazados],
                    backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Proporción de Aprobados y Rechazados'
                    }
                }
            }
        });

        var ids = datee.map(item => item.id);
        var semestres = datee.map(item => item.semestre);

        var ctx = document.getElementById('myLineChart').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ids,
                datasets: [{
                    label: 'Registros por semestre:',
                    data: semestres,
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
                    tension: 0.1
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

        var registrosPorFecha = {};
        datee.forEach(function(item) {
            var fecha = item.fecha;
            if (!registrosPorFecha[fecha]) {
                registrosPorFecha[fecha] = 1;
            } else {
                registrosPorFecha[fecha]++;
            }
        });

        var fechas = Object.keys(registrosPorFecha);
        var cantidades = Object.values(registrosPorFecha);

        var ctx = document.getElementById('myDateChart').getContext('2d');
        var myDateChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: fechas,
                datasets: [{
                    label: 'Cantidad de Registros por Fecha',
                    data: cantidades,
                    backgroundColor: 'rgba(255, 159, 64, 0.5)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        precision: 0
                    }
                }
            }
        });
    
    }

});