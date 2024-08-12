import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Buy from './Buy'; // Ensure this component exists
import App from "./App.jsx"
import p4 from "./assets/MYPIC4.jpg";
function HomePage() {
  const cardData = [
    {
      title: 'Luxury Apartment in Kera',
      price: '2,000,000 ETB',
      imageSrc: p4,
    },
    {
      title: 'Luxury Apartment in Bole',
      price: '3,000,000 ETB',
      imageSrc: p4,
    },
    // Add more card data as needed
  ];

  return (
    
      <Routes>
        <Route path="/" element={<Home cardData={cardData} />} />
        <Route path="/buy/:id" element={<App />} />
        <Route path="/app" element={<App/>}/>
      </Routes>
    
  );
}

export default HomePage;
