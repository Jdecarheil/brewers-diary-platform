package com.brewers_diary.brewers_diary.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_account")
public class User implements UserDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(name = "user_name", nullable = false, unique = true)
  private String userName;
  
  @Column(nullable = false)
  private String password;
  
  @Column(nullable = false, unique = true, columnDefinition="citext")
  private String email;

  @Column(nullable = false)
  private String created_at;
  
  @Column(nullable = false)
  private String updated_at;
  
  @Column(nullable = false)
  private String last_seen;
  
  @Column(nullable = false)
  private boolean disabled;
  
  @Column(nullable = false)
  private String locale;
  
  @Column(nullable = false)
  private boolean email_verified;
  
  @Column(nullable = false)
  private String default_role;
 

  public User() {}
  
  public UUID getId() {
	return id;
  }

  public void setId(UUID id) {
	this.id = id;
  }

  public String getUserName() {
	return userName;
  }

  public void setUserName(String userName) {
	this.userName = userName;
  }

  public String getPassword() {
	return password;
  }

  public void setPassword(String password) {
	this.password = password;
  }

  public String getEmail() {
	return email;
  }

  public void setEmail(String email) {
	this.email = email;
  }

  public String getCreated_at() {
	return created_at;
  }

  public void setCreated_at(String created_at) {
	this.created_at = created_at;
  }

  public String getUpdated_at() {
	return updated_at;
  }

  public void setUpdated_at(String updated_at) {
	this.updated_at = updated_at;
  }

  public String getLast_seen() {
	return last_seen;
  }

  public void setLast_seen(String last_seen) {
	this.last_seen = last_seen;
  }

  public boolean isDisabled() {
	return disabled;
  }

  public void setDisabled(boolean disabled) {
	this.disabled = disabled;
  }

  public String getLocale() {
	return locale;
  }	

  public void setLocale(String locale) {
	this.locale = locale;
  }

  public boolean isEmail_verified() {
	return email_verified;
  }

  public void setEmail_verified(boolean email_verified) {
	this.email_verified = email_verified;
  }

  public String getDefault_role() {
	return default_role;
  }

  public void setDefault_role(String default_role) {
	this.default_role = default_role;
  }
   
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
	  return List.of(); // Customize based on your roles/permissions
  }
  
  @Override
  public String getUsername() {
	  return email; // Use email as username
  }

  @Override
  public boolean isAccountNonExpired() {
    return true; // Customize based on your logic
  }

  @Override
  public boolean isAccountNonLocked() {
    return true; // Customize based on your logic
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true; // Customize based on your logic
  }

  @Override
  public boolean isEnabled() {
    return true; // Customize based on your logic
  }
}

