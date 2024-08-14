package com.example.backend.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("REGULAR")
public class Regularuser extends User {
    // Additional fields for regular users can be added here
}
