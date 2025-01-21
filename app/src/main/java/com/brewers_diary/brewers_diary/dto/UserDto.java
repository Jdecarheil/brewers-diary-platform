package com.brewers_diary.brewers_diary.dto;

import java.util.UUID;

public class UserDto {

	private UUID id;
	private String username;
	private String email;

	public UserDto(UUID id, String username, String email) {
		this.id = id;
		this.username = username;
		this.email = email;
	}

	public UUID getId() {
		return id;
	}

	public String getUserName() {
		return username;
	}

	public String getEmail() {
		return email;
	}
}