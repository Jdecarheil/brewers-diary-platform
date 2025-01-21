package com.brewers_diary.brewers_diary;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

import graphql.scalars.ExtendedScalars;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.GraphQLScalarType;

@SpringBootApplication
public class BrewersDiaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrewersDiaryApplication.class, args);
	}
	
	 @Bean
	  public GraphQLScalarType timestampScalarType() {
	      return GraphQLScalarType.newScalar()
	              .name("Timestamp")
	              .description("Timestamp scalar")
	              .coercing(new Coercing() {
	                  @Override
	                  public String serialize(Object input) {
	                      SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH);
	                      return formatter.format((Date)input);
	                  }
	  
	                  @Override
	                  public Object parseValue(Object o) throws CoercingParseValueException {
	                      return o;
	                  }
	  
	                  @Override
	                  public Object parseLiteral(Object o) throws CoercingParseLiteralException {
	                      return o.toString();
	                  }
	              })
	              .build();

	}
	  
	 
	 @Bean
	    public RuntimeWiringConfigurer runtimeWiringConfigurer() {
	        return wiringBuilder -> wiringBuilder
	                .scalar(ExtendedScalars.UUID)
	                .scalar(ExtendedScalars.DateTime)
	                .scalar(ExtendedScalars.GraphQLLong)
		            .scalar(ExtendedScalars.Date)
		            .scalar(timestampScalarType());

	    }

}
