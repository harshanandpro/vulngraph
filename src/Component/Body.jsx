import React, { useState } from 'react';
import './Body.css';

const Body = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name === 'package.json') {
        setFile(droppedFile);
      } else {
        alert('Please upload a package.json file');
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.name === 'package.json') {
        setFile(selectedFile);
      } else {
        alert('Please upload a package.json file');
      }
    }
  };

  const onButtonClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <section className="body-section">
      <div className="body-container">
        <div className="upload-wrapper">
          <h1 className="upload-main-title">
            Upload Your <span className="gradient-text">package.json</span>
          </h1>
          <p className="upload-subtitle">
            Analyze, validate, and optimize your Node.js package configuration
          </p>
          
          <div 
            className={`upload-area ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="upload-content">
              <div className="upload-icon">📦</div>
              <h3 className="upload-title">Drag & Drop your package.json</h3>
              <p className="upload-text">or</p>
              <button 
                className="upload-button"
                onClick={onButtonClick}
              >
                Browse Files
              </button>
              <input 
                id="file-input"
                type="file"
                className="file-input"
                onChange={handleChange}
                accept=".json"
              />
              <p className="upload-hint">Supports package.json files only</p>
            </div>
          </div>

          {file && (
            <div className="file-info">
              <div className="file-info-icon">✅</div>
              <div className="file-info-details">
                <span className="file-info-name">{file.name}</span>
                <span className="file-info-size">{(file.size / 1024).toFixed(2)} KB</span>
              </div>
              <button 
                className="file-info-remove"
                onClick={() => setFile(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Body;