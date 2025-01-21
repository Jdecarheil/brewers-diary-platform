package com.brewers_diary.brewers_diary.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brewers_diary.brewers_diary.exception.ResourceNotFoundException;
import com.brewers_diary.brewers_diary.model.Recipe;
import com.brewers_diary.brewers_diary.repository.RecipeRepository;

import io.leangen.graphql.annotations.GraphQLQuery;

@Service
public class RecipeService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
	
	@GraphQLQuery(name = "recipes")
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
	
	@GraphQLQuery(name = "getRecipeById")
    public Recipe getRecipe(Long id) {
		Optional<Recipe> recipe = recipeRepository.findById(id);
		if(recipe.isPresent()) {
			return recipe.get();
		}
		throw new ResourceNotFoundException("Could not find recipe");
    }
	
//	 @PreAuthorize("hasRole('ADMIN')")
//	    @GraphQLQuery(name = "user")
//	    public Optional<User> getUserById(@GraphQLArgument(name = "id") Long id) {
//	        return userRepository.findById(id);
//	    }
}