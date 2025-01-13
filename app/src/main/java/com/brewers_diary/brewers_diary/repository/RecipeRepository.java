package com.brewers_diary.brewers_diary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.brewers_diary.brewers_diary.model.Recipe;

import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe,Long> {
//    @Query("SELECT r FROM Recipe r WHERE s.id = ?1")
//    Optional<Recipe> findRecipeId(int id);
}