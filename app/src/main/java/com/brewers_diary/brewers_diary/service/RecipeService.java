package com.brewers_diary.brewers_diary.service;

import com.brewers_diary.brewers_diary.model.Recipe;
import com.brewers_diary.brewers_diary.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getRecipe() {
        return this.recipeRepository.findAll();
    }



}