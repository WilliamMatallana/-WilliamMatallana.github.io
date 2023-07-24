let objeto1 = document.getElementById("0");
let objeto2 = document.getElementById("1");
let objeto3 = document.getElementById("2");
let objeto4 = document.getElementById("0.0");
let objeto5 = document.getElementById("1.0");
let objeto6 = document.getElementById("2.0");

objeto4.addEventListener("click", function() {
   objeto4.style.display = "inline";
   objeto5.style.display = "none";
   objeto6.style.display = "none";
   seleccionComputador();
});

objeto5.addEventListener("click", function() {
   objeto4.style.display = "none";
   objeto5.style.display = "inline";
   objeto6.style.display = "none";
   seleccionComputador();
});

objeto6.addEventListener("click", function() {
   objeto4.style.display = "none";
   objeto5.style.display = "none";
   objeto6.style.display = "inline";
   seleccionComputador();
});

function seleccionComputador () {
   dado2 = Math.floor(Math.random() * 3);
   if (dado2 === 0 ) {
      objeto1.style.display = "inline";
      objeto2.style.display = "none";
      objeto3.style.display = "none";
   }
   else if (dado2 === 1) {
      objeto1.style.display = "none";
      objeto2.style.display = "inline";
      objeto3.style.display = "none";
   }
   else if (dado2 === 2) {
      objeto1.style.display = "none";
      objeto2.style.display = "none";
      objeto3.style.display = "inline";
   }
};

reset.addEventListener("click", () => {
   
   objeto1.style.display = "inline";
   objeto2.style.display = "inline";
   objeto3.style.display = "inline";
   objeto4.style.display = "inline";
   objeto5.style.display = "inline";
   objeto6.style.display = "inline";

});

boton3.addEventListener("click", () => {

   if (objeto1 == dado2) {
      resultado.textContent = "Empate!";
   }
   else {
      resultado.textContent = "ganó jugador"
   }

});