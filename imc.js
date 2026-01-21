const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
    const imc = peso.value / ((altura.value / 100) ** 2);
    if (imc < 18.5) {
        resultado.textContent = `Bajo peso: ${imc.toFixed(2)}`
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.textContent = `Peso normal: ${imc.toFixed(2)}`
    } else {
        resultado.textContent = `Sobrepeso: ${imc.toFixed(2)}`
    }
});
