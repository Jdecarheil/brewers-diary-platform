package com.brewers_diary.brewers_diary.controller;

import com.brewers_diary.brewers_diary.dto.UserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.service.UserService;
import com.brewers_diary.brewers_diary.service.JwtService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/users")
@RestController
public class UserController {

  private final UserService userService;
  private final JwtService jwtService;

  public UserController(UserService userService, JwtService jwtService/*add*/) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  @GetMapping("/me")
  public ResponseEntity<Map<String, Object>> authenticatedUser() {
 
    Authentication authentication = SecurityContextHolder
      .getContext()
      .getAuthentication();

    UserDetails currentUser = (UserDetails) authentication.getPrincipal();

    String token = jwtService.generateToken(currentUser);

    Map<String, Object> response = new HashMap<>();
    response.put("user", currentUser);
    response.put("token", token);

    return ResponseEntity.ok(response);
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
    Optional<UserDto> userDto = userService.findByIdAsDto(id);
    return userDto
      .map(ResponseEntity::ok)
      .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping("/all")
  public ResponseEntity<List<UserDto>> getAllUsers() {
    List<UserDto> users = userService.findAllAsDto();
    return ResponseEntity.ok(users);
  }
}