package purrfectShot;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/messages")
public class MessageController {
	
	Map<Long, Message> messages = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public Collection<Message> messages() {
		
		return messages.values();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Message> getMessage(@PathVariable long id) {
		
		Message savedMessage = messages.get(id);
		Message nextMessage = messages.get(id+1);
		
		if(nextMessage != null) { // si existe el recurso
			return new ResponseEntity<>(nextMessage, HttpStatus.OK);
		}
		else { // si no existe
			return new ResponseEntity<>(savedMessage, HttpStatus.OK);
		}
	}
	
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public Message newMessage(@RequestBody Message message) {
		
		long id = nextId.incrementAndGet(); // obtenemos el id del nuevo objeto a crear
		message.setId(id); // le añadimos el id al message
		messages.put(id, message); // añadimos el message a la lista de messages
		
		
		return message;
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Message> updateMessage(@PathVariable long id, @RequestBody Message messageActualizado) {
		
		Message savedMessage =  messages.get(id); // recuperamos el message con el id especificado
		
		if(savedMessage != null) { // si existe el recurso
			messages.put(id, messageActualizado);
			
			return new ResponseEntity<>(messageActualizado, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Message> deleteMessage(@PathVariable long id) {
		
		Message savedMessage =  messages.get(id);
		
		if(savedMessage != null) {
			messages.remove(savedMessage.getId());
			return new ResponseEntity<>(savedMessage, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
}