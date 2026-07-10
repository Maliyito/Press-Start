const boton = document.getElementById("boton");

const inicio = document.getElementById("inicio");

const historia = document.getElementById("historia");

const continuar = document.getElementById("continuar");

const mundo1 = document.getElementById("mundo1");

const texto = document.getElementById("texto");



boton.addEventListener("click",()=>{

    inicio.style.display="none";

    historia.style.display="flex";

    escribir();

});



function escribir(){

let mensaje = 
"¡Guau! 🐾\n\nHola Chime...\n\nEstaba esperando por ti.\n\nEste pequeño mundo fue creado especialmente para ti.\n\n¿Lista para comenzar tu aventura? ✨";


let i=0;

texto.innerHTML="";


let intervalo=setInterval(()=>{

texto.innerHTML += mensaje[i];

i++;


if(i>=mensaje.length){

clearInterval(intervalo);

}


},50);


}



continuar.addEventListener("click",()=>{

historia.style.display="none";

mundo1.style.display="flex";

});
