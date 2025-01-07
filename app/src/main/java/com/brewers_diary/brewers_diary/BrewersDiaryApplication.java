package com.brewers_diary.brewers_diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.brewers_diary.brewers_diary.model.User;
import com.brewers_diary.brewers_diary.model.UserRepository;

@SpringBootApplication
public class BrewersDiaryApplication {

	@Autowired
	private UserRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(BrewersDiaryApplication.class, args);
	}

	
public void run(String... args) throws Exception {
	repository.deleteAll();
	repository.save(new User("Alice", "Smith"));
	repository.save(new User("Bob", "Smith"));

	System.out.println("Customers found with findAll():");
	System.out.println("-------------------------------");
	
	for (User customer : repository.findAll()) {
		System.out.println(customer);
	}

	System.out.println();
	System.out.println("Customer found with findByFirstName('Alice'):");
	System.out.println("--------------------------------");
	System.out.println(repository.findByFirstName("Alice"));
	System.out.println("Customers found with findByLastName('Smith'):");
	System.out.println("--------------------------------");
	
	for (User customer : repository.findByLastName("Smith")) {
		System.out.println(customer);
	}
};}
	

