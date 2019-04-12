// const id = datos.usuarios;
// var usr = {
//         "nombre":"",
//         "tel": "",
//         "rol": "",
//         "user_num": "",
//         "correo": "",
//         "contraseña": "",
//         "genero": "",
//         "imagen": "",
//         "descripcion": "",
//         "publicaciones": [{
//             "privadas": {
//                 "titulo_post": "",
//                 "descripcion_post": "",
//                 "imagen_post": "",
//                 "fecha_posot": ""
//             }
//         },
//         {
//             "publicas": {
//                 "titulo_post": "",
//                 "descripcion_post": "",
//                 "imagen_post": "",
//                 "fecha_posot": ""
//             }
//         }]
//     };

// var i = 0;

// function register_send(){
//     i++;
//     let user = document.getElementById('user').value;
//     let pass = document.getElementById('pass').value;
//     let gend = document.getElementById('gend').value;
//     id.push(usr);
//     id[i].nombre = user;
//     id[i].contraseña = pass;
//     id[i].genero = gend;
//     id[i].rol = "simple";
//     id[i].user_num = i;
//     console.log(id);
// };

window.onload = inicializar();
var formulario;
var refMensajes;
var panel;


function inicializar(){
    formulario = document.getElementById('formulario');
    // formulario.addEventListener('submit', enviarDatosFirebase, false);
    document.getElementById("btn").addEventListener("click",enviarDatosFirebase)
    panel = document.getElementById('panel');
    iniciarFirebase();
    mostrarMensajesDeFirebase();
}

function mostrarMensajesDeFirebase(){
    refMensajes = firebase.database().ref().child("mensajes");
    refMensajes.on("value", function(snap){
    var todosLosMensajes = "";


       let datos = snap.val();
        for(var key in datos){
            todosLosMensajes += `</br><strong>${datos[key].nombre}: </strong>` + datos[key].mensaje;
        }
        panel.innerHTML = todosLosMensajes;
    })
     
}

function enviarDatosFirebase(event){
    if(document.getElementById("Mensaje").value === ""){
        alert('Escribe Algo...');
    }else{
        refMensajes.push({mensaje: document.getElementById('Mensaje').value, nombre: "..."});
        document.getElementById("Mensaje").value = "";
    }
}

function iniciarFirebase(){
    var config = {
        apiKey: "AIzaSyDwE3xmoIsU262qBZ_j73r6ISCGUYO4e7U",
        authDomain: "mensajesmohascript.firebaseapp.com",
        databaseURL: "https://mensajesmohascript.firebaseio.com",
        projectId: "mensajesmohascript",
        storageBucket: "mensajesmohascript.appspot.com",
        messagingSenderId: "624418399559"
    };
    firebase.initializeApp(config);
}