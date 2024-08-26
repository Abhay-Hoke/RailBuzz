import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/AddPassenger.css";
import { NavBar } from './navbar';

function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updated ${name} to ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.password) {
      setIsLoggedIn(true);
      alert('Login successfully!');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="admin-login-page">
      <NavBar></NavBar>
      <div className="add-passenger-container">
        <h2>Admin Login</h2>
        <div className="personal-info">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Log in
            </button>
          </form>
          {isLoggedIn && (
            <Link to="/analytics" className="btn btn-success w-100 rounded-0 mt-3">
              Go to next..
            </Link>
          )}
        </div>
      </div>
      <footer className="fixed-bottom">
        <div className="container d-flex flex-column align-items-center">
          <div className="mt-3">
            <p className="copyright">© 2024 RailBuzz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminLogin;
