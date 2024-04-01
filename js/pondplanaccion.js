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

  window.location.href = 'welcomedec.html';
});

document.addEventListener("DOMContentLoaded", function() {
    var datee = JSON.parse(sessionStorage.getItem('datee'));
  
    if (datee) {
      const totalRegistros = datee.length;
      document.getElementById('totalRegistros').textContent = totalRegistros;
  
      // Crear un objeto para almacenar la suma de duraciones y el número de registros por fecha
      const duracionesPorFecha = {};
  
      // Iterar sobre los datos para sumar las duraciones y contar los registros por fecha
      datee.forEach(item => {
        const fecha = item.fecha;
        const duracion = parseInt(item.duracion.replace(/\D/g, '')); // Obtener la duración como número
        if (!isNaN(duracion)) {
          if (!duracionesPorFecha[fecha]) {
            duracionesPorFecha[fecha] = { suma: 0, count: 0 };
          }
          duracionesPorFecha[fecha].suma += duracion;
          duracionesPorFecha[fecha].count++;
        }
      });

      // Crear un objeto para almacenar la cantidad de actividades por programa
      const actividadesPorPrograma = {};

      // Contar las actividades por programa
      datee.forEach(item => {
          const programa = item.programa;
          if (!actividadesPorPrograma[programa]) {
              actividadesPorPrograma[programa] = 0;
          }
          actividadesPorPrograma[programa]++;
      });

      // Obtener los programas y cantidades para el gráfico de pastel
      const programas = Object.keys(actividadesPorPrograma);
      const cantidades = programas.map(programa => actividadesPorPrograma[programa]);

      // Crear el gráfico de pastel
      const ctx = document.getElementById('pieChart').getContext('2d');
      new Chart(ctx, {
          type: 'pie',
          data: {
              labels: programas,
              datasets: [{
                  label: 'Cantidad de actividades por programa',
                  data: cantidades,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.7)',
                      'rgba(54, 162, 235, 0.7)',
                      'rgba(255, 206, 86, 0.7)',
                      'rgba(75, 192, 192, 0.7)',
                      'rgba(153, 102, 255, 0.7)',
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              title: {
                  display: true,
                  text: 'Cantidad de actividades por programa'
              }
          }
      });

            // Crear un objeto para almacenar la duración de las actividades por id
        const duracionesPorId = {};

        // Iterar sobre los datos para sumar las duraciones por id
        datee.forEach(item => {
            const id = item.id;
            const duracion = parseInt(item.duracion.replace(/\D/g, '')); // Obtener la duración como número
            if (!isNaN(duracion)) {
                if (!duracionesPorId[id]) {
                    duracionesPorId[id] = 0;
                }
                duracionesPorId[id] += duracion;
            }
        });

        // Obtener los ids y duraciones para el gráfico de barras
        const ids = Object.keys(duracionesPorId);
        const duraciones = ids.map(id => duracionesPorId[id]);

        // Crear el gráfico de barras
        const ctxBar = document.getElementById('barChart').getContext('2d');
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ids,
                datasets: [{
                    label: 'Duración de las actividades por registro',
                    data: duraciones,
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Duración de las actividades por registro'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

            // Crear un array para almacenar los datos de duración y participantes
    const dataDuracionParticipantes = datee.map(item => ({
        x: parseInt(item.duracion.replace(/\D/g, '')), // Obtener la duración como número
        y: item.participantes.split(' y ').length // Obtener la cantidad de participantes
    }));

    // Crear el gráfico de dispersión
    const ctxScatter = document.getElementById('scatterChart').getContext('2d');
    new Chart(ctxScatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Duración de actividades por Participantes',
                data: dataDuracionParticipantes,
                backgroundColor: 'rgba(255, 99, 132, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Duración de actividades por Participantes'
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Duración (minutos)'
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Cantidad de participantes'
                    }
                }
            }
        }
    });

        // Crear un objeto para almacenar la duración total de las actividades por fecha
    const duracionPorFecha = {};

    // Iterar sobre los datos para sumar las duraciones por fecha
    datee.forEach(item => {
        const fecha = item.fecha;
        const duracion = parseInt(item.duracion.replace(/\D/g, '')); // Obtener la duración como número
        if (!isNaN(duracion)) {
            if (!duracionPorFecha[fecha]) {
                duracionPorFecha[fecha] = 0;
            }
            duracionPorFecha[fecha] += duracion;
        }
    });

    // Obtener las fechas y duraciones para el gráfico de líneas
    const fechas = Object.keys(duracionPorFecha);
    const duracioness = fechas.map(fecha => duracionPorFecha[fecha]);

    // Crear el gráfico de líneas
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: 'Duración total de actividades por fecha',
                data: duracioness,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Evolución de la duración de las actividades'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    }
});