import React from 'react';
import { FaTimes, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import './NotificationPopup.css'; // Jangan lupa buat file CSS-nya

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: any[]; // Data transaksi status "Menunggu"
  onApprove: (id: string) => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, onClose, notifications, onApprove }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="notif-modal-content">
        <div className="notif-header">
          <h3>Pembayaran Menunggu</h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="notif-list">
          {notifications.length === 0 ? (
            <p className="no-data">Tidak ada pembayaran baru yang menunggu.</p>
          ) : (
            notifications.map((tx) => (
              <div key={tx.id} className="notif-item">
                <div className="notif-info">
                  <FaMoneyBillWave className="icon-money" />
                  <div>
                    <strong>{tx.customerName}</strong>
                    <p>{tx.serviceName} - <span className="text-bold">{tx.amount}</span></p>
                  </div>
                </div>
                <button 
                  className="btn-approve" 
                  onClick={() => { onApprove(tx.id); onClose(); }}
                >
                  <FaCheckCircle /> Terima
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;