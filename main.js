let objeto1 = document.getElementById("1");
let objeto2 = document.getElementById("2");
let objeto3 = document.getElementById("3");
let objeto4 = document.getElementById("piedra");
let objeto5 = document.getElementById("papel");
let objeto6 = document.getElementById("tijera");
let resultado = document.getElementById("resultado");

let humano = null;
let computador = null;

objeto4.addEventListener("click", function() {
   objeto4.style.display = "inline";
   objeto5.style.display = "none";
   objeto6.style.display = "none";
   seleccionComputador();
   humano = piedra;
});

objeto5.addEventListener("click", function() {
   objeto4.style.display = "none";
   objeto5.style.display = "inline";
   objeto6.style.display = "none";
   seleccionComputador();
   humano = papel;
});

objeto6.addEventListener("click", function() {
   objeto4.style.display = "none";
   objeto5.style.display = "none";
   objeto6.style.display = "inline";
   seleccionComputador();
   humano = tijera;
});

function seleccionComputador () {
   opcionComputadora = Math.floor(Math.random() * 3);
   if (opcionComputadora === 0 ) {
      objeto1.style.display = "inline";
      objeto2.style.display = "none";
      objeto3.style.display = "none";
      computador = piedra;
   }
   else if (opcionComputadora === 1) {
      objeto1.style.display = "none";
      objeto2.style.display = "inline";
      objeto3.style.display = "none";
      computador = papel;
   }
   else if (opcionComputadora === 2) {
      objeto1.style.display = "none";
      objeto2.style.display = "none";
      objeto3.style.display = "inline";
      computador = tijera;
   }
};

resultado.addEventListener("click", () =>{
  if(humano == computador){
    alert("EMPATE");
  }
  else if(humano == piedra && computador == tijera || humano == papel && computador == piedra || humano == tijera && computador == papel){
    alert("GANA JUGADOR");
   }
  else{
    alert("GANA COMPUTADOR");    
  }

});

reset.addEventListener("click", () => {
   [objeto1, objeto2, objeto3, objeto4, objeto5, objeto6].forEach(objeto => objeto.style.display = "inline")});
