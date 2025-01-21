package com.brewers_diary.brewers_diary.controller;

import java.util.List;
import java.util.Map;
import graphql.ExecutionInput;
import graphql.ExecutionResult;
import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import io.leangen.graphql.GraphQLSchemaGenerator;
import io.leangen.graphql.metadata.strategy.query.AnnotatedResolverBuilder;
import io.leangen.graphql.metadata.strategy.value.jackson.JacksonValueMapperFactory;
import jakarta.servlet.http.HttpServletRequest;

import com.brewers_diary.brewers_diary.model.Recipe;
import com.brewers_diary.brewers_diary.service.RecipeService;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {
    private final RecipeService recipeService;
    
    public RecipeController(RecipeService recipeService) {
    	this.recipeService = recipeService;
    }
    
    @QueryMapping(value="allRecipes")
    public List<Recipe> findAll() {
    	return recipeService.getAllRecipes();
    }
    
    @QueryMapping(value="recipeById")
    public Recipe findRecipeById(@Argument Long id) {
    	return recipeService.getRecipe(id);
    }
    
}