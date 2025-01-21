package com.brewers_diary.brewers_diary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brewers_diary.brewers_diary.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

}