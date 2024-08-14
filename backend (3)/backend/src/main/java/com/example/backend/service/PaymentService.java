// src/main/java/com/example/demo/service/PaymentService.java

package com.example.backend.service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment savePayment(Payment payment) {
        // Only store the last 4 digits of the card number for security reasons
        if (payment.getCardNumber() != null && payment.getCardNumber().length() > 4) {
            String last4Digits = payment.getCardNumber().substring(payment.getCardNumber().length() - 4);
            payment.setCardNumber("**** **** **** " + last4Digits);
        }
        return paymentRepository.save(payment);
    }
}
