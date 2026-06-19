import React, { useState } from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import "./AdminTopbar.css";

// 1. Tambahkan interface untuk menerima data transaksi
interface AdminTopbarProps {
  showSearch?: boolean;
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
  placeholder?: string;
  transactions?: any[]; // Data transaksi untuk menghitung notifikasi
  onOpenNotif?: () => void; // Fungsi untuk membuka modal popup
}

const AdminTopbar: React.FC<AdminTopbarProps> = ({ showSearch = false, searchQuery = "", setSearchQuery, placeholder = "Cari...", transactions = [], onOpenNotif }) => {
  // 2. Hitung jumlah transaksi dengan status "Menunggu"
  const pendingCount = transactions.filter((t) => t.status === "Menunggu").length;

  return (
    <header className="admin-topbar">
      {showSearch ? (
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder={placeholder} value={searchQuery} onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)} />
        </div>
      ) : (
        <div className="topbar-left-spacer"></div>
      )}

      <div className="topbar-actions">
        <div className="topbar-icons">
          {/* 3. Tambahkan badge jika ada notifikasi dan event klik */}
          <button className="icon-btn" onClick={onOpenNotif}>
            <FaBell />
            {pendingCount > 0 && <span className="notification-badge">{pendingCount}</span>}
          </button>
          <button className="icon-btn">
            <FaCog />
          </button>
        </div>

        <div className="topbar-divider"></div>

        <div className="admin-profile">
          <div className="admin-info">
            <span className="admin-name">Admin Pegi</span>
            <span className="admin-role">ADMIN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
