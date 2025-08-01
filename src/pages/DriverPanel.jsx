import React, { useState, useEffect } from 'react';
import './DriverPanel.css';

const today = new Date();
const dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const routeStops = [
  { stop: 1, name: 'Boys Hostel Block', pickup: '8:00 AM', drop: '4:30 PM' },
  { stop: 2, name: 'Girls Hostel Block', pickup: '8:10 AM', drop: '4:40 PM' },
  { stop: 3, name: 'College Main Gate', pickup: '8:25 AM', drop: '5:00 PM' },
];

const students = [
  { seat: 1, name: 'Ananya Sharma' },
  { seat: 2, name: 'Rahul Verma' },
];

const DriverPanel = () => {
  const [tripStatus, setTripStatus] = useState({
    morningStarted: false,
    morningEnded: false,
    eveningStarted: false,
    eveningEnded: false,
  });
  const [visitedStops, setVisitedStops] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [busReport, setBusReport] = useState({
    fuel: false,
    brakes: false,
    lights: false,
    noIssues: false,
    problem: '',
  });
  const [notices] = useState([
    'Emergency: Route change for tomorrow due to roadwork.',
    'Leave approved for July 12.',
  ]);
  const [profile, setProfile] = useState({
    name: 'Mr. Ramesh',
    id: 'D104',
    phone: '9876543210',
    license: '',
    photo: '',
    email: '',
  });

  // New state for route, bus, and time selection
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [otherTime, setOtherTime] = useState('');

  // List of all routes from Services.jsx
  const allRoutes = [
    'Ramgarh','Kohara','Jamalpur','Samrala Chowk','Atam Park','Bus Stand','Jagraon','Girls Hostel','Sherpur Chowk','Pratap Pura','Mullanpur','Raikot','Pakhowal Road','Dugri','Sudhar','Guard Room','Halwara','Veer Palace','Pavilion Mall','Arora Palace','Gill Bridge','Haibowal','Nanaksar','Jalandhar Bypass','Basti Jodhewal','Sidhwan Bet'
  ];

  useEffect(() => {
    const stored = localStorage.getItem('driverProfile');
    if (stored) {
      const data = JSON.parse(stored);
      setProfile((prev) => ({ ...prev, ...data }));
    }
  }, []);

  // Save driver selections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('driverSelections', JSON.stringify({
      route: selectedRoute,
      bus: selectedBus,
      time: selectedTime,
      otherTime: otherTime
    }));
  }, [selectedRoute, selectedBus, selectedTime, otherTime]);

  const handleTrip = (type) => setTripStatus({ ...tripStatus, [type]: true });
  const handleStopVisit = (stop) => setVisitedStops([...visitedStops, stop]);
  const handleAttendance = (seat, present) => setAttendance({ ...attendance, [seat]: present });
  const handleBusReport = (e) => setBusReport({ ...busReport, [e.target.name]: e.target.value });

  return (
    <div className="driver-panel-container">
      {/* Route, Bus, and Time Selection Section */}
      <div className="driver-selection-section">
        <h2 className="driver-selection-heading"><span id = "Route-for-Color">Route </span>Details</h2>
        <div className="driver-selection-table-wrapper">
          <table className="driver-selection-table">
            <thead>
              <tr>
                <th>Select Route</th>
                <th>Select Bus Number</th>
                <th>Select Time</th>
              </tr>
            </thead>
            <tbody>
              {allRoutes.map((route, idx) => (
                <tr key={route}>
                  <td className="route-list-cell">{route}</td>
                  <td>
                    <select
                      value={selectedBus[idx] || ''}
                      onChange={e => {
                        const newBuses = [...selectedBus];
                        newBuses[idx] = e.target.value;
                        setSelectedBus(newBuses);
                      }}
                    >
                      <option value="">-- Select Bus --</option>
                      {[...Array(11)].map((_, i) => (
                        <option key={i+1} value={`Bus ${i+1}`}>{`Bus ${i+1}`}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={selectedTime[idx] || ''}
                      onChange={e => {
                        const newTimes = [...selectedTime];
                        newTimes[idx] = e.target.value;
                        setSelectedTime(newTimes);
                      }}
                    >
                      <option value="">-- Select Time --</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="4:40 PM">4:40 PM</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="driver-dashboard">
        <h2>Welcome, {profile.name} (Driver ID: {profile.id})</h2>
        <div className="driver-summary">
          <div>✉️ Email: {profile.email}</div>
          <div>🚌 Assigned Bus: #C12 (40-Seater)</div>
          <div>📍 Route: Hostel Campus → College Main Gate</div>
          <div>🕒 Departure: 8:00 AM</div>
          <div>🕒 Return: 4:30 PM</div>
          <div>📅 Date: {dateString}</div>
        </div>
        <div className="driver-trip-btns">
          <button onClick={() => handleTrip('morningStarted')} disabled={tripStatus.morningStarted}>Start Morning Trip</button>
          <button onClick={() => handleTrip('morningEnded')} disabled={!tripStatus.morningStarted || tripStatus.morningEnded}>End Morning Trip</button>
          <button onClick={() => handleTrip('eveningStarted')} disabled={tripStatus.eveningStarted}>Start Evening Trip</button>
          <button onClick={() => handleTrip('eveningEnded')} disabled={!tripStatus.eveningStarted || tripStatus.eveningEnded}>End Evening Trip</button>
        </div>
      </div>
      <div className="driver-section">
        <h3>Route Details</h3>
        <table className="driver-route-table">
          <thead>
            <tr><th>Stop #</th><th>Stop Name</th><th>Pickup Time</th><th>Drop Time</th><th>Visited</th></tr>
          </thead>
          <tbody>
            {routeStops.map(stop => (
              <tr key={stop.stop}>
                <td>{stop.stop}</td>
                <td>{stop.name}</td>
                <td>{stop.pickup}</td>
                <td>{stop.drop}</td>
                <td>
                  <input type="checkbox" checked={visitedStops.includes(stop.stop)} onChange={() => handleStopVisit(stop.stop)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="driver-section">
        <h3>Student Attendance</h3>
        <table className="driver-attendance-table">
          <thead>
            <tr><th>Seat No</th><th>Student Name</th><th>Present</th><th>Absent</th></tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.seat}>
                <td>{s.seat}</td>
                <td>{s.name}</td>
                <td><input type="radio" name={`attend-${s.seat}`} checked={attendance[s.seat] === true} onChange={() => handleAttendance(s.seat, true)} /></td>
                <td><input type="radio" name={`attend-${s.seat}`} checked={attendance[s.seat] === false} onChange={() => handleAttendance(s.seat, false)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="driver-section">
        <h3>Bus Condition Report</h3>
        <form className="driver-bus-report">
          <label><input type="checkbox" name="fuel" checked={busReport.fuel} onChange={e => setBusReport({ ...busReport, fuel: e.target.checked })} /> Fuel Level Okay</label>
          <label><input type="checkbox" name="brakes" checked={busReport.brakes} onChange={e => setBusReport({ ...busReport, brakes: e.target.checked })} /> Brakes Working</label>
          <label><input type="checkbox" name="lights" checked={busReport.lights} onChange={e => setBusReport({ ...busReport, lights: e.target.checked })} /> Lights Working</label>
          <label><input type="checkbox" name="noIssues" checked={busReport.noIssues} onChange={e => setBusReport({ ...busReport, noIssues: e.target.checked })} /> No Issues</label>
          <div>
            <label>Describe Problem: <input type="text" name="problem" value={busReport.problem} onChange={handleBusReport} /></label>
          </div>
          <button type="button">Submit Report</button>
        </form>
      </div>
      <div className="driver-section">
        <h3>Notices & Announcements</h3>
        <ul className="driver-notices">
          {notices.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </div>
      <div className="driver-section">
        <h3>Profile</h3>
        <div className="driver-profile">
          <div><b>Name:</b> {profile.name}</div>
          <div><b>ID:</b> {profile.id}</div>
          <div><b>Phone:</b> {profile.phone}</div>
          <div><b>License:</b> <input type="file" /></div>
          <div><b>Profile Photo:</b> <input type="file" /></div>
        </div>
      </div>
    </div>
  );
};

export default DriverPanel;
