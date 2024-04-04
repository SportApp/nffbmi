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

    if (imc < 16) {
        message += 'Delgadez severa.';
    } else if (imc < 17) {
        message += 'Delgadez moderada.';
    } else if (imc < 18.5) {
        message += 'Delgadez leve.';
    } else if (imc < 22) {
        message += 'Peso ciclista competición.';
    } else if (imc < 25) {
        message += 'Peso normal.';
    } else if (imc < 30) {
        message += 'Sobrepeso.';
    } else if (imc < 35) {
        message += 'Obesidad grado I.';
    } else if (imc < 40) {
        message += 'Obesidad grado II.';
    } else {
        message += 'Obesidad de grado III (obesidad mórbida).';
    }

    document.getElementById('result').innerHTML = message;

    // Dibujar el muñeco con más o menos barriga según el IMC
    var visualizer = document.getElementById('visualizer');
    if (imc < 16) {
        visualizer.innerHTML = '<img src="underweight.png" alt="Delgadez severa">';
    } else if (imc < 18.5) {
        visualizer.innerHTML = '<img src="underweight.png" alt="Delgadez leve">';
    } else if (imc < 22) {
        visualizer.innerHTML = '<img src="cyclist.png" alt="Peso ciclista competición">';
   } else if (imc < 25) {
        visualizer.innerHTML = '<img src="healthy.png" alt="Peso normal">';
  } else if (imc < 30) {
        visualizer.innerHTML = '<img src="overweight.png" alt="Sobrepeso">';
    } else if (imc < 35) {
        visualizer.innerHTML = '<img src="obesity1.png" alt="Obesidad grado I">';
    } else if (imc < 40) {
        visualizer.innerHTML = '<img src="obesity2.png" alt="Obesidad grado II">';
    } else {
        visualizer.innerHTML = '<img src="obesity3.png" alt="Obesidad de grado III">';
    }
}
