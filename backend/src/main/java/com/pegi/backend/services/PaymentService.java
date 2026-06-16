package com.pegi.backend.services;

import com.pegi.backend.entity.Payment;
import com.pegi.backend.entity.Booking;
import com.pegi.backend.entity.enums.BookingStatus;
import com.pegi.backend.entity.enums.PaymentStatus;
import com.pegi.backend.repository.BookingRepository;
import com.pegi.backend.repository.PaymentRepository;
import com.pegi.backend.entity.enums.PaymentStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private BookingRepository bookingRepository;

    public Payment processPayment(Payment paymentRequest) {
        paymentRequest.setPaymentDate(LocalDateTime.now());
        paymentRequest.setStatus(PaymentStatus.PAID);
        Payment savedPayment = paymentRepository.save(paymentRequest);

        if (savedPayment.getBooking() != null) {
            long bookingId = savedPayment.getBooking().getId();
            Booking relatedBooking = bookingRepository.findById(bookingId).orElse(null);

            if (relatedBooking != null) {
                relatedBooking.setStatus(BookingStatus.CONFIRMED);
                bookingRepository.save(relatedBooking);
            }
        }

        return savedPayment;

    }
    
}
