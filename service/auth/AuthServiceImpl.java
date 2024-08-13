package com.example.backend.service.auth;

import com.example.backend.dto.SignupDTO;
import com.example.backend.dto.UserDTO;
import com.example.backend.model.Admin;
import com.example.backend.model.Regularuser;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired  
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO createUser(SignupDTO dto) {
        User user;

        // Determine the type of user based on the userType field
        if ("ADMIN".equalsIgnoreCase(dto.getUsertype())) {
            user = new Admin();
            ((Admin) user).setSecretKey(dto.getSecretKey()); // Set secret key for Admins
        } else {
            user = new Regularuser();
        }

        // Set common fields
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        // Save user to the database
        User savedUser = userRepository.save(user);

        // Convert to UserDTO
        UserDTO userDTO = new UserDTO();
        userDTO.setId(savedUser.getId());
        userDTO.setName(savedUser.getName());
        userDTO.setEmail(savedUser.getEmail());
        userDTO.setUserType(savedUser instanceof Admin ? "ADMIN" : "REGULAR");

        return userDTO;
    }
}
