function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Por favor, introduce un peso y altura válidos.';
        document.getElementById('visualizer').innerHTML = '';
        return;
    }

    // Convertir altura de cm a m
    height = height / 100; // Convertir a metros

    var imc = weight / (height * height);
    var message = 'Tu IMC es ' + imc.toFixed(1) + '. '; // Mostrar solo un decimal

    if (imc < 18.5) {
        message += 'Estás bajo peso.';
    } else if (imc < 25) {
        message += 'Tienes un peso saludable.';
    } else if (imc < 30) {
        message += 'Tienes sobrepeso.';
    } else {
        message += 'Tienes obesidad.';
    }

    document.getElementById('result').innerHTML = message;

    // Dibujar el muñeco con más o menos barriga según el IMC
    var visualizer = document.getElementById('visualizer');
    if (imc < 18.5) {
        visualizer.innerHTML = '<img src="underweight.png" alt="Bajo peso">';
    } else if (imc < 25) {
        visualizer.innerHTML = '<img src="healthy.png" alt="Peso saludable">';
    } else if (imc < 30) {
        visualizer.innerHTML = '<img src="overweight.png" alt="Sobrepeso">';
    } else {
        visualizer.innerHTML = '<img src="obese.png" alt="Obesidad">';
    }

    // Obtener el contexto del canvas para la gráfica
    var ctx = document.getElementById('myChart').getContext('2d');

    // Crear un nuevo gráfico de dispersión (scatter plot)
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Peso vs Altura',
                data: [{x: height, y: weight}],
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // Color azul más claro
                borderColor: 'rgba(54, 162, 235, 1)', // Color azul
                borderWidth: 2,
                pointRadius: 10, // Tamaño del punto
                pointBackgroundColor: 'rgba(54, 162, 235, 1)' // Color del punto
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Altura (cm)',
                        font: {
                            size: 14 // Tamaño de fuente del título del eje X
                        },
                        color: 'yellow' // Color del título del eje X
                    },
                    min: 150, // Rango mínimo para la altura
                    max: 210, // Rango máximo para la altura
                    ticks: {
                        font: {
                            size: 12 // Tamaño de fuente del eje X
                        },
                        color: 'yellow' // Color de los ticks del eje X
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Peso (kg)',
                        font: {
                            size: 14 // Tamaño de fuente del título del eje Y
                        },
                        color: 'yellow' // Color del título del eje Y
                    },
                    min: 40, // Rango mínimo para el peso
                    max: 130, // Rango máximo para el peso
                    ticks: {
                        font: {
                            size: 12 // Tamaño de fuente del eje Y
                        },
                        color: 'yellow' // Color de los ticks del eje Y
                    }
                }
            }
        }
    });
}
