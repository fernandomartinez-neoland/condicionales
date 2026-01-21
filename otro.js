const pass = document.getElementById("password");
const resultado = document.getElementById("resultado");
const login = document.getElementById("login");

login.addEventListener("click", () => {
    if (pass.value === "1234") {
        resultado.textContent = "Acceso concedido"
        resultado.style.color = "green"
    } else {
        resultado.textContent = "Acceso denegado"
        resultado.style.color = "red"
    }
})
