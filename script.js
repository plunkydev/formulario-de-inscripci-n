function comprobarContrasenas() {
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password-confir").value;
    if (password1 === password2) {
        document.getElementById("password-confir").classList.add("borde-focus");
        document.getElementById("password").classList.add("borde-focus");
        document.getElementById('match').style.color = "#596D48"
        document.getElementById("match").innerHTML = "Las contraseñas coinciden";
    } else {
        document.getElementById("password-confir").classList.remove("borde-focus");
        document.getElementById("password").classList.remove("borde-focus");
        document.getElementById('match').style.color = "#de5570"
        document.getElementById("match").innerHTML = "*Las contraseñas no coinciden";
    }
}