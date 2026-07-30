const home = document.getElementById("home");
const map = document.getElementById("map");

document.getElementById("startBtn").addEventListener("click", function(){

home.style.display = "none";

map.style.display = "block";

});

document.getElementById("backBtn").addEventListener("click", function(){

map.style.display = "none";

home.style.display = "flex";

});

document.querySelector(".pejabat").addEventListener("click", function(){

alert("Anda memilih Pejabat");

});

document.querySelector(".tandas").addEventListener("click", function(){

alert("Anda memilih Tandas");

});

document.querySelector(".surau").addEventListener("click", function(){

alert("Anda memilih Surau");

});

document.querySelector(".bilik").addEventListener("click", function(){

alert("Anda memilih Bilik Mesyuarat");

});
