package com.example.backend.controller;

import com.example.backend.model.ContactMessage;
import com.example.backend.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactMessageController {
    @Autowired
    private ContactMessageService service;

    @PostMapping
    public ContactMessage sendMessage(@RequestBody ContactMessage message) {
        return service.saveMessage(message);
    }
}
