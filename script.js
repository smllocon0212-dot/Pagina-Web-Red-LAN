const titulo = document.getElementById("titulo");
const btnColor = document.getElementById("btnColor");


btnColor.addEventListener("click" , () => {
titulo.style.color = titulo.style.color === "white" ? "black" : "white" ;
});