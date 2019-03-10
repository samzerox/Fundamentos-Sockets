var socket = io();

// On es para escuchar
socket.on('connect', function() {
    console.log("Conectado al servidor");

});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');

});

// emit es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Sam',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);

});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});