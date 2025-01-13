package com.brewers_diary.brewers_diary.controller;

import com.brewers_diary.brewers_diary.model.Recipe;
import com.brewers_diary.brewers_diary.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping(path = "allStudents")
    public List<Recipe> getAllStudents() {
        return this.recipeService.getRecipe();
    }
    
    @GetMapping(path="none")
    public String displayData() {
        String message = "Welcome to GeeksForGeeks";
        return message;
    }
}
