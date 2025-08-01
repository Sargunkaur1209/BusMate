import React from 'react'
import Bus from '../assets/Bus.jpg';
import Bus2 from '../assets/Bus2.jpg';
import CollegeName from '../assets/CollegeName.avif';
import './About.css';

const About = () => {
  return (
    <div className="about-root">
      <div className="about-card">
        <h1 className="about-title">
          About <span className="about-highlight">BusMate</span>
        </h1>
        <p>
          <b>BusMate</b> is a modern bus management system designed exclusively for <b>PCTE</b> to make your daily commute smarter, safer, and more convenient.<br /><br />
          <span className="about-keyfeatures">Key Features:</span>
          <ul className="about-features-list">
            <li>Real-time bus tracking for students and staff</li>
            <li>Instant notifications for arrivals, delays, and route changes</li>
            <li>Easy access to bus schedules and routes</li>
            <li>Secure and user-friendly interface</li>
            <li>Designed to enhance the PCTE campus experience</li>
          </ul>
          <br />
          Whether you're a student, faculty, or staff member, BusMate ensures you never miss your ride and always stay informed. Join us in making campus transportation seamless and stress-free!
        </p>
      </div>
      <div className="about-images">
        <img src={Bus2} alt="Bus 2" className="about-img" />
        <img src={CollegeName} alt="College Name" className="about-img" />
        <img src={Bus} alt="Bus" className="about-img" />
      </div>
    </div>
  )
};

export default About
