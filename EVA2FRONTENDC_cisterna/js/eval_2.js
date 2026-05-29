function validarFormulario() {

    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoFechaNacimiento = document.getElementById('fecha_nac');
    let campoEmail = document.getElementById('email');
    let campoTelefono = document.getElementById('telefono');
    let campoPassword = document.getElementById('password');
    let campoPassword2 = document.getElementById('password2');

    let formularioValido = true;

    // VALIDAR NOMBRE
    if (campoNombre.value.trim() == '' || campoNombre.value.trim().length < 3) {
        campoNombre.classList.add('is-invalid');
        campoNombre.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    }

    // VALIDAR APELLIDO
    if (campoApellido.value.trim() == '' || campoApellido.value.trim().length < 3) {
        campoApellido.classList.add('is-invalid');
        campoApellido.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoApellido.classList.remove('is-invalid');
        campoApellido.classList.add('is-valid');
    }

    // VALIDAR RUT
    if (!validarRut(campoRut.value)) {
        campoRut.classList.add('is-invalid');
        campoRut.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    }

    // VALIDAR FECHA NACIMIENTO
    if (campoFechaNacimiento.value == '') {
        campoFechaNacimiento.classList.add('is-invalid');
        campoFechaNacimiento.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoFechaNacimiento.classList.remove('is-invalid');
        campoFechaNacimiento.classList.add('is-valid');
    }

    // VALIDAR EMAIL
    if (!validarEmail(campoEmail.value)) {
        campoEmail.classList.add('is-invalid');
        campoEmail.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoEmail.classList.remove('is-invalid');
        campoEmail.classList.add('is-valid');
    }

    // VALIDAR TELEFONO
    if (!validarTelefono(campoTelefono.value)) {
        campoTelefono.classList.add('is-invalid');
        campoTelefono.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoTelefono.classList.remove('is-invalid');
        campoTelefono.classList.add('is-valid');
    }

    // VALIDAR PASSWORD
    if (!validarPassword(campoPassword.value)) {
        campoPassword.classList.add('is-invalid');
        campoPassword.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoPassword.classList.remove('is-invalid');
        campoPassword.classList.add('is-valid');
    }

    // VALIDAR REPETIR PASSWORD
    if (campoPassword2.value == '' || campoPassword2.value != campoPassword.value) {
        campoPassword2.classList.add('is-invalid');
        campoPassword2.classList.remove('is-valid');
        formularioValido = false;
    } else {
        campoPassword2.classList.remove('is-invalid');
        campoPassword2.classList.add('is-valid');
    }

    return formularioValido;
}


// VALIDAR ELEMENTOS EN TIEMPO REAL
function elementoValido() {

    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoTelefono = document.getElementById('telefono');
    let campoEmail = document.getElementById('email');
    let campoPassword = document.getElementById('password');
    let campoPassword2 = document.getElementById('password2');

    // NOMBRE
    if (campoNombre.value.trim() != '' && campoNombre.value.trim().length >= 3) {
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    } else {
        campoNombre.classList.remove('is-valid');
        campoNombre.classList.add('is-invalid');
    }

    // APELLIDO
    if (campoApellido.value.trim() != '' && campoApellido.value.trim().length >= 3) {
        campoApellido.classList.remove('is-invalid');
        campoApellido.classList.add('is-valid');
    } else {
        campoApellido.classList.remove('is-valid');
        campoApellido.classList.add('is-invalid');
    }

    // RUT
    if (validarRut(campoRut.value)) {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    } else {
        campoRut.classList.remove('is-valid');
        campoRut.classList.add('is-invalid');
    }

    // TELEFONO
    if (validarTelefono(campoTelefono.value)) {
        campoTelefono.classList.remove('is-invalid');
        campoTelefono.classList.add('is-valid');
    } else {
        campoTelefono.classList.remove('is-valid');
        campoTelefono.classList.add('is-invalid');
    }

    // EMAIL
    if (validarEmail(campoEmail.value)) {
        campoEmail.classList.remove('is-invalid');
        campoEmail.classList.add('is-valid');
    } else {
        campoEmail.classList.remove('is-valid');
        campoEmail.classList.add('is-invalid');
    }

    // PASSWORD
    if (validarPassword(campoPassword.value)) {
        campoPassword.classList.remove('is-invalid');
        campoPassword.classList.add('is-valid');
    } else {
        campoPassword.classList.remove('is-valid');
        campoPassword.classList.add('is-invalid');
    }

    // REPETIR PASSWORD
    if (campoPassword2.value != '' && campoPassword2.value == campoPassword.value) {
        campoPassword2.classList.remove('is-invalid');
        campoPassword2.classList.add('is-valid');
    } else {
        campoPassword2.classList.remove('is-valid');
        campoPassword2.classList.add('is-invalid');
    }
}


function validarFechaNacimiento() {

    let campoFechaNacimiento = document.getElementById('fecha_nac');

    if (campoFechaNacimiento.value == '') {
        campoFechaNacimiento.classList.add('is-invalid');
        campoFechaNacimiento.classList.remove('is-valid');
    } else {
        campoFechaNacimiento.classList.remove('is-invalid');
        campoFechaNacimiento.classList.add('is-valid');
    }
}


