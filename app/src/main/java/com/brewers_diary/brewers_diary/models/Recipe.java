package com.brewers_diary.brewers_diary.models;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcType;
import org.hibernate.annotations.UpdateTimestamp;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.dialect.PostgreSQLEnumJdbcType;


enum Style {
	  Ale,
	  Lager
}


@Entity
@Table
public class Recipe {
	@Id
	private int id;
	
	@CreationTimestamp
    private Date created_at;
	
	@UpdateTimestamp
    private Date updated_at;
    private String recipe_name;
    private byte f_volume;
    private String author;
    private String notes;
    private byte boil_duration;
    
    @Enumerated
    @JdbcType(PostgreSQLEnumJdbcType.class)
    private Style brew_style;

    
    public Recipe() {
    }

    public Recipe(int id, Date created_at, Date updated_at, String recipe_name, byte f_volume, String author, String notes, byte boil_duration, Style brew_style) {
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.recipe_name = recipe_name;
        this.f_volume = f_volume;
        this.author = author;
        this.notes = notes;
        this.boil_duration = boil_duration;
        this.brew_style = brew_style;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public String getRecipe_name() {
		return recipe_name;
	}

	public void setRecipe_name(String recipe_name) {
		this.recipe_name = recipe_name;
	}

	public int getF_volume() {
		return f_volume;
	}

	public void setF_volume(byte f_volume) {
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

	public int getBoil_duration() {
		return boil_duration;
	}

	public void setBoil_duration(byte boil_duration) {
		this.boil_duration = boil_duration;
	}

	public Style getBrew_style() {
		return brew_style;
	}

	public void setBrew_style(Style brew_style) {
		this.brew_style = brew_style;
	}

   
}