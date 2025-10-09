import React from "react";

export default function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-icon" onClick={onClose}>
          ×
        </button>
        <h2>Ping us at :</h2>
        <div className="contact-info">
          <p>📞 +91 9619403112</p>
          <p>📧 support@bodyshopguru.com</p>
        </div>
      </div>
    </div>
  );
}
