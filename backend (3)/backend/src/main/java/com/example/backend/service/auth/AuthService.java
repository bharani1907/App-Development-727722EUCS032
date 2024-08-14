package com.example.backend.service.auth;

import com.example.backend.dto.SignupDTO;
import com.example.backend.dto.UserDTO;

public interface AuthService {
    UserDTO createUser(SignupDTO signupDTO);
}
