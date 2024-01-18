import React from 'react';
import './Contact.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>Contact Us</h2>
        <p>Have any questions or just want to say hi? Reach out to us!</p>
      </div>

      <div className="contacts-content">
        {/* Social Accounts Section */}
        <div className="contacts-social">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            {/* Facebook */}
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>

            {/* GitHub */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contacts-form">
          <h3>Send us a Message</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
