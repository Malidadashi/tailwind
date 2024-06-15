import React, { useState } from 'react';
import './footer.css'; // Import your CSS for styling

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    alert(`Message sent: ${message}`);
    // Reset input field
    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>UI UX design</li>
          <li>Web development</li>
          <li>Problem solving</li>
          <li>Refactor & redesigning</li>
          <li>Progressive web applications</li>
          <li>Increasing web performance</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li>Services</li>
          <li>Projects</li>
          <li>About me</li>
          <li>Contact me</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Socials</h3>
        <ul>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div className="footer-section footer-input">
        <form onSubmit={handleSubmit}>
          <div className="input-with-button">
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
