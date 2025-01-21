package com.brewers_diary.brewers_diary.exception;

import java.util.List;

import graphql.ErrorClassification;
import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

public class ResourceNotFoundException extends RuntimeException implements GraphQLError{
	
	public ResourceNotFoundException(String message) {
		super(message);
	}
	
	@Override
	public List<SourceLocation> getLocations() {
		return null;
	}
	
	@Override
	public ErrorClassification getErrorType() {
		return ErrorType.DataFetchingException;
	}
}
