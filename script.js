function openMap() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("mapPage").classList.remove("hidden");
    document.getElementById("mapPage").style.display = "block";
}

function goHome() {
    document.getElementById("mapPage").classList.add("hidden");
    document.getElementById("mapPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}

function showPlace(place) {
    alert("Anda memilih: " + place);
}
