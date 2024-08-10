import React from 'react';
import { Carousel } from 'react-bootstrap';
import './demo.css';
import p1 from "./assets/MYPIC.jpg"
import p2 from "./assets/MYPIC2.jpg"
import p3 from "./assets/MYPIC3.jpg"
import p4 from "./assets/MYPIC4.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Demo() {
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

      {/* Description Box */}
      <div className="description-box">
        <h5>Details:</h5>
        <p>Bedroom: 4</p>
        <p>Bathroom: 5</p>
        <div className="description-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-info">
          <img src={p2} alt="Profile" className="profile-pic" />
          <span className="profile-name">John Doe</span>
        </div>
        <div className="phone-number">
          <span>+251948805172</span>
        </div>
      </div>
    </div>
  );
}

export default Demo;
