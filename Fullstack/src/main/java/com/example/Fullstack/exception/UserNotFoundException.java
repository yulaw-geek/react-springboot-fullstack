package com.example.Fullstack.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("Could not found id"+id);
    }
}
