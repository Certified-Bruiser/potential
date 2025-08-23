// src/App.jsx
import React, { useState } from "react";
import BodyshopGuru from "./firstpage.jsx";
import Calculator from "./AppCJS.jsx";

export default function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  return showCalculator ? (
    <Calculator /> // no onBack prop now
  ) : (
    <BodyshopGuru onStart={() => setShowCalculator(true)} />
  );
}
