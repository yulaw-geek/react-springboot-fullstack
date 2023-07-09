package com.example.Fullstack.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.Fullstack.model.User;

@Repository
public interface UserRespository extends JpaRepository<User, Long> {
}
