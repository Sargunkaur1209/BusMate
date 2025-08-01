import React from 'react'
import  PcteLogo  from "../assets/PcteBus.jpg"
import './Footer.css';

const phoneIcon = (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ffd914" strokeWidth="2" className="footer-icon">
    <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 6.58 6.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z" stroke="#ffd914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const locationIcon = (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ffd914" strokeWidth="2" className="footer-icon">
    <path d="M12 21c-4.97-4.97-8-8.03-8-11A8 8 0 1 1 20 10c0 2.97-3.03 6.03-8 11z" stroke="#ffd914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" fill="#ffd914"/>
  </svg>
);
const emailIcon = (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#ffd914" strokeWidth="2" className="footer-icon">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffd914" strokeWidth="2"/>
    <path d="M3 7l9 6 9-6" stroke="#ffd914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const socialLinks = [
  {
    href: 'https://www.youtube.com/channel/UCanrHeEVzkCQ4_clkqMMT-A',
    label: 'YouTube',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 6 12 6 12 6s-6.2 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18 12 18 12 18s6.2 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
    )
  },
  {
    href: 'https://www.instagram.com/pcteofficial?igsh=dDNiZG1weXg0amQ1',
    label: 'Instagram',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
    )
  },
  {
    href: 'https://www.linkedin.com/school/pcte-ludhiana/',
    label: 'LinkedIn',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg>
    )
  },
  {
    href: 'https://www.facebook.com/share/1JLuJ6swca/',
    label: 'Facebook',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{background:'#1877F3', borderRadius:'50%'}}><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    )
  }
];

const Footer = () => {
  return (
    <>
    <div className = "footer">
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', height:'100%'}}>
        <img src = {PcteLogo} alt = "PcteLogo" className = "PcteLogo"/>
        <div className="footer-socials">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="footer-social-link">
              {React.cloneElement(link.icon, { style: { marginRight: 0, verticalAlign: 'middle', width: '24px', height: '24px' } })}
            </a>
          ))}
        </div>
      </div>
      <div className = "FList">
        <ul>
          <li>{phoneIcon}0161-2888500</li>
          <li>{locationIcon}Campus-1, Baddowal, Ferozepur Road, Ludhiana -142021, Punjab, India </li>
          <li>{locationIcon}Campus-2, Near Baddowal Cantt, Ferozepur Road, Ludhiana-142021, Punjab, India</li>
          <li>{emailIcon}info@pcte.edu.in admissions @pcte.edu.in</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer
