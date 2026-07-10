const boton = document.getElementById("boton");
const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");

boton.addEventListener("click", () => {
    inicio.style.display = "none";
    historia.style.display = "block";
});
