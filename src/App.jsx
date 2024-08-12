// src/App.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './App.css';
import p1 from "./assets/MYPIC.jpg";
import p2 from "./assets/MYPIC2.jpg";
import p3 from "./assets/MYPIC3.jpg";
import p4 from "./assets/MYPIC4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data
const properties = [
  {
    title: "Luxury Apartment in Kera",
    address: "Kera Beret",
    size: "50 m²",
    condition: "5 years used",
    furnishing: "Furnished",
    lister: "owner 1",
    description: "This is description 1",
    apartama: "3 Bedroom Villa",
    bed: "3 Beds",
    bathroom: "2 Bathrooms",
  },
  {
    title: "Luxury Apartment in Bole",
    address: "Property Address 2",
    size: "100 m²",
    condition: "New",
    furnishing: "Partially Furnished",
    lister: "owner 2",
    description: "This is description 2",
    apartama: "2 Bedroom Apartment",
    bed: "2 Beds",
    bathroom: "1 Bathroom",
  },
  // Add more properties here
];

function App() {
  const { id } = useParams();
  const property = properties[id] || properties[0]; // Default to first property if ID not found

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">GojoZone</a>
        <div className="ml-auto">
          <form className="form-inline">
            <a href="https://www.google.com" className="search-link">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span className="search-icon">&#128269;</span> {/* Search icon */}
            </a>
          </form>
        </div>
      </nav>

      {/* Carousel */}
      <Carousel className="my-3">
        <Carousel.Item>
          <img className="d-block w-100" src={p1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="scroll-container">
          <div className="scroll-content">
            <div className="item">
              <p>{property.apartama}</p>
            </div>
            <div className="item">
              <p>{property.bed}</p>
            </div>
            <div className="item">
              <p>{property.bathroom}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description-box">
        <h1>{property.title}</h1>
        <br />
        <div className="property-grid">
          <div className="propertyofitem">
            <div className="title">{property.address}</div>
            <div className="description">PROPERTY ADDRESS</div>
          </div>
          <div className="propertyofitem">
            <div className="title">{property.size}</div>
            <div className="description">PROPERTY SIZE</div>
          </div>
          <div className="propertyofitem">
            <div className="title">{property.condition}</div>
            <div className="description">PROPERTY CONDITION</div>
          </div>
          <div className="propertyofitem">
            <div className="title">{property.furnishing}</div>
            <div className="description">PROPERTY FURNISHING</div>
          </div>
          <div className="propertyofitem">
            <div className="title">{property.lister}</div>
            <div className="description">PROPERTY LISTER</div>
          </div>
        </div>

        <hr />
        <div className="description-text">
          <div className="description-text-box">
            <p>{property.description}</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-info">
          <img src={p1} alt="Profile" className="profile-pic" />
          <span className="profile-name">This is phone number</span>
        </div>
        <div className="phone-number">
          <span>+251948805172</span>
        </div>
      </div>
    </div>
  );
}

export default App;
