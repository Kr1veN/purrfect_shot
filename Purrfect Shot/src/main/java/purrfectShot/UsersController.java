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
@RequestMapping("/users")
public class UsersController {
	
	Map<Long, Users> users = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public Collection<Users> users() {
		
		return users.values();
	}
	
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public Users newUser(@RequestBody Users user) {
		
		long id = nextId.incrementAndGet(); // obtenemos el id del nuevo objeto a crear
		user.setId(id); // le añadimos el id al user
		users.put(id, user); // añadimos el user a la lista de users
		
		
		return user;
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Users> updateUser(@PathVariable long id, @RequestBody Users userActualizado) {
		
		Users savedUser =  users.get(id); // recuperamos el user con el id especificado
		
		if(savedUser != null) { // si existe el recurso
			users.put(id, userActualizado);
			
			return new ResponseEntity<>(userActualizado, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Users> deleteUser(@PathVariable long id) {
		
		Users savedUsers =  users.get(id);
		
		if(savedUsers != null) {
			users.remove(savedUsers.getId());
			return new ResponseEntity<>(savedUsers, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
}