var PhaserRecords;
var lastMessage;
var user = "Cat Doe";
var connectedUser;
var NombreJ1 = 'Jugador 1';
var NombreJ2 = 'Jugador 2';
var server = 'conectado';

//Get active users
function getUsers(callback) {
	$.ajax({
		method: "GET",
		url: "/users/"
	}).done(function(users) {
		console.log('Active users: ' + JSON.stringify(users));
		callback(users.length);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
		callback('0');
	})
}

//Set active user
function setUser(user) {
	$.ajax({
		method: "POST",
		url: "/users/",
		data: JSON.stringify(user),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(user) {
		console.log('Active user: ' + JSON.stringify(user));
		connectedUser = user;
		//callback(message);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Update user
function updateUser(user) {
	$.ajax({
		method: "PUT",
		url: "/users/" + user.id,
		data: JSON.stringify(user),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(user) {
		console.log("Message updated: " + JSON.stringify(user));
		connectedUser = user;
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Removes active user
function removeUser(userId) {
	$.ajax({
		method: "DELETE",
		url: "/users/" + userId,
	}).done(function(userId) {
		console.log('User disconnected: ' + userId);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Load messages from server
function loadMessages(callback) {

	console.log("Loading all messages...");

	$.ajax({
		method: "GET",
		url: "/messages/"
	}).done(function(messages) {
		console.log('Messages loaded: ' + JSON.stringify(messages));
		callback(messages);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Load messages since last message (parameter)
function loadLastMessage(messageId, callback) {
	$.ajax({
		method: "GET",
		url: "/messages/" + messageId
	}).done(function(messages) {
		callback(messages);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Send a message
function createMessage(message, callback) {

	console.log("Sending message...");

	$.ajax({
		method: "POST",
		url: "/messages/",
		data: JSON.stringify(message),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(message) {
		console.log('Message sent: ' + JSON.stringify(message));
		callback(message);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Update message in server
function updateMessage(message) {

	console.log("Updating message... ");

	$.ajax({
		method: "PUT",
		url: "/messages/" + message.id,
		data: JSON.stringify(message),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(message) {
		console.log("Message updated: " + JSON.stringify(message));
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Delete message from server
function deleteMessage(messageId) {

	console.log("Deleting message...");

	$.ajax({
		method: "DELETE",
		url: "/messages/" + messageId,
	}).done(function(messageId) {
		console.log('Message deleted: ' + messageId);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Show message in page
function showMessage(message) {

	$('#divChat').append(
		'<div id="message-' + message.id + '"><span style="color: white">' + message.user +
		': </span><span style="color: black">' + message.body + '</span></div>');
	$('#divChat').scrollTop($('#divChat').prop('scrollHeight'));

	lastMessage = message.id;
	console.log('Last: ' + lastMessage);
}

//Read record in file
function readRecord() {

	console.log("Reading record...");

	$.ajax({
		method: "GET",
		url: "/records/",
	}).done(function(records) {
		console.log('Record read: ' + JSON.stringify(records));
		PhaserRecords = JSON.parse(records);
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}

//Write record in file
function writeRecord(records) {

	console.log("Writing record...");

	$.ajax({
		method: "POST",
		url: "/records/",
		data: JSON.stringify(records),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(records) {
		console.log('Record written: ' + JSON.stringify(records));
	}).fail(function(jqXHR) {
		if (jqXHR.status === 0) {
			console.log('Servidor desconectado');
			server = 'desconectado';
		}
	})
}


//************************* WEBSOCKETS ***************************/

var idJugador;
var url = window.location.href.replace('http://', '');
var connection;

function openWS(){
	if(connection == undefined || connection == null){
		connection = new WebSocket('ws://' + url + 'echo');
	}
	
	connection.onopen = function() {
		console.log('WS Conexión abierta')
		var msg = {
			name: 'Pedir configuracion',
			destination: 'Others',
			message: 'Pasame la configuración de la partida que estas modificando'
		}
		
		connection.send(JSON.stringify(msg));
	}
	
	connection.onmessage = function(msg) {
		var datos = JSON.parse(msg.data);
		
		//Se conecta un jugador
		if(datos.name == 'Usuarios conectados'){
			console.log('Se ha conectado un usuario.\nNúmero de usuarios conectados actualmente: ' + datos.message);
		}
		
		//Se desconecta un jugador
		if(datos.name == 'Usuario desconectado'){
			console.log('Se ha desconectado un usuario.\nNúmero de usuarios conectados actualmente: ' + datos.message);
		}
		
		//Número de jugador asignado
		if(datos.name == 'Numero Jugador Asignado'){
			console.log('Eres el jugador ' + datos.message);
			idJugador = parseInt(datos.message);
		}
	}
	
	connection.onerror = function(e) {
		console.log("WS error: " + e);
	}
	
	connection.onclose = function() {
		console.log("WS Conexión cerrada");
	}
}




$(document).ready(function() {
	console.log('DOM cargado');
	connectedUser = { user: user };
	setUser(connectedUser);

	window.addEventListener('beforeunload', function(e) {
		e.preventDefault();
		connection.close();
		removeUser(connectedUser.id);
		return true;
	});
})