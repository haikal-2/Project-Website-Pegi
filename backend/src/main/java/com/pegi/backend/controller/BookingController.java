package com.pegi.backend.controller;

import com.pegi.backend.entity.Booking;
import com.pegi.backend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking bookingRequest) {
        return bookingService.createBooking(bookingRequest);
    }

    
}
