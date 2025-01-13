package com.brewers_diary.brewers_diary.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brewers_diary.brewers_diary.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  /**
   * Finds a user by their email.
   *
   * @param email the email of the user
   * @return an Optional containing the user if found, or empty if not
   */
  Optional<User> findByEmail(String email);
  Optional<User> findByUsername(String userName);
}