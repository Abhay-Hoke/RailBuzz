import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "./navbar";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
  
    axios.get("/customers")
      .then(response => {
        setCustomers(response.data);
       
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  

  return (
    <>
    <NavBar/>
    <div style={{ maxWidth: 500 }}>
      <div className="train-container" style={{ backgroundImage: 'url("train.png")', backgroundSize: 'cover', backgroundPosition: 'center', height:1400 ,width:1515 }}>
      <h3>Customer Details</h3>
      
      <table style={{ backgroundColor: 'white', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Admission</th>
            <th>Gender</th>
            <th>Occupation</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Nationality</th>
            <th>Address City</th>
            <th>Address State</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.passengerId}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.dateofaddmission}</td>
              <td>{customer.gender}</td>
              <td>{customer.occupation}</td>
              <td>{customer.email}</td>
              <td>{customer.mobileNum}</td>
              <td>{customer.nationality}</td>
              <td>{customer.addressCity}</td>
              <td>{customer.addressState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div></>
  );
};

export default CustomerTable;
