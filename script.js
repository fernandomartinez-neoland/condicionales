const A = document.getElementById("A");
const B = document.getElementById("B");
const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");
let C = 0;
calcular.addEventListener("click", () => {
    C = parseInt(A.value) + parseInt(B.value)
    if (A.value > B.value) {
        resultado.textContent = "A es mayor que B y vale " + C;
    } else if (A.value < B.value) {
        resultado.textContent = "B es mayor que A y vale " + C;
    } else {
        resultado.textContent = "A y B son iguales y vale " + C;
    }
})
