// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { v4 as uuidv4 } from 'uuid';

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const removeFile = (name) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== name));
  };

  const handleUpload = async () => {
    const zip = new JSZip();
    files.forEach(file => zip.file(file.name, file));

    try {
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const formData = new FormData();
      formData.append('file', zipBlob, 'images.zip');

      await axios.post('http://192.168.1.103:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Files uploaded successfully');
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files');
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {files.map(file => (
          <div key={uuidv4()} style={{ position: 'relative', display: 'inline-block' }}>
            <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100px', height: '100px' }} />
            <button
              onClick={() => removeFile(file.name)}
              style={{ position: 'absolute', top: 0, right: 0 }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
