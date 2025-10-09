import React, { useState } from "react";
import "./App.css";
import HeroSection from "./hero.jsx";
import Calculator from "./AppCJS.jsx";
import ContactModal from "./ContactModal.jsx"

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div>
      {/* Header stays constant */}
      <header>
        <div className="logo">BodyshopGuru</div>
        <button onClick={() => setShowModal(true)}>Contact Us</button>
      </header>

      {/* Switch between pages */}
      {showCalculator ? (
        <Calculator />
      ) : (
        <HeroSection onStart={() => setShowCalculator(true)} />
      )}

      {/* Contact modal */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
