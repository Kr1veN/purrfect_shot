package purrfectShot;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebSocketEchoHandler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	private WebSocketSession sessionJ1 = null, sessionJ2 = null;
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
		
		Long activeUsers = ((ConcurrentHashMap<String, WebSocketSession>) sessions).mappingCount();
		
		ObjectNode node = mapper.createObjectNode();
		node.put("name", "Usuarios conectados");
		node.put("message", Long.toString(activeUsers));
		sendMessageToAll(node);
		
		assignPlayer(session, activeUsers);
		
		//session.sendMessage(new TextMessage(Long.toString((((ConcurrentHashMap<String, WebSocketSession>) sessions).mappingCount()))));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status){
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
		
		Long activeUsers = ((ConcurrentHashMap<String, WebSocketSession>) sessions).mappingCount();
		removePlayer(session, activeUsers);
		
		ObjectNode node = mapper.createObjectNode();
		node.put("name", "Usuario desconectado");
		node.put("message", Long.toString(activeUsers));
		sendOtherParticipants(session, node);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message){
		System.out.println("Message received: " + message.getPayload());
		
		try {
			JsonNode node = mapper.readTree(message.getPayload());
			
			if(node.get("destination").asText().equals("Others")) {
				sendOtherParticipants(session, node);
			}
			if(node.get("destination").asText().equals("All")) {
				sendMessageToAll(node);
			}
			
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
	}
	
	public void sendMessageToAll(JsonNode node){
		System.out.println("Message sent: " + node.toString());
		
		try {
			for(WebSocketSession participant : sessions.values()) {
				synchronized(participant) {
					participant.sendMessage(new TextMessage(node.toString()));
				}
			}
		
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
	}
	
	private void sendOtherParticipants(WebSocketSession session, JsonNode node){
		System.out.println("Message sent: " + node.toString());
		
		try {
			for(WebSocketSession participant : sessions.values()) {
				if(!participant.getId().equals(session.getId())) {
					synchronized(participant) {
						participant.sendMessage(new TextMessage(node.toString()));
					}
				}
			}
		
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
	}
	
	private void assignPlayer (WebSocketSession session, Long activeUsers){
		int num = -1;
		if(activeUsers == 1) {
			sessionJ1 = session;
			num = 1;
		}
		else if (activeUsers == 2) {
			sessionJ2 = session;
			num = 2;
		}
		
		if(sessionJ1 != null) {
			System.out.println("Player 1: " + sessionJ1.getId());
		}
		if(sessionJ2 != null) {
			System.out.println("Player 2: " + sessionJ2.getId());
		}
		
		ObjectNode player = mapper.createObjectNode();
		player.put("name", "Numero Jugador Asignado");
		player.put("message", num);
		
		try {
			session.sendMessage(new TextMessage(player.toString()));
		
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
		
	}
	
	private void removePlayer (WebSocketSession session, Long activeUsers){
		if(activeUsers >= 1) {
			if(sessionJ1 == session) { //el que se ha desconectado es el J1
				sessionJ1 = sessionJ2;
				sessionJ2 = null;
				
				ObjectNode player = mapper.createObjectNode();
				player.put("name", "Numero Jugador Asignado");
				player.put("message", 1);
				
				try {
					sessionJ1.sendMessage(new TextMessage(player.toString())); //le mandamos el mensaje al nuevo J1
				
				} catch (Exception e) {
					System.out.println("Error: " + e);
				}
			}
			else if(sessionJ2 == session) { //el que se ha desconectado es el J2
				sessionJ2 = null;
			}
		}
		else if(activeUsers == 0) {
			sessionJ1 = null;
			sessionJ2 = null;
		}
		
		if(sessionJ1 != null) {
			System.out.println("Player 1: " + sessionJ1.getId());
		}
		if(sessionJ2 != null) {
			System.out.println("Player 2: " + sessionJ2.getId());
		}
	}

}