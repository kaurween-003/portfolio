import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const { serviceId, templateId, publicKey } = emailConfig;

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kulweenkaur.infosec@gmail.com', // Your email
        reply_to: formData.email
      };

      // Send email using EmailJS
      console.log('Sending email with params:', templateParams);
      console.log('Using service:', serviceId, 'template:', templateId);
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      console.log('EmailJS response status:', result.status);
      console.log('EmailJS response text:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Check for specific Gmail API error
      if (error.text && error.text.includes('insufficient authentication scopes')) {
        setSubmitStatus('gmail_scope_error');
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>kulweenkaur.infosec@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (902) 412 9741</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Halifax, Nova Scotia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ Sorry, there was an error sending your message. Please try again or contact me directly at kulweenkaur.infosec@gmail.com
                </div>
              )}
              
              {submitStatus === 'gmail_scope_error' && (
                <div className="form-message error">
                  ❌ Gmail authentication issue detected. The email service needs to be reconfigured. Please contact me directly at kulweenkaur.infosec@gmail.com for now.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
