package com.brewers_diary.brewers_diary.controllers;

import com.brewers_diary.brewers_diary.models.Recipe;
import com.brewers_diary.brewers_diary.services.RecipeService;

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
//
//    @PostMapping(path = "addRecipe")
//    public void addRecipe(@RequestBody Recipe recipe) {
//        this.recipeService.addRecipe(recipe);
//    }
//
//    @DeleteMapping(path = "delete/{recipeId}")
//    public void deleteRecipe(@PathVariable("recipeId") Long id) {
//        recipeService.deleteRecipe(id);
//    }
//
//    @PutMapping(path = "updateRecipe/{recipeId}")
//    public void upDateStudent
//            (@PathVariable("recipeId") Long id,
//             @RequestParam(required = false) String name,
//             @RequestParam(required = false) String email) {
//        recipeService.updateRecipe(id, name, email);
//    }
}
