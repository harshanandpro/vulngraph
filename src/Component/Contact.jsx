import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get In <span className="gradient-text">Touch</span></h1>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-description">
                Have questions or feedback? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📧</div>
                  <div className="info-details">
                    <h3>Email</h3>
                    <p>support@packagehub.com</p>
                    <p>hello@packagehub.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h3>Location</h3>
                    <p>Delhi, India</p>
                    <p>Remote First</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">🕐</div>
                  <div className="info-details">
                    <h3>Hours</h3>
                    <p>Mon - Fri: 9AM - 6PM</p>
                    <p>Weekend: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">🐙</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                  <span className="button-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;