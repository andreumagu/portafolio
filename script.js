
function recolocarTitle() {
    var anchoPantalla = window.innerWidth;
    var foto = document.getElementById("foto");
    var title = document.getElementById("title");

    if (anchoPantalla < 992) {
        foto.classList.add("order-12");
        title.classList.add("order-1");
    }else{
        foto.classList.remove("order-12");
        title.classList.remove("order-1");
    }
}

window.addEventListener("load", recolocarTitle);
window.addEventListener("resize", recolocarTitle);
