package com.brewers_diary.brewers_diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brewers_diary.brewers_diary.dto.LoginResponseDto;
import com.brewers_diary.brewers_diary.dto.LoginUserDto;
import com.brewers_diary.brewers_diary.dto.RegisterUserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.service.AuthService;
import com.brewers_diary.brewers_diary.service.JwtService;

import jakarta.validation.Valid;

@RequestMapping("/api/v1/auth")
@RestController
public class AuthController {

	private final AuthService authService;
	private final JwtService jwtService;

	public AuthController(JwtService jwtService, AuthService authenticationService) {
		this.authService = authenticationService;
		this.jwtService = jwtService;
	}

	@PostMapping("/signup")
	public ResponseEntity<User> register(@Valid @RequestBody RegisterUserDto registerUserDto) {
		return new ResponseEntity<User>(authService.signup(registerUserDto), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponseDto> authenticate(@RequestBody LoginUserDto loginUserDto) {
		User authenticatedUser = authService.authenticate(loginUserDto);

		String jwtToken = jwtService.generateToken(authenticatedUser);
		LoginResponseDto loginResponse = new LoginResponseDto().setToken(jwtToken)
				.setExpiresIn(jwtService.getExpirationTime());

		return ResponseEntity.ok(loginResponse);
	}

}