// VALIDAR EMAIL
function validarEmail(valor) {
    const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
    return regex.test(valor);
}


// VALIDAR TELEFONO CHILENO
function validarTelefono(valor) {
    const regex = /^\+569\d{8}$/;
    return regex.test(valor);
}


// VALIDAR CONTRASEÑA
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,12}$/;
    return regex.test(password);
}


// VALIDAR RUT CHILENO
function validarRut(rutCompleto) {

    if (rutCompleto.trim() == '') {
        return false;
    }

    // ELIMINAR PUNTOS Y GUION
    rutCompleto = rutCompleto.replace(/\./g, '').replace('-', '');

    // VALIDAR LONGITUD
    if (rutCompleto.length < 8) {
        return false;
    }

    let cuerpo = rutCompleto.slice(0, -1);
    let dv = rutCompleto.slice(-1).toUpperCase();

    if (!/^\d+$/.test(cuerpo)) {
        return false;
    }

    let suma = 0;
    let multiplo = 2;

    // CALCULAR DIGITO VERIFICADOR
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplo;
        multiplo++;

        if (multiplo > 7) {
            multiplo = 2;
        }
    }

    let dvEsperado = 11 - (suma % 11);

    if (dvEsperado == 11) {
        dvEsperado = '0';
    } else if (dvEsperado == 10) {
        dvEsperado = 'K';
    } else {
        dvEsperado = dvEsperado.toString();
    }

    return dv == dvEsperado;
}


// FORMATEAR RUT AUTOMÁTICAMENTE
function formatearRut(input) {

    let valor = input.value.replace(/\./g, '').replace('-', '');

    if (valor.length == 0) {
        input.value = '';
        return;
    }

    let cuerpo = valor.slice(0, -1);
    let dv = valor.slice(-1);

    cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (cuerpo.length > 0) {
        input.value = cuerpo + '-' + dv;
    }
}


function cambiar_fondo() {

    // LISTA DE COLORES
    let colores = [
        '#f8d7da',
        '#d1e7dd',
        '#cff4fc',
        '#fff3cd',
        '#e2e3e5',
        '#000000',
        '#d0bfff',
        '#bde0fe',
        '#a9def9',
        '#caffbf',
        '#ffc6ff',
        '#ffadad',
        '#9bf6ff',
        '#bdb2ff',
        '#6c757d'
    ];

    // GENERAR COLOR ALEATORIO
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    // CAMBIAR COLOR DEL BODY
    document.body.style.backgroundColor = colorAleatorio;

    // CAMBIAR COLOR ESFERA
    document.documentElement.style.setProperty('--color-esfera', colorAleatorio);
}


function mensajeGuardado() {
    alert('Tus cambios han sido guardados correctamente.');
}


function verificarFormulario() {

    let valido = validarFormulario();

    if (valido == true) {
        alert('Formulario enviado correctamente.');
    } else {
        alert('Debe completar correctamente todos los campos obligatorios.');
    }
}


function actualizarProgreso() {

    let totalCampos = 8;
    let completados = 0;

    // OBTENER VALORES
    let nombre = document.getElementById('fname').value;
    let apellido = document.getElementById('lname').value;
    let rut = document.getElementById('rut').value;
    let fecha = document.getElementById('fecha_nac').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    // VALIDACIONES
    if (nombre.trim().length >= 3) {
        completados++;
    }

    if (apellido.trim().length >= 3) {
        completados++;
    }

    if (validarRut(rut)) {
        completados++;
    }

    if (fecha != '') {
        completados++;
    }

    if (validarEmail(email)) {
        completados++;
    }

    if (validarTelefono(telefono)) {
        completados++;
    }

    if (validarPassword(password)) {
        completados++;
    }

    if (password2 == password && password2 != '') {
        completados++;
    }

    // CALCULAR %
    let porcentaje = Math.round((completados / totalCampos) * 100);

    // BARRA
    let barra = document.getElementById('barraProgreso');

    barra.style.width = porcentaje + '%';
    barra.innerText = porcentaje + '%';

    // COLORES
    barra.classList.remove('bg-danger', 'bg-warning', 'bg-info', 'bg-success');

    if (porcentaje <= 25) {
        barra.classList.add('bg-danger');
    } else if (porcentaje <= 50) {
        barra.classList.add('bg-warning');
    } else if (porcentaje <= 75) {
        barra.classList.add('bg-info');
    } else {
        barra.classList.add('bg-success');
    }
}


function limpiarFormulario() {

    // FORMULARIO
    let formulario = document.querySelector('form');
    formulario.reset();

    // QUITAR VALIDACIONES
    let campos = document.querySelectorAll('.form-control');

    campos.forEach(campo => {
        campo.classList.remove('is-valid');
        campo.classList.remove('is-invalid');
    });

    // ESPERAR RESET DEL FORM
    setTimeout(() => {
        let barra = document.getElementById('barraProgreso');
        barra.style.width = '0%';
        barra.innerText = '0%';
        barra.className = 'progress-bar progress-bar-striped progress-bar-animated bg-danger';
    }, 50);
}
