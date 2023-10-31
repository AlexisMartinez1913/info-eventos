

function validarEmail() {
    const emailInput = document.querySelector('#correo');
    const emailValidation = document.querySelector('#email-validacion');
    const email = emailInput.value;

    // Expresión regular para validar un correo 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
        emailValidation.style.color = "green";
        emailValidation.textContent = "Correo válido.";
    } else {
        emailValidation.style.color = "red";
        emailValidation.textContent = "Ingresa un correo válido.";
    }
}

function validarPassword() {
    const passwordInput = document.querySelector("#ps");
    const passwordValidation = document.querySelector("#password-validacion");
    const password = passwordInput.value;

    // Expresion regular
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*]/;

    const isValid =
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        specialCharRegex.test(password);

    if (isValid) {
        passwordValidation.style.color = "green";
        passwordValidation.textContent = "Contraseña válida";
    } else {
        passwordValidation.style.color = "red";
        passwordValidation.textContent = "Incluye al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial.";
    }
}
