package com.brewers_diary.brewers_diary.dto;

import java.util.UUID;

public class UserDto {

	  private UUID id;
	  private String userName;
	  private String email;

	  // Constructor
	  public UserDto(UUID id, String userName, String email) {
	    this.id = id;
	    this.userName = userName;
	    this.email = email;
	  }

	  // Getters
	  public UUID getId() {
	    return id;
	  }

	  public String getUserName() {
	    return userName;
	  }

	  public String getEmail() {
	    return email;
	  }
	}