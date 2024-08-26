// 6th page

import React, { useState } from 'react';
import { Form, Button, Select } from 'antd';

import { Link } from 'react-router-dom';
import '../styles/TrainStyles.css';

import { NavBar } from './navbar';




const { Option } = Select;

const Train = () => {



  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [directRoutePath] = useState(null);

 


  function path1(source, destination) {

    
        fetchTrainDataFromDatabase(source, destination);
    
}


  async function fetchTrainDataFromDatabase(source, destination) {
    const apiUrl = `/api/v1/analytics/train-ctrl?SourceStationName=${source}&DestinationStationName=${destination}`;

    try {
      setLoading(true);
      console.log('API URL:', apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  }





  const onFinish = async (values) => {
    const apiUrl = `/api/v1/analytics/train-ctrl?SourceStationName=${values.SourceStationName}&DestinationStationName=${values.DestinationStationName}`;

    try {
      setLoading(true);
      console.log('API URL:', apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
    path1(values.SourceStationName, values.DestinationStationName);
  };

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    form.setFieldsValue({
      [name]: value
    });
  };

  const allStates = [
    "Mumbai","Pune","Hyderabad","Delhi"
  ];

  const allState = [ "Mumbai","Pune","Hyderabad","Delhi"];

  return (
    <div>
    <header className="main_header fixed_header">
    <div className="container">
    <NavBar/>
      <div>

        <nav className="top_nav_links navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="searchnav">
            <ul className="navbar-nav">
            
            
              <li className="nav-item">
                <Link to="/" className="nav-link">
                 <strong>SignOut</strong> 
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>

  
    <div className="train-container">
    <div className="train-container">
      <div className="train-sub">
        <h2>Search Your Train Based On The Source And Destination</h2>
        <Form form={form} onFinish={onFinish}>
          
          <Form.Item name="SourceStationName" label="Select Source"  onChange={handleChange} > 
            <Select style={{ width: '100%' }}>
              {allStates.map(state => (
                <Option key={state} value={state}>{state}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="DestinationStationName" label="Select Destination" onChange={handleChange}>
            <Select style={{ width: '100%' }}>
              {allState.map(state => (
                <Option key={state} value={state}>{state}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>

        {loading && <p>Loading...</p>}
        {directRoutePath && (
          <div className="direct-route-container">
            <p>{directRoutePath}</p>
          </div>
        )}

{!loading && queryResult.length > 0 ? (
  <div className="query-result">
    <h3>Available Trains</h3>
    <table style={{ backgroundColor: 'white' }}>
      <thead>
        <tr>
          <th>Train Code</th>
          <th>Train Name</th>
          <th>Station Code</th>
          <th>Station Name</th>
          <th>Arrival Time</th>
          <th>Departure Time</th>
          <th>Source Station Code</th>
          <th>Source Station Name</th>
          <th>Destination Station Code</th>
          <th>Destination Station Name</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        {queryResult.map((resultItem, index) => (
          <tr key={index}>
            <td>{resultItem.TrainNO}</td>
            <td>{resultItem.TrainName}</td>
            <td>{resultItem.StationCode}</td>
            <td>{resultItem.StationName}</td>
            <td>{resultItem.Arrivaltime}</td>
            <td>{resultItem.DepartureTime}</td>
            <td>{resultItem.SourceStation}</td>
            <td>{resultItem.SourceStationName}</td>
            <td>{resultItem.DestinationStation}</td>
            <td>{resultItem.DestinationStationName}</td>
            <td>
              <Link to="/add-ticket" className="btn btn-success w-100 rounded-0">
                Book
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : null}
        
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
    </div>
  );
};

export default Train;