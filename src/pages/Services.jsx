import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'Route & Schedule Info',
    desc: 'Access up-to-date bus schedules and route details for all PCTE buses.'
  },
  {
    title: 'User-Friendly Interface',
    desc: 'Enjoy a clean, intuitive, and secure platform designed for students and staff.'
  },
  {
    title: 'Support & Feedback',
    desc: 'Easily contact the BusMate team for help or to share your suggestions.'
  }
];

const busRoutes = [
  { routes: ['Ramgarh'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Kohara'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Jamalpur'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Samrala Chowk'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Atam Park'], morning: '7:55 AM', evening: '4:40 PM' },
  { routes: ['Bus Stand'], morning: '7:55 AM', evening: '4:40 PM' },
  { routes: ['Jagraon'], morning: '7:55 AM', evening: '4:40 PM' },
  { routes: ['Girls Hostel', 'Sherpur Chowk'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Sherpur Chowk'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Pratap Pura'], morning: '7:55 AM', evening: '2:40 PM' },
  { routes: ['Mullanpur'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Raikot'], morning: '7:55 AM', evening: '2:40 PM' },
  { routes: ['Pakhowal Road'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Dugri'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Sudhar'], morning: '7:55 AM', evening: '4:40 PM' },
  { routes: ['Guard Room'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Halwara'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Veer Palace'], morning: '7:55 AM', evening: '2:40 PM' },
  { routes: ['Guard Room'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Pavilion Mall'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Arora Palace'], morning: '7:55 AM', evening: '4:40 PM' },
  { routes: ['Gill Bridge'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Haibowal'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Nanaksar'], morning: '7:55 AM', evening: '2:40 PM' },
  { routes: ['Jalandhar Bypass'], morning: '8:00 AM', evening: '4:40 PM' },
  { routes: ['Basti Jodhewal'], morning: '8:00 AM', evening: '2:40 PM' },
  { routes: ['Sidhwan Bet'], morning: '7:55 AM', evening: '4:40 PM' },
];

const Services = () => {
  const [search, setSearch] = useState('');
  const filteredBuses = busRoutes.filter(
    b =>
      b.routes.some(r => r.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="services-root">
      <h1 className="services-title">
        Bus <span className="services-title-highlight">Routes & Timings</span>
      </h1>
      <div className="services-search-bar">
        <svg style={{ width: 22, height: 22, color: '#ffd914', marginRight: 8 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor"/></svg>
        <input
          type="text"
          placeholder="Search by route..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="services-search-input"
        />
      </div>
      <div className="services-table-container">
        <div className="services-table-header">
          <div>Routes</div>
          <div>Morning Time</div>
          <div>Evening Time</div>
        </div>
        {filteredBuses.length === 0 ? (
          <div className="services-table-empty">No buses found.</div>
        ) : (
          filteredBuses.map((bus, idx) => (
            <div key={idx} className="services-table-row">
              <div>{bus.routes.join(', ')}</div>
              <div className="services-table-time">{bus.morning}</div>
              <div className="services-table-time">{bus.evening}</div>
            </div>
          ))
        )}
      </div>
      <div className="services-cards-container">
        {services.map((service, idx) => (
          <div key={idx} className="services-card">
            <h2 className="services-card-title">{service.title}</h2>
            <p className="services-card-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
