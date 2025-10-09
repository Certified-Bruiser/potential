import React from "react";

export default function Hero({ onStart }) {
  return (
    <div className="hero">
      <h1>
        Know Your <span>Bodyshop's</span> Limitless Potential
      </h1>
      <p>
        This calculator will help you set realistic revenue targets for your
        BodyShop based on your current performance and industry benchmarks
      </p>
      <div>
        <button onClick={onStart}>Start</button>
        <span className="benefits">
          Free • No signup required • Instant results
        </span>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="number">25+</div>
          <div className="label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="number">30+</div>
          <div className="label">Bodyshops Served</div>
        </div>
        <div className="stat">
          <div className="number">100%</div>
          <div className="label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
