package com.brewers_diary.brewers_diary.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages={"com.brewers_diary.brewers_diary.controller.AuthController"})
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
		// Log
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach(error -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
		// Log
		return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
	}

	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<String> handleUnauthenticatedException(BadCredentialsException ex) {
		// Log
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleInternalErrorException(Exception ex) {
		// Log
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong on our end");
	}

}
