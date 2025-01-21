package com.brewers_diary.brewers_diary.service;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.brewers_diary.brewers_diary.dto.LoginUserDto;
import com.brewers_diary.brewers_diary.dto.RegisterUserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.repository.UserRepository;

import jakarta.validation.Valid;

@Service
public class AuthService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManager authenticationManager;

	public AuthService(UserRepository userRepository, AuthenticationManager authenticationManager,
			PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.authenticationManager = authenticationManager;
		this.passwordEncoder = passwordEncoder;
	}

	public User signup(@Valid RegisterUserDto input) {
		if (userRepository.findByEmail(input.getEmail()).isPresent()) {
			throw new IllegalArgumentException("User already exists with email: " + input.getEmail());
		} else if (userRepository.findByUsername(input.getUsername()).isPresent()) {
			throw new IllegalArgumentException("Username already exists: " + input.getUsername());
		} else {

			String hashedPassword = passwordEncoder.encode(input.getPassword());
			User user = new User();
			user.setUserName(input.getUsername());
			user.setPassword(hashedPassword);
			user.setEmail(input.getEmail());
			user.setLocale(input.getLocale());
			return userRepository.save(user);
		}
	}

	public User authenticate(LoginUserDto input) {
		User user = userRepository.findByEmail(input.getEmail())
				.orElseThrow(() -> new IllegalArgumentException("Email not found: " + input.getEmail()));

		if (!passwordEncoder.matches(input.getPassword(), user.getPassword())) {
			throw new IllegalArgumentException("Incorrect password for email: " + input.getEmail());
		}

		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(input.getEmail(), input.getPassword()));

		return user;
	}

	public List<User> allUsers() {
		return userRepository.findAll();
	}
}