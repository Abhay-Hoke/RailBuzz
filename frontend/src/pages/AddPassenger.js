

import React, { useState} from 'react';
import { message } from "antd";
import axios from 'axios';
import '../styles/page.css';
import { NavBar } from './navbar';


function AddPassenger() {
  
  
  const [errors, setErrors] = useState({ passengerId: '' });

  const [formData, setFormData] = useState({
    passengerId: '',
    name: '',
    age: '',
    dateofaddmission: '',
    gender: 'male',
    occupation: 'government',
    email: '',
    mobileNum: '',
    nationality: '',
    addressCity: '',
    addressState: '',
  });





  const handleSubmit = async (e) => {

    
    e.preventDefault();

    try {
      const res = await axios.post('api/v1/user/AddPassenger', formData);
      

      if (res.data.success) {
        message.success('Added successfully');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error('Axios Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name === 'passengerId') {
      if (!/^\d{0,12}$/.test(value)) {
        setErrors({ ...errors, passengerId: 'Passenger ID must be exactly 12 digits' });
        alert("12 digits required");
      } else {
        setErrors({ ...errors, passengerId: '' });
      }
    }

    //console.log(`Updated ${name} to ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
<NavBar/>

        <div className="add-passenger-container">
      <h2>Add Passenger</h2>
      <div className="personal-info">
        <form layout="vertical" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <div className="form-group">
          <label htmlFor="passengerId">Aadhar Number :</label>
          <input
            type="text"
            id="passengerId"
            name="passengerId"
            value={formData.passengerId}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateofaddmission">Date of Addmission:</label>
          <input
            type="date"
            id="dateofaddmission"
            name="dateofaddmission"
            value={formData.dateofaddmission}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
        Gender:  <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            /> Male
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            /> Female
           
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          >
            <option value="government">Government</option>
            <option value="private">Private</option>
          </select>
        </div>
          </fieldset>
        </form>
      </div>
      <div className="contact-info">
        <form layout="vertical" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Information</legend>
             <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder='name@gmail.com'
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNum"
            name="mobileNum"
            value={formData.mobileNum}
            onChange={handleChange}
            required
            placeholder='+91-xxx-xxx-xxxx'
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressCity">City:</label>
          <select
            id="addressCity"
            name="addressCity"
            value={formData.addressCity}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="addressState">State:</label>
          <select
            id="addressState"
            name="addressState"
            value={formData.addressState}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Madhya pradesh">Madhya pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Telangana">Telangana</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
          </fieldset>
          <button type="submit" >Add Passenger</button>
        </form>
      </div>
      {/* <div className="form-group">
     
      </div> */}
    </div>
    </>
  );
}

export default AddPassenger;