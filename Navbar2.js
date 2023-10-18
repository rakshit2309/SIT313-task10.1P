import React, { useState } from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    try {
      const response = await fetch('http://localhost:5000/subscribe', { // Use the appropriate URL for your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="navbar2">
      <div className="left-items2">
        <span className="username2">SIGN UP FOR DAILY INSIDER</span>
      </div>
      <div className="center-items2">
        <input
          type="text"
          placeholder="Enter your email"
          className="search-bar2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="right-items2">
        <span className="nav-item2" onClick={subscribe}>
          SUBSCRIBE
        </span>
      </div>
    </div>
  );
};

export default Navbar2;
