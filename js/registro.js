//La validación del mínimo de caracteres se hace en el archivo html con "minlength". Usado en el campo de contraseña
//lo mismo con el máximo, con el atributo "maxlength"

//darle constantes a los elementos de formulario
const formu = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const rut = document.getElementById("rut");
const email = document.getElementById("email");
const fecha = document.getElementById("fecha_nac");
const contra1 = document.getElementById("password");
const contra2 = document.getElementById("validate-password");
const telef = document.getElementById("telefono");
const coment = document.getElementById("comentario");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");


//regex para validar rut
const regexRut = new RegExp('([0-9]{8})+[-]+[0-9/k/K]{1}');
const regexEmail = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)");
const regexTelef = new RegExp("[0-9]{9}")

formu.addEventListener('submit', (e) =>{
    e.preventDefault();

    revisarCampos();
});

function revisarCampos() {
    //conseguir valores de los Campo:
    const nombreValor = nombre.value.trim();
    const rutValor = rut.value.trim();
    const emailValor = email.value.trim();
    const fechaValor = fecha.value;
    const contra1Valor = contra1.value;
    const contra2Valor = contra2.value;
    const telefValor = telef.value.replace(/ /g, "");
    const comentValor = coment.value.trim();
    const apellidoValor = apellido.value.trim();
    const usuarioValor = usuario.value.trim();

   
        //nombre
    if(nombreValor === null , nombreValor.length == 0 ) {
        mostrarError(nombre,'El campo está vacío');

    } else {
        afirmarCorrecto(nombre)
    }
    
        //apellido
    if(apellidoValor === null , apellidoValor.length == 0 ) {
        mostrarError(apellido,'El campo está vacío');

    } else {
        afirmarCorrecto(apellido)
    }

        //nombre de usuario
    if(usuarioValor === null , usuarioValor.length == 0 ) {
        mostrarError(usuario,'El campo está vacío');
    } else {
        afirmarCorrecto(usuario)
    }

        //email
    if(emailValor === null , emailValor.length == 0 ) {
        mostrarError(email,'El campo está vacío');
    } else if(!regexEmail.test(emailValor)) {
        //viendo si se adapta al regex de mail
        mostrarError(email,'El formato del email está incorrecto. tiene que ser ej: correo@email.com');
    } else {
        afirmarCorrecto(email)
    }

        //contraseña 1
    if(contra1Valor === null, contra1Valor.length == 0 ) {
        mostrarError(contra1,'El campo está vacío');
    } else if(contra1Valor.length < 8) {
        mostrarError(contra1,'El largo de la contraseña tiene que ser por lo menos 8 caracteres.');
    } else {
        afirmarCorrecto(contra1)
    }

        //Contraseña 2
    if(contra2Valor === null, contra2Valor.length == 0 ) {
        mostrarError(contra2,'El campo está vacío');
    } else if(contra1Valor != contra2Valor) {
        mostrarError(contra2,'La contraseña acá no calza la contraseña escrita anteriormente.');
    } else {
        afirmarCorrecto(contra2)
    }


}
//cambia el elemento small que es invisible y está debajo de los campos del formulario para mostrar el error dependiendo de la situación
function mostrarError (campo, mensaje) {

    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = mensaje;

    divPadre.classList.add("error");
    small.style = 'color: red;'
}

//lo mismo que mostrarError() pero con el mensaje fijo de un ✔ verde
function afirmarCorrecto (campo) {
    const divPadre = campo.parentElement;
    const small = divPadre.querySelector("small");

    small.innerText = '✔';

    divPadre.classList.add("correcto");
    small.style = 'color: green;'
}


//FUNCION QUE PIDEN DEL RUT

rut.addEventListener('keyup', (e) =>{
    revisarCaracteres();
});

function revisarCaracteres () {
    const rutNumero = rut.value.trim();
    let caracteresFaltantes = 10 - rutNumero.length;
    const divPadre = rut.parentElement;
    const small = divPadre.querySelector("small");

    if (caracteresFaltantes >= 1) {
        small.innerText = 'Faltan '+caracteresFaltantes +' caracteres.';
        divPadre.classList.add("error");
        small.style = 'color: red;';
    } else if (caracteresFaltantes == 0) {
        small.innerText = 'Número de caracteres correcto';
        divPadre.classList.add("correcto");
        small.style = 'color: green;';
    } else {
        small.innerText = 'Te excediste con el número de caracteres, tienen que ser 10';
        divPadre.classList.add("error");
        small.style = 'color: red;';
    }

}