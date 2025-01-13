package com.brewers_diary.brewers_diary.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class RegisterUserDto {

  @Email
  @NotBlank
  private String email;

  @NotBlank
  private String password;

  @NotBlank
  private String userName;
  
  @NotBlank
  private String locale;

  public String getEmail() {
    return email;
  }
  
  public String getLocale() {
	  return locale;
  }

  public RegisterUserDto setEmail(String email) {
    this.email = email;
    return this;
  }
  
  public String getPassword() {
    return password;
  }

  public RegisterUserDto setPassword(String password) {
    this.password = password;
    return this;
  }

  public String getUsername() {
    return userName;
  }

  public RegisterUserDto setUsername(String userName) {
    this.userName = userName;
    return this;
  }

  @Override
  public String toString() {
    return (
      "RegisterUserDto{" +
      "email='" +
      email +
      '\'' +
      ", userName='" +
      userName +
      '\'' +
      '}'
    );
  }
}