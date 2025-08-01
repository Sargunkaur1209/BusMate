import React from 'react';
import ETblock from '../assets/ETblock.jpg';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contactus-flex-root">
      <div className="contactus-flex-img-col">
        <img src={ETblock} alt="BusMate Logo" className="contactusETblock" />
      </div>
      <div className="contactus-flex-form-col">
        <div className="contactus-card">
          <h1 className="contactus-title">
            Contact <span className="contactus-highlight">BusMate</span>
          </h1>
          <p className="contactus-desc">
            Have questions, feedback, or need support? Reach out to the BusMate team!
          </p>
          <form className="contactus-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="contactus-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="contactus-input"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="contactus-textarea"
            />
            <button
              type="submit"
              className="contactus-btn"
            >
              Send Message
            </button>
          </form>
          <div className="contactus-info">
            <div><b>Email:</b> support@busmate-pcte.com</div>
            <div><b>Phone:</b> +91 98765 43210</div>
            <div><b>Address:</b> PCTE Campus, Ludhiana, Punjab</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
