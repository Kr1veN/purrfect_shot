package purrfectShot;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/records")
public class RecordController {
	
	@GetMapping("/")
	public ResponseEntity<String> readRecords() {
		try {
			BufferedReader reader = new BufferedReader(new FileReader("./src/main/resources/records.txt"));
			
			String records = reader.readLine();
			
			reader.close();
			
			return new ResponseEntity<>(records, HttpStatus.OK);
			
		} catch (IOException e) {
			System.out.print(e);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/")
	public ResponseEntity<String> writeRecords(@RequestBody String records) {
		try {
			//String name = "Esto es una prueba. Ya no pone \"hola\"";
			BufferedWriter writer = new BufferedWriter(new FileWriter("./src/main/resources/records.txt"));

			writer.write(records);

			writer.close();
			
			return new ResponseEntity<>(records, HttpStatus.CREATED);

		} catch (IOException e) {
			System.out.print(e);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}