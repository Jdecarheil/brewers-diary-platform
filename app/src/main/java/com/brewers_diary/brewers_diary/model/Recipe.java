package com.brewers_diary.brewers_diary.model;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.JdbcType;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.dialect.PostgreSQLEnumJdbcType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

enum Style {
	Ale, Lager
}

@Entity
@Table
@DynamicInsert
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "uid", nullable = false, columnDefinition = "uuid")
	private UUID uid;

	@CreationTimestamp
	@Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "timestamptz")
	private Timestamp created_at;

	@UpdateTimestamp
	@Column(name = "updated_at", nullable = false, columnDefinition = "timestamptz")
	private Timestamp updated_at;

	@ColumnDefault("n/a")
	@Column(name = "recipe_name", nullable = false, columnDefinition = "varchar(40)")
	private String recipe_name;

	@ColumnDefault("23")
	@Column(name = "f_volume", nullable = false, columnDefinition = "smallint")
	private String f_volume;

	@ColumnDefault("n/a")
	@Column(name = "author", nullable = false, columnDefinition = "varchar(40)")
	private String author;

	@ColumnDefault("n/a")
	@Column(name = "notes", nullable = false, columnDefinition = "varchar(255)")
	private String notes;

	@ColumnDefault("60")
	@Column(name = "boil_duration", nullable = false, columnDefinition = "smallint")
	private String boil_duration;

	@Enumerated
	@JdbcType(PostgreSQLEnumJdbcType.class)
	@Column(name = "brew_style", nullable = false)
	@ColumnDefault("Ale")
	private Style brew_style;

	public Recipe() {
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UUID getUid() {
		return uid;
	}

	public void setUid(UUID uid) {
		this.uid = uid;
	}

	public Timestamp getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Timestamp created_at) {
		this.created_at = created_at;
	}

	public Timestamp getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Timestamp updated_at) {
		this.updated_at = updated_at;
	}

	public String getRecipe_name() {
		return recipe_name;
	}

	public void setRecipe_name(String recipe_name) {
		this.recipe_name = recipe_name;
	}

	public String getF_volume() {
		return f_volume;
	}

	public void setF_volume(String f_volume) {
		this.f_volume = f_volume;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getBoil_duration() {
		return boil_duration;
	}

	public void setBoil_duration(String boil_duration) {
		this.boil_duration = boil_duration;
	}

	public Style getBrew_style() {
		return brew_style;
	}

	public void setBrew_style(Style brew_style) {
		this.brew_style = brew_style;
	}

}