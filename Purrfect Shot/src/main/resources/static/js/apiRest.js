var PhaserRecords;

//Load messages from server
function loadMessages(callback) {

	console.log("Loading all messages...");

	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8080/messages/"
	}).done(function(messages) {
		console.log('Messages loaded: ' + JSON.stringify(messages));
		callback(messages);
	})
}

//Load messages since last message (parameter)
function loadLastMessage(messageId, callback) {
	console.log("Loading new messages..." + messageId);
	messageId += 1;

	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8080/messages/" + messageId
	}).done(function(messages) {
		console.log('New message loaded: ' + JSON.stringify(messages));
		callback(messages);
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
	})
}
var lastMessage;
//Show message in page
function showMessage(message) {

	$('#info').append(
		'<div id="item-' + message.id + '"><span>' + message.user + ': ' + message.body +
		'</span> <button>Delete</button></div>');

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
	})
}

$(document).ready(function() {
	console.log('DOM cargado');

	loadMessages(function(messages) {
		//When items are loaded from server
		for (var i = 0; i < messages.length; i++) {
			showMessage(messages[i]);
		}
	});

	var input = $('#value-input')
	var info = $('#info')

	//Handle delete buttons
	info.click(function(event) {
		var elem = $(event.target);
		if (elem.is('button')) {
			var itemDiv = elem.parent();
			var messageId = itemDiv.attr('id').split('-')[1];
			itemDiv.remove()
			deleteMessage(messageId);
		}
	})

	//Handle add button
	$("#add-button").click(function() {

		var value = input.val();
		input.val('');

		var message = {
			user: 'pepito',
			body: value
		}

		if (lastMessage != undefined)
			loadLastMessage(lastMessage, function(messageWithId) {
				//When item with id is returned from server
				if (messageWithId.id != lastMessage)
					showMessage(messageWithId);
			});

		createMessage(message, function(messageWithId) {
			//When item with id is returned from server
			showMessage(messageWithId);
		});

		var record = {
			first: {
				user: 'pedro',
				points: 461
			},
			second: {
				user: 'sandra',
				points: 204
			},
			third: {
				user: 'lola',
				points: 197
				}
		}
	})
})