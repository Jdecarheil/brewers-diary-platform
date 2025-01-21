package com.brewers_diary.brewers_diary.model;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_account")
@DynamicInsert
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	
	@OneToMany
	@JoinColumn(name = "uid")
    private List<Recipe> recipes;
	
	@Column(name = "username", nullable = false, unique = true, columnDefinition = "varchar(30)")
	private String username;

	@Column(name = "password", nullable = false, columnDefinition = "varchar(73)")
	private String password;

	@Column(nullable = false, unique = true, columnDefinition = "citext")
	private String email;

	@CreationTimestamp
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "timestamptz")
	private Timestamp created_at;

	@UpdateTimestamp
	@Column(name = "updated_at", nullable = false, columnDefinition = "timestamptz")
	private Timestamp updated_at;

	@UpdateTimestamp
	@Column(name = "last_seen", nullable = false, columnDefinition = "timestamptz")
	private Timestamp last_seen;

	@ColumnDefault("false")
	@Column(name = "disabled", nullable = false, columnDefinition = "boolean")
	private boolean disabled;

	@ColumnDefault("en")
	@Column(name = "locale", nullable = false, columnDefinition = "varchar(2)")
	private String locale;

	@ColumnDefault("false")
	@Column(name = "email_verified", nullable = false, columnDefinition = "boolean")
	private boolean email_verified;

	@ColumnDefault("user")
	@Column(name = "default_role", nullable = false, columnDefinition = "varchar(4)")
	private String default_role;

	
	public User() {
	}

	
	public List<Recipe> getRecipes() {
		return recipes;
	}


	public void setRecipes(List<Recipe> recipes) {
		this.recipes = recipes;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
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

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Timestamp created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Timestamp updated_at) {
		this.updated_at = updated_at;
	}

	public Date getLast_seen() {
		return last_seen;
	}

	public void setLast_seen(Timestamp last_seen) {
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
