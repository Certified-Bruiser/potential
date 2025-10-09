import React from "react";
import "./Header.css";

export default function Header({ onContactClick }) {
  return (
    <header className="site-header">
      <div className="logo">BodyshopGuru</div>
      <button className="contact-btn" onClick={onContactClick}>
        Contact Us
      </button>
    </header>
  );
}
