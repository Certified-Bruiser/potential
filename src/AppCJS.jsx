import React, { useState } from "react";
import "./AppC.css";

const data = {
  Luxury: {
    "City A": { collision_rate: 0.72, per_car_labour: 45000, per_car_sales: 85000 },
    "City B": { collision_rate: 0.60, per_car_labour: 45000, per_car_sales: 85000 },
    "City C": { collision_rate: 0.48, per_car_labour: 35000, per_car_sales: 100000 },
    "City D": { collision_rate: 0.36, per_car_labour: 35000, per_car_sales: 100000 },
  }, 
  "Mass Market": {
    "City A": { collision_rate: 0.84, per_car_labour: 14000, per_car_sales: 9000 },
    "City B": { collision_rate: 0.72, per_car_labour: 12500, per_car_sales: 9000 },
    "City C": { collision_rate: 0.60, per_car_labour: 11500, per_car_sales: 12000 },
    "City D": { collision_rate: 0.48, per_car_labour: 11500, per_car_sales: 14000 },
    "City E": { collision_rate: 0.36, per_car_labour: 11500, per_car_sales: 14000 },
  },
};

function formatIndian(value) {
  function format(num) {
    return parseFloat(num.toFixed(3)).toString(); // up to 3 decimals, trims zeros
  }

  if (value >= 10000000) return format(value / 10000000) + "Cr";
  if (value >= 100000) return format(value / 100000) + "L";
  if (value >= 1000) return format(value / 1000) + "K";
  return value.toString();
}

export default function Calculator() {
  const [brand, setBrand] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState(null);

  const calculate = () => {
    setError("");
    setResults(null);
    const serviceNum = parseInt(service);

    if (isNaN(serviceNum) || serviceNum < 0) {
      setError("Please enter a valid service number.");
      return;
    }

    if (brand === "Luxury" && city === "City E") {
      setError("🚫 Luxury brand is not available in City E.");
      return;
    }

    const annualLoad = serviceNum * 12;
    const divisor = brand === "Luxury" ? 2.3 : 2.2;
    const units = Math.round(annualLoad / divisor);
    const vars = data[brand][city];

    const repairs = Math.round((vars.collision_rate * units) / 12);
    const labour = repairs * vars.per_car_labour;
    const parts = repairs * vars.per_car_sales;

    setResults({
      repairs,
      labour: formatIndian(labour),
      parts: formatIndian(parts),
    });
  };

  return (
    <div className="calculator-page">
      <h1 className="logo">BodyshopGuru</h1>
      <div className="container">
        <h2>Bodyshop Potential Calculator</h2>

        <label htmlFor="brand">Car Brand Type</label>
        <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="" disabled>Select your Brand Type</option>
          <option>Luxury</option>
          <option>Mass Market</option>
        </select>

        <label htmlFor="city">City Category</label>
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled>Select a city</option>
          <option>City A</option>
          <option>City B</option>
          <option>City C</option>
          <option>City D</option>
          <option>City E</option>
        </select>

        <label htmlFor="service">
          Monthly average Service (All types) + BP Load of past six months
        </label>
        <input
          type="number"
          id="service"
          min="0"
          placeholder="Enter a number"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <button onClick={calculate}>Calculate Your Potential</button>

        {error && <div className="error">{error}</div>}

        {results && (
          <div id="results">
            <div className="result-box">🔧 Repairs Per Month: {results.repairs}</div>
            <div className="result-box">🧰 Labour Revenue: ₹{results.labour}</div>
            <div className="result-box">🛠️ Parts Sales Per Month: ₹{results.parts}</div>
          </div>
        )}
      </div>
    </div>
  );
}
