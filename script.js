const boton = document.getElementById("boton");
const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");

boton.addEventListener("click", () => {
    inicio.style.display = "none";
    historia.style.display = "block";
});

function escribir(){

    let mensaje = 
    "¡Guau! 🐾\n\nHola Chime...\n\nEstaba esperando por ti.\n\nEste pequeño mundo fue creado especialmente para ti.\n\n¿Lista para comenzar tu aventura?";

    let i = 0;

    texto.innerHTML = "";

    let intervalo = setInterval(() => {

        texto.innerHTML += mensaje[i];

        i++;

        if(i >= mensaje.length){

            clearInterval(intervalo);

        }

    },50);

}
