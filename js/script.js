document.addEventListener("DOMContentLoaded", function() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const sumarBtn = document.getElementById("sumarBtn");
    const restarBtn = document.getElementById("restarBtn");
    const multiplicarBtn = document.getElementById("multiplicarBtn");
    const dividirBtn = document.getElementById("dividirBtn");
    const outputBox = document.getElementById("outputBox");

    // Agregar evento para el botón de sumar
    sumarBtn.addEventListener("click", function() {
        numero1 = parseFloat(num1.value);
        numero2 = parseFloat(num2.value);

        resultado = numero1 + numero2;
        outputBox.textContent = resultado.toFixed(2);
    });
    // Agregar evento para el botón de restar
    restarBtn.addEventListener("click", function() {
        numero1 = parseFloat(num1.value);
        numero2 = parseFloat(num2.value);

        resultado = numero1 - numero2;
        outputBox.textContent = resultado.toFixed(2);
    });
    // Agregar evento para el botón de multiplicar
    multiplicarBtn.addEventListener("click", function() {
        numero1 = parseFloat(num1.value);
        numero2 = parseFloat(num2.value);

        resultado = numero1 * numero2;
        outputBox.textContent = resultado.toFixed(2);
    });
    // Agregar evento para el botón de dividir
    dividirBtn.addEventListener("click", function() {
        numero1 = parseFloat(num1.value);
        numero2 = parseFloat(num2.value);

        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            outputBox.textContent = resultado.toFixed(2);
        } else {
            outputBox.textContent = "Error: División por cero";
        }
    }
    );



});