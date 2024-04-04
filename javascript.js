document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Relación Talla vs Masa Corporal',
                data: [], // Inicialmente no hay datos
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 1,
                pointBackgroundColor: '#ff0', // Color de fondo del punto
                pointRadius: 5 // Tamaño del punto
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Masa Corporal (kg)',
                        color: 'yellow'
                    },
                    min: 40,
                    max: 160,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'yellow'
                    },
                    color: 'yellow'
                },
                y: {
                    title: {
                        display: true,
                        text: 'Talla (cm)',
                        color: 'yellow'
                    },
                    min: 140,
                    max: 210,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'yellow'
                    },
                    color: 'yellow'
                }
            }
        }
    });

    function calculateIMC() {
        var bodyMass = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value);

        if (isNaN(bodyMass) || isNaN(height) || bodyMass <= 0 || height <= 0) {
            document.getElementById('result').innerHTML = 'Por favor, introduce una masa corporal y talla válidas.';
            return;
        }

        height = height / 100;

        var imc = bodyMass / (height * height);
        var message = 'Tu IMC es ' + imc.toFixed(1) + '. ';

        if (imc < 16) {
            message += 'Delgadez severa.';
        } else if (imc < 18.5) {
            message += 'Delgadez leve.';
        } else if (imc < 25) {
            message += 'Masa corporal normal.';
        } else if (imc < 30) {
            message += 'Sobrepeso.';
        } else {
            message += 'Obesidad.';
        }

        document.getElementById('result').innerHTML = message;

        // Agregar el punto asociado a los parámetros introducidos al conjunto de datos del gráfico
        chart.data.datasets[0].data.push({ x: bodyMass, y: height });

        // Actualizar el gráfico
        chart.update();
    }

    document.getElementById('calculateButton').addEventListener('click', calculateIMC);
});
