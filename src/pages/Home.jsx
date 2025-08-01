import React, { useState, useEffect } from 'react'
import Bus from '../assets/Bus.jpg';
import path from '../assets/path.jpg';
import { useNavigate } from 'react-router-dom';
import { HomeIcons } from '../assets/HomeIcons';
import './Home.css';
import BusGif from '../assets/BusGif.gif';
import Bus2 from '../assets/Bus2.jpg';
import Destination from '../assets/Destination.png';
import Shape1 from '../assets/Shape1.png';
import Shape2 from '../assets/Shape2.png';
import Shape3 from '../assets/Shape3.png';

const routes = [
  'Ramgarh', 'Kohara', 'Jamalpur', 'Samrala Chowk', 'Atam Park', 'Bus Stand', 'Jagraon',
  'Girls Hostel', 'Sherpur Chowk', 'Pratap Pura', 'Mullanpur', 'Raikot', 'Pakhowal Road',
  'Dugri', 'Sudhar', 'Guard Room', 'Halwara', 'Veer Palace', 'Guard Room', 'Pavilion Mall',
  'Arora Palace', 'Gill Bridge', 'Haibowal', 'Nanaksar', 'Jalandhar Bypass', 'Basti Jodhewal', 'Sidhwan Bet'
];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [busInfo, setBusInfo] = useState({ bus: '', time: '' });
  const filteredRoutes = routes.filter(route => route.toLowerCase().includes(search.toLowerCase()));

  // For syncing with DriverPanel
  useEffect(() => {
    const driverSelections = localStorage.getItem('driverSelections');
    if (driverSelections) {
      const { route, bus, time, otherTime } = JSON.parse(driverSelections);
      setSelectedRoute(route || '');
      setSearch(route || '');
      let busStr = '';
      if (typeof bus === 'string') {
        busStr = bus.replace('Bus ', '');
      } else if (typeof bus === 'number') {
        busStr = String(bus);
      }
      setBusInfo({ bus: busStr, time: time === 'other' ? otherTime : time });
    }
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShowDropdown(true);
    setSelectedRoute('');
  };

  const handleRouteClick = (route) => {
    setSearch(route);
    setSelectedRoute(route);
    setShowDropdown(false);
    // Simulate fetching bus number and time for the selected route
    const busNumber = Math.floor(Math.random() * 100) + 1;
    const busTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;
    setBusInfo({ bus: busNumber, time: busTime });
  };

  
  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 120); // Delay to allow click
  };

  return (
    <>
    <div className='home'>
      <img src={Bus} alt="bus photo" className='bus' />
      {/* Moving Bus GIF Animation */}
      <div className="Welcome">
        <p>
          <span id="Greet">Welcome To BusMate !</span>
          <span id="Msg">"Track Your College Bus in Real-Time, Anytime, Anywhere"</span>
        </p>
        <div className="button">
          <button
            className="learn-more-btn"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-section-header">
            {HomeIcons.route}
            <span className="home-section-header-label">Routes</span>
          </div>
          <div className="search-select-group">
            <input
              type="text"
              className="search-select-input"
              placeholder="Search or select route..."
              value={search}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              autoComplete="off"
            />
            {showDropdown && filteredRoutes.length > 0 && (
              <ul className="search-select-dropdown-list">
                {filteredRoutes.map(route => (
                  <li
                    key={route}
                    className="search-select-dropdown-item"
                    onMouseDown={() => handleRouteClick(route)}
                  >
                    {route}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="home-section">
          <div className="home-section-header">
            {HomeIcons.bus}
            <span className="home-section-header-label">Bus Number</span>
          </div>
          <div className="home-section-bus-info">
            {busInfo.bus ? `Bus ${busInfo.bus}` : '--'}
          </div>
        </div>
        <div className="home-section">
          <div className="home-section-header">
            {HomeIcons.time}
            <span className="home-section-header-label">Time</span>
          </div>
          <div className="home-section-time-info">
            {busInfo.time || '--'}
          </div>
        </div>
      </div>
    </div>
    {/* Wave Divider - Bus Path (Top) */}
    <div className="wave-divider">
      <svg viewBox="0 0 1440 120" className="wave-svg" preserveAspectRatio="none">
        <path d="M0,100 Q360,40 720,60 T1440,10 L1440,120 L0,120 Z" fill="rgb(51,51,51)" />
      </svg>
    </div>
    {/* Collapsed: Moving Bus GIF and Bottom Wave Divider */}
    <div style={{ position: 'relative' }} className='bus-footer'>
      <div className="moving-bus-container"><br/>
        <img src={path} alt="path" className='path'/>
        {/* <img src={Destination} alt="Destination" className="destination-image" /> */}
        <img src={BusGif} alt="Moving Bus" className="moving-bus-gif" />
      <div className="WhyBusMate">
          <svg viewBox="" className="wave-svg" preserveAspectRatio="none">
            <path d="M0,120 Q360,40 720,60 T1440,30 L1440,0 L0,0 Z" fill="rgb(51,51,51)" />
          </svg>
          <h1>Why <span id = "Bm">BusMate</span></h1>
          <div className = "WhyBusMate2">
        <p className = "P1">Safe and Reliable Transportation
          At Busmate, we prioritize your safety and comfort. Our buses are well-maintained, and our drivers are experienced and trained to ensure a smooth ride.</p>

         <p className = "P2">Convenient and Affordable
           We understand that commuting can be expensive and inconvenient. That's why we offer affordable fares and convenient routes to make your daily commute easier.
         </p>
         </div>
        </div>
 </div>
      </div>
      <div className = "Shape">
        <img src = {Bus2} alt = "Bus2" className = "Bus2"/>
        <h1 id = "How-It-Works">How it <span id = "Works">Works ?</span></h1>
        <span id = "Search-Your-Route">Search your route</span>
        <span id = "Reach-On-Time">Reach on time</span>
                <span id = "Find-Your-Bus">Find your bus</span>

        <div className = "AnimationFor2">
        <div className = "Shape1"><img src = {Shape1} alt = "Shape1" className = "Img1Shape"/></div>
        <div className = "Shape2"><img src = {Shape2} alt = "Shape2" className = "Img2Shape"/></div>
        </div>
        <div className = "S3">
        <div className = "Shape3"><img src = {Shape3} alt = "Shape3" className = "Img3Shape"/></div>
        </div>
      </div>
    </>
    
  )
}

export default Home
