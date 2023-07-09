package com.example.Fullstack.controller;


import com.example.Fullstack.exception.UserNotFoundException;
import com.example.Fullstack.model.User;
import com.example.Fullstack.respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    UserRespository userRespository;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRespository.findAll();
    }
    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userRespository.save(user);
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRespository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRespository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRespository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRespository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRespository.deleteById(id);
        return "User with id"+ id + "has been deleted";
    }
}









