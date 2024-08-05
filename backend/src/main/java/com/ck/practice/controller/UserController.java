package com.ck.practice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ck.practice.model.Users;
import com.ck.practice.repo.UsersRepo;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UsersRepo usersRepo;
    
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users user) {
        try {
        	Users users = new Users();
        	users.setEmail(user.getEmail());
        	users.setUsername(user.getEmail());
        	users.setPassword(user.getPassword());
        	users.setConfirmPassword(user.getConfirmPassword());
        	
            usersRepo.save(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred while registering!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
