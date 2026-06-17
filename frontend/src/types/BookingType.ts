// src/types/BookingType.ts

export interface BookingType {
  id: string;
  category: 'Hotel' | 'Transportasi' | 'Tiket Wisata';
  title: string;
  bookingId: string;
  date: string;
  status: 'Selesai' | 'Mendatang';
  extraText: string; // Misal: "4.9 (2.1k ulasan)", "Gerbong 1, Kursi 2A", dll.
  totalPrice: number; // Menggunakan number agar backend Spring Boot mudah memprosesnya
  imageUrl: string;
}