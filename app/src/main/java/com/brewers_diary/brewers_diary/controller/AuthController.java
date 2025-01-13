package com.brewers_diary.brewers_diary.controller;
import com.brewers_diary.brewers_diary.dto.LoginResponseDto;
import com.brewers_diary.brewers_diary.dto.LoginUserDto;
import com.brewers_diary.brewers_diary.dto.RegisterUserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.service.AuthService;
import com.brewers_diary.brewers_diary.service.JwtService;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
public class AuthController {

  private final AuthService authService;
  private final JwtService jwtService;/*add*/

  public AuthController(
    JwtService jwtService/*add*/,
    AuthService authenticationService
  ) {
    this.authService = authenticationService;
    this.jwtService = jwtService;/*add*/
  }

  @PostMapping("/signup")
  public ResponseEntity<User> register(
    @Valid @RequestBody RegisterUserDto registerUserDto
  ) {
    User registeredUser = authService.signup(registerUserDto);
    return ResponseEntity.ok(registeredUser);
  }

  @PostMapping("/login")
  public ResponseEntity<LoginResponseDto> authenticate(
    @RequestBody LoginUserDto loginUserDto
  ) {
    User authenticatedUser = authService.authenticate(loginUserDto);

  
    String jwtToken = jwtService.generateToken(authenticatedUser);
    LoginResponseDto loginResponse = new LoginResponseDto()
      .setToken(jwtToken)
      .setExpiresIn(jwtService.getExpirationTime());

    return ResponseEntity.ok(loginResponse);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String, String>> handleValidationExceptions(
    MethodArgumentNotValidException ex
  ) {
    Map<String, String> errors = new HashMap<>();
    ex
      .getBindingResult()
      .getAllErrors()
      .forEach(error -> {
        String fieldName = ((FieldError) error).getField();
        String errorMessage = error.getDefaultMessage();
        errors.put(fieldName, errorMessage);
      });
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
  }
}