window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknapp").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#links1").classList.toggle("hidden");
    document.querySelector("#links2").classList.toggle("hidden");

    let erSkjult = document.querySelector("#links1").classList.contains("hidden");

    if (erSkjult == true){
        document.querySelector("#menuknapp").textContent = "☰"
    } else {
        document.querySelector("#menuknapp").textContent = "x"
    }
}
