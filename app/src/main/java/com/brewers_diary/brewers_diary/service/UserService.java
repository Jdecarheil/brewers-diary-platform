package com.brewers_diary.brewers_diary.service;

import com.brewers_diary.brewers_diary.dto.UserDto;
import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public List<UserDto> findAllAsDto() {
    return userRepository
      .findAll()
      .stream()
      .map(user ->
        new UserDto(user.getId(), user.getUsername(), user.getEmail())
      )
      .collect(Collectors.toList());
  }

  public Optional<UserDto> findByIdAsDto(Long id) {
    return userRepository
      .findById(id)
      .map(user ->
        new UserDto(user.getId(), user.getUsername(), user.getEmail())
      );
  }
}