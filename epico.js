document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    logo.style.display = "block"; // Mostrar el logo al cargar la página

    setTimeout(function() {
        logo.style.display = "none"; // Ocultar el logo después de 3 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
});
