import React, { useState } from 'react';
import { 
  FaUserCircle, FaHistory, FaHeart, FaUsers, FaArrowLeft, 
  FaBuilding, FaTrain, FaTicketAlt, FaBus, FaCalendarAlt, 
  FaStar, FaChair, FaUserFriends, FaMapMarkerAlt, FaChevronDown
} from 'react-icons/fa';
import './BookingHistoryPage.css';

// Tipe Data untuk Kartu Booking
interface BookingItem {
  id: string;
  category: 'Hotel' | 'Transportasi' | 'Tiket Wisata';
  categoryIcon: React.ReactNode;
  title: string;
  bookingId: string;
  date: string;
  status: 'Selesai' | 'Mendatang';
  extraIcon: React.ReactNode;
  extraText: string;
  totalPrice: string;
  buttonText: string;
  imageUrl: string;
}

const BookingHistoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  // Data Dummy sesuai Figma
  const bookings: BookingItem[] = [
    {
      id: '1',
      category: 'Hotel',
      categoryIcon: <FaBuilding />,
      title: 'Ubud Hanging Gardens',
      bookingId: 'PEG-H-99281',
      date: '12–14 Mar 2024',
      status: 'Selesai',
      extraIcon: <FaStar className="text-yellow" />,
      extraText: '4.9 (2.1k ulasan)',
      totalPrice: 'Rp 9.000.000',
      buttonText: 'Lihat Detail',
      imageUrl: 'https://animehunch.com/wp-content/uploads/2023/01/Asa-Mitaka.jpg'
    },
    {
      id: '2',
      category: 'Transportasi',
      categoryIcon: <FaTrain />,
      title: 'KAI Taksaka Luxury – Jakarta ke Yogyakarta',
      bookingId: 'PEG-T-44120',
      date: '20 Mar 2024',
      status: 'Mendatang',
      extraIcon: <FaChair />,
      extraText: 'Gerbong 1, Kursi 2A',
      totalPrice: 'Rp 1.200.000',
      buttonText: 'E-Tiket',
      imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '3',
      category: 'Tiket Wisata',
      categoryIcon: <FaTicketAlt />,
      title: 'Tiket Masuk Borobudur & Prambanan',
      bookingId: 'PEG-D-33051',
      date: '21 Mar 2024',
      status: 'Mendatang',
      extraIcon: <FaUserFriends />,
      extraText: '2 Dewasa',
      totalPrice: 'Rp 750.000',
      buttonText: 'Lihat Tiket',
      imageUrl: 'https://animehunch.com/wp-content/uploads/2023/01/Asa-Mitaka.jpg'
    },
    {
      id: '4',
      category: 'Transportasi',
      categoryIcon: <FaBus />,
      title: 'Pahala Kencana Executive – Bandung ke Jakarta',
      bookingId: 'PEG-T-11029',
      date: '10 Feb 2024',
      status: 'Selesai',
      extraIcon: <FaMapMarkerAlt />,
      extraText: 'Terminal Leuwi Panjang',
      totalPrice: 'Rp 450.000',
      buttonText: 'Lihat Detail',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Fungsi Filter Data
  const filteredBookings = activeTab === 'Semua' 
    ? bookings 
    : bookings.filter(b => b.category === activeTab);

  return (
    <div className="profile-layout">
      {/* SIDEBAR KIRI */}
      <aside className="profile-sidebar">
        <div className="sidebar-header">
          <span className="sidebar-subtitle">WORKSPACE</span>
          <h2 className="sidebar-title">Traveler Area</h2>
        </div>
        
        <nav className="sidebar-nav">
          <a href="/profile" className="nav-item">
            <FaUserCircle className="nav-icon" /> Profil Saya
          </a>
          {/* Menu ini sekarang aktif */}
          <a href="/history" className="nav-item active">
            <FaHistory className="nav-icon" /> Riwayat Booking
          </a>
          <a href="/wishlist" className="nav-item">
            <FaHeart className="nav-icon" /> Wishlist Saya
          </a>
          <a href="/grup" className="nav-item">
            <FaUsers className="nav-icon" /> Grup Perjalanan Saya
          </a>
        </nav>

        <button className="btn-back">
          <FaArrowLeft /> Kembali ke Beranda
        </button>
      </aside>

      {/* KONTEN UTAMA */}
      <main className="profile-main">
        <div className="main-container">
          
          <header className="main-header">
            <h1>Riwayat Booking</h1>
            <p>Pantau status perjalanan dan transaksi Anda.</p>
          </header>

          {/* Tab Filter */}
          <div className="filter-tabs">
            {['Semua', 'Hotel', 'Transportasi', 'Tiket Wisata'].map(tab => (
              <button 
                key={tab} 
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List Booking */}
          <div className="booking-list">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                
                {/* Gambar */}
                <div className="booking-image">
                  <img src={booking.imageUrl} alt={booking.title} />
                </div>

                {/* Detail Tengah */}
                <div className="booking-info">
                  <div className="info-header">
                    <span className="category-label">
                      {booking.categoryIcon} {booking.category.toUpperCase()}
                    </span>
                    <span className={`status-badge ${booking.status === 'Selesai' ? 'badge-green' : 'badge-yellow'}`}>
                      {booking.status}
                    </span>
                  </div>
                  
                  <h3 className="booking-title">{booking.title}</h3>
                  <p className="booking-id">ID: {booking.bookingId}</p>
                  
                  <div className="info-footer">
                    <span className="info-item">
                      <FaCalendarAlt className="icon-grey" /> {booking.date}
                    </span>
                    <span className="info-item">
                      {booking.extraIcon} {booking.extraText}
                    </span>
                  </div>
                </div>

                {/* Harga dan Aksi Kanan */}
                <div className="booking-action">
                  <div className="price-wrapper">
                    <p className="price-label">Total Pembayaran</p>
                    <p className="price-value">{booking.totalPrice}</p>
                  </div>
                  <button className="btn-action">{booking.buttonText}</button>
                </div>
                
              </div>
            ))}
          </div>

          {/* Tombol Load More */}
          <div className="load-more-container">
            <button className="btn-load-more">
              Tampilkan Lebih Banyak <FaChevronDown />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default BookingHistoryPage;