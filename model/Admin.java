package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@DiscriminatorValue("ADMIN")
@Data
public class Admin extends User {

    @Column(name = "secret_key")
    private String secretKey;
}
