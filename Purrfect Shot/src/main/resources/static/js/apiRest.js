var PhaserRecords;
var lastMessage;
var user = "Cat Doe";
var connectedUser;
var NombreJ1='Jugador 1';
var NombreJ2='Jugador 2';
var server = 'conectado';

//Get active users
function getUsers(callback) {
	$.ajax({
		method: "GET",
		url:  "http://127.0.0.1:8080/users/"
	}).done(function(users) {
		console.log('Active users: ' + JSON.stringify(users));
		callback(users.length);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Set active user
function setUser(user) {
	$.ajax({
		method: "POST",
		url: "http://127.0.0.1:8080/users/",
		data: JSON.stringify(user),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function(users) {
		console.log('Active user: ' + JSON.stringify(users));
		connectedUser = users;
		//callback(message);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Update user
function updateUser(user) {
	$.ajax({
		method: "PUT",
		url: "http://127.0.0.1:8080/users/" + user.id,
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
	  		server='conectado';
	  	}
	})
}

//Removes active user
function removeUser(userId) {
	$.ajax({
		method: "DELETE",
		url: "http://127.0.0.1:8080/users/" + userId,
	}).done(function(userId) {
		console.log('User disconnected: ' + userId);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Load messages from server
function loadMessages(callback) {

	console.log("Loading all messages...");

	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8080/messages/"
	}).done(function(messages) {
		console.log('Messages loaded: ' + JSON.stringify(messages));
		callback(messages);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Load messages since last message (parameter)
function loadLastMessage(messageId, callback) {
	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8080/messages/" + messageId
	}).done(function(messages) {
		callback(messages);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Send a message
function createMessage(message, callback) {

	console.log("Sending message...");

	$.ajax({
		method: "POST",
		url: "http://127.0.0.1:8080/messages/",
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
	  		server='conectado';
	  	}
	})
}

//Update message in server
function updateMessage(message) {

	console.log("Updating message... ");

	$.ajax({
		method: "PUT",
		url: "http://127.0.0.1:8080/messages/" + message.id,
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
	  		server='conectado';
	  	}
	})
}

//Delete message from server
function deleteMessage(messageId) {

	console.log("Deleting message...");

	$.ajax({
		method: "DELETE",
		url: "http://127.0.0.1:8080/messages/" + messageId,
	}).done(function(messageId) {
		console.log('Message deleted: ' + messageId);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Show message in page
function showMessage(message) {

	$('#divChat').append(
		'<div id="message-' + message.id + '"><span style="color: white">' + message.user + 
		': </span><span style="color: black">' + message.body +'</span></div>');
	$('#divChat').scrollTop($('#divChat').prop('scrollHeight'));

	lastMessage = message.id;
	console.log('Last: ' + lastMessage);
}

//Read record in file
function readRecord() {

	console.log("Reading record...");

	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8080/records/",
	}).done(function(records) {
		console.log('Record read: ' + JSON.stringify(records));
		PhaserRecords = JSON.parse(records);
		console.log(PhaserRecords);
	}).fail(function(jqXHR) {
  		if (jqXHR.status === 0) {
	  		console.log('Servidor desconectado');
	  		server='conectado';
	  	}
	})
}

//Write record in file
function writeRecord(records) {

	console.log("Writing record...");

	$.ajax({
		method: "POST",
		url: "http://127.0.0.1:8080/records/",
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
	  		server='conectado';
	  	}
	})
}

$(document).ready(function() {
	console.log('DOM cargado');
	
	connectedUser= {user: user};
	setUser(connectedUser);
	
	window.addEventListener('beforeunload', function(e){
		//return "Quieres cerrar";
		e.preventDefault();
		removeUser(connectedUser.id);
		return true;
	});
})