package com.ck.practice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.ck.practice.model.Users;

@Repository
public interface UsersRepo extends MongoRepository<Users, String>{

	Users findByEmail(String email);
		
}
