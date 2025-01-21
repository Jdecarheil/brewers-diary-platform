package com.brewers_diary.brewers_diary.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.brewers_diary.brewers_diary.controller.AuthController;
import com.brewers_diary.brewers_diary.dto.RegisterUserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.service.AuthService;

@ExtendWith(MockitoExtension.class)
public class SignUpTest {

	@InjectMocks
	private AuthController authController;

	@Mock
	private AuthService authService;

	@DisplayName("Test signup endpoint")
	@Test
	public void signUserUp() throws Exception {
		RegisterUserDto registerUserDto = new RegisterUserDto();
		registerUserDto.setEmail("test@gmail.com");
		registerUserDto.setUsername("test");
		registerUserDto.setPassword("password");
		ResponseEntity<User> response = authController.register(registerUserDto);
		assertEquals(HttpStatus.CREATED, response.getStatusCode());
	}

//	@DisplayName("Test login endpoint")
//	@Test
//	public void logUserIn() throws Exception {
//		LoginUserDto loginUserDto = new LoginUserDto();
//		loginUserDto.setEmail("test@gmail.com");
//		loginUserDto.setUsername("test");
//		loginUserDto.setPassword("password");
//		ResponseEntity<User> response = authController.register(registerUserDto);
//		assertEquals(HttpStatus.CREATED, response.getStatusCode());
//	}
}
