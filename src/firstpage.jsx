import React from 'react';

const BodyshopGuru = ({ onStart }) => {
  return (
    <>
      <style>{`
        .home-page {
          height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #0a1d3c;
          background-image: url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg');
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .home-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page .page {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .home-page .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.65);
          z-index: 0;
        }

        .home-page .logo {
          position: absolute;
          top: 20px;
          left: 30px;
          font-size: 1.8rem;
          font-weight: 700;
          z-index: 1;
        }

        .home-page .info-box {
          background-color: rgba(255, 255, 255, 0);
          border: 2px solid white;
          padding: 5vh 3vw;
          border-radius: 0px;
          width: 50vw;
          text-align: center;
          transform: scale(1.2);
        }

        .home-page .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          position: relative;
          z-index: 1;
        }

        .home-page .headline {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .home-page .subtext {
          font-size: 1rem;
          color: #d1d5db;
          margin-bottom: 40px;
          line-height: 1.8;
          max-width: 600px;
        }

        .home-page .start-button {
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 2px solid #fff;
          padding: 15px 40px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .home-page .start-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div className="home-page">
        <div className="page">
          <div className="overlay"></div>
          <h1 className="logo">BodyshopGuru</h1>

          <div className="center">
            <div className="info-box">
              <h2 className="headline">Know Your Bodyshop’s Limitless Potential</h2>
              <p className="subtext">
                This calculator will help you set realistic revenue targets for your BodyShop
                based on your current performance and industry benchmarks.
              </p>
              <button className="start-button" onClick={onStart}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyshopGuru;
