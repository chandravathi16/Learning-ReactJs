package com.ck.practice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "Users")
@Data
public class Users {
	
	@Id
	private String email;
	private String username;
	private String password;
	private String confirmPassword;
	
}
