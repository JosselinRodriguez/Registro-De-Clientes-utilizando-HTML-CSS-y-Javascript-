const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const cedula = document.getElementById("identification");
const estadocivil = document.getElementById("civilstatus");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", " Introduce un nombre valido*");
        condicion = false;
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        mostrarMensajeError("surname", "Introduce un Apellido valido");
        condicion = false;

    }
    if (
        cedula.value.length != 10 ||
        cedula.value.trim() == "" ||
        isNaN(cedula.value)
    ) {
        mostrarMensajeError("identification", "Introduce tu numero de cedula valido*");
        condicion = false;

    }
    if (estadocivil.value.length < 1 || estadocivil.value.trim() == "") {
        mostrarMensajeError("civilstatus", "Introduce tu estado civil valido");
        condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Introduce un Correo valido*");
        condicion = false;
    }
    if (
        celular.value.length != 10 ||
        celular.value.trim() == "" ||
        isNaN(celular.value)
    ) {
        mostrarMensajeError("mobile", "Introduce numero de Celular valido*");
        condicion = false;
    }
    if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
        mostrarMensajeError("password", "Introduce una Contraseña valida*");
        condicion = false;
    }
    if (contrasenia2.value != contrasenia.value) {
        mostrarMensajeError("repeatPassword", "Introduce una Contraseña sin error*");
        condicion = false;
    }
    if (!terminosYcondiciones.checked) {
        mostrarMensajeError("termsAndConditions", "Aceptar*");
        condicion = false;
    } else {
        mostrarMensajeError("termsAndConditions", "");
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Muy Bien su informacion se guardo exitosamente.";
}