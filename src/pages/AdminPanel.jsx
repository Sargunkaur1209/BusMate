import React from 'react';
import './AdminPanel.css';

const sections = [
  {
    icon: '📊',
    title: 'Dashboard',
    content: [
      'Number of active buses'
    ],
  },
  {
    icon: '🚌',
    title: 'Bus Management',
    content: [
      'Add/Edit/Delete buses',
      'Track maintenance',
    ],
  },
  {
    icon: '📍',
    title: 'Route & Schedule Management',
    content: [
      'Define bus routes (From → To)',
      'Set timing, stops, duration',
      'Assign buses to routes',
      'Live status (on time/delayed)',
    ],
  },

  {
    icon: '👨‍💼',
    title: 'Staff Management',
    content: [
      'Add/edit drivers',
      'Assign shifts/routes',
      'Upload ID proof/license info',
    ],
  },
  {
    icon: '🛠',
    title: 'Support & Feedback',
    content: [
      'View user complaints or messages',
      'Mark as resolved/unresolved',
      'Add notes or follow-ups',
    ],
  },

];

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <div className="admin-dashboard-grid">
        {sections.map((section, idx) => (
          <div className="admin-card" key={idx}>
            <div className="admin-card-title">
              <span className="icon">{section.icon}</span>
              {section.title}
            </div>
            <div className="admin-card-content">
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
