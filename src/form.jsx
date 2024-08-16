import React, { useState } from 'react';
import axios from 'axios';
import FormSelect from 'react-bootstrap/FormSelect'
import { useParams,useNavigate,NavLink  } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './form.css'
function FormPage() {
  const { id } = useParams(); 
    const navigate = useNavigate(); // Initialize navigate hook
    const [formData, setFormData] = useState({
    name: '',
    listedBy: '',
    furnishing: '',
    condition: '',
    type: '',
    propertySize: '',
    bedrooms: '',
    bathrooms: '',
    phoneNumber: '',
    description: '',
    id: id,
    price: '',
    address: '',
    title: ''
  });
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataPost = {
      id: formData.id,
      name: formData.name,
      listedBy: formData.listedBy,
      furnishing: formData.furnishing,
      condition: formData.condition,
      type: formData.type,
      propertySize: formData.propertySize,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      phoneNumber: formData.phoneNumber,
      description: formData.description,
      price: formData.price,
      address: formData.address,
      title: formData.title
    };
    let poss = JSON.stringify(dataPost, null, 2)
    console.log(poss)
    axios.post('http://192.168.1.103:8070/submit', dataPost)

  .then(response => {
    console.log('Response:', response.data);
    if (response.status === 200) {
          navigate('/'); // Navigate to home page if status code is 200
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
    // Add form submission logic here
    console.log(JSON.stringify(dataPost, null, 2));

  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary" id="navbar">
    <NavLink
    to="/"
    style={{ textDecoration: 'none', color: 'black' }}
  >
 GojoZone
  </NavLink>
        
        <div className="ml-auto">
          <form className="form-inline">
            
              
          </form>
        </div>
      </nav>
    <Form className="p-3 bg-dark text-white " onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Name:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Title:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter title for your post"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Address:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Listed by:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="listedBy"
            value={formData.listedBy}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            <option value="agent">Agent</option>
            <option value="owner">Owner</option>
            <option value="other">Other</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Furnishing:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="furnishing"
            value={formData.furnishing}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            <option value="furnished">Furnished</option>
            <option value="semi-furnished">Semi Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Condition:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            <option value="newly-built">Newly Built</option>
            <option value="old">Old</option>
            <option value="renovated">Renovated</option>
            <option value="under-construction">Under Construction</option>
            <option value="uncompleted">Uncompleted</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Type:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="studio-condo">Studio Condo</option>
            <option value="villa">Villa</option>
            <option value="mansion">Mansion</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Property Size(In m<sup>2</sup>):
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="number"
            placeholder="Enter size in m²"
            name="propertySize"
            value={formData.propertySize}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Number of Bedrooms:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            {[...Array(30).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
            <option value="31">30+</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Number of Bathrooms:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="select"
            name="bathrooms"
            value={formData.bathrooms}

            onChange={handleInputChange}
            className="bg-dark text-white border-secondary"
            required
          >
            <option value="">Select</option>
            {[...Array(30).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
            <option value="31">30+</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="3">
            Phone Number(251948805172):
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              maxLength="12" // Adjusting to accommodate '251(9number)'
              className="bg-dark text-white border-secondary"
              
              required
            />
          </Col>
        </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="3">
          Description:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter a brief description (max 50 characters)"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            maxLength="50"
            className="bg-dark text-white border-secondary"
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
    Price:
  </Form.Label>
  <Col sm="9">
    <Form.Control
      type="number"
      placeholder="Enter price"
      name="price"
      value={formData.price}
      onChange={handleInputChange}
      className="bg-dark text-white border-secondary"
      required
    />

  </Col>
</Form.Group>

 <div id="btn-container">
        <Button variant="primary" type="submit" id="submit-btn">
        Submit
      </Button>
    </div>
    </Form>


    
    </>
  );
}

export default FormPage;
