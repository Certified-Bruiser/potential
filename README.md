# ⚙️ Potential Calculator

A tool for Bodyshops across India to unlock their BodyShop Business's full potential.  
Built with **React + Vite** for fast, modern frontend development.

---

## 📂 Table of Contents
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [File Information](#-file-information)


---

## 🛠 Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📂 Project Structure

```plaintext
potential-calculator/
│── public/              # Static assets (favicon, index.html, etc.)
│── src/                 # Application source code
│   ├── assets/          # Images, icons, and other static files
│   ├── components/      # Reusable React components
│   ├── App.jsx          # Main app component (controls navigation)
│   ├── firstpage.jsx    # Entry / Welcome page
│   ├── AppCJS.jsx       # Calculator logic & UI
│   ├── AppC.css         # Styles for the calculator
│   ├── index.js         # React entry point (renders App into DOM)
│── package.json         # Project dependencies & scripts
│── README.md            # Project documentation

## 📑 File Information

| File           | Description |
|----------------|-------------|
| `App.jsx`      | Acts as the **router/controller** of the app. Decides whether to show the welcome page (`firstpage.jsx`) or the calculator (`AppCJS.jsx`) based on state. |
| `firstpage.jsx`| The **entry / welcome page** of the app. Introduces the tool and provides a button to start the calculator. |
| `AppCJS.jsx`   | Contains the **calculator logic & UI** where users can perform calculations. |
| `AppC.css`     | Defines the **styling rules** for the calculator component and its UI elements. |
| `index.js`     | CRA’s entry file. Mounts the `App` component into the DOM (`root` div in `public/index.html`). |
