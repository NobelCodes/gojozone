import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Image, Spinner } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import JSZip from 'jszip';
import './upload.css';

function Upload() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uv, setUv] = useState(null);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 4) {
      alert('You can only upload up to 4 images.');
      return;
    }

    setSelectedImages(files);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      alert('Please select images to upload.');
      return;
    }

    setShowModal(true);
    setLoading(true);
    setUploadStatus('Zipping files...');

    try {
      const zip = new JSZip();
      selectedImages.forEach((file) => {
        zip.file(file.name, file);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const formData = new FormData();
      formData.append('file', zipBlob, 'images.zip');

      setUploadStatus('Uploading...');
      const response = await axios.post('http://192.168.1.103:8070/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { uuv } = response.data;

      setUv(uuv);
      console.log(response);
      setUploadStatus('Upload successful');

      setError(false);
    } catch (error) {
      setUploadStatus(`so ${error}`);
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary" id="navbar">
    <NavLink
    to="/"
    style={{ textDecoration: 'none', color: 'black' }}
  >
<a className="navbar-brand" href="#">GojoZone</a>
  </NavLink>
        
        <div className="ml-auto">
          <form className="form-inline">
            
              
          </form>
        </div>
      </nav>
      <br/>
      <h3>first upload images for the post</h3>
    <div className="container mt-5">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="mb-3"
      />
      <div className="image-preview-container">
        {selectedImages.map((image, index) => (
          <div key={index} className="image-preview">
            <Image src={URL.createObjectURL(image)} alt={`preview-${index}`} rounded />
            <button
              type="button"
              className="btn btn-danger remove-btn"
              onClick={() => handleRemoveImage(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        onClick={handleUpload}
        style={{ padding: '30px', width: '20vw' }}
      >
        Upload
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <h4>{uploadStatus}</h4>
            </div>
          ) : (
            <div className="text-center">
              <h4>{uploadStatus}</h4>
              {error ? (
                <Button variant="danger" onClick={() => window.location.reload()}>
                  Refresh Images
                </Button>
              ) : (
                <Button variant="primary" onClick={() => window.location.href = '/form/'+uv}>
                  Go to Form
                </Button>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default Upload;
