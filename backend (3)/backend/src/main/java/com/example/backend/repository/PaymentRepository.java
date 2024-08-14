// src/main/java/com/example/demo/repository/PaymentRepository.java

package com.example.backend.repository;

import com.example.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // No additional methods needed for basic CRUD operations
}
