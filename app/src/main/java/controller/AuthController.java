package controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class AuthController {
	 @RequestMapping("/hello")
     public String home(){
         return "Hello World!";
     }
	 
	 @GetMapping("/{id}")
	 public String homes(){
         return "Hello World!";
     }
 
}
