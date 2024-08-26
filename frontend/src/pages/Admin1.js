// src/AddTrainForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { NavBar } from './navbar';

const AddTrainForm = () => {
  const [formData, setFormData] = useState({
    TrainNo: '',
    TrainName: '',
    StationCode: '',
    StationName: '',
    Arrivaltime: '',
    DepartureTime: '',
    Distance: '',
    SourceStation: '',
    SourceStationName: '',
    DestinationStation: '',
    DestinationStationName: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.TrainNo) {
      tempErrors.TrainNo = 'Train Number is required';
    }
      
    if (!formData.TrainName) {
      tempErrors.TrainName = 'Train Name is required';
    }
    if (!formData.StationCode) {
      tempErrors.StationCode = 'Station Code is required';
    }

    if (!formData.StationName) {
      tempErrors.StationName = 'Station Name is required';
    }
    if (!formData.Arrivaltime) {
      tempErrors.Arrivaltime = 'Arrival Time is required';
    }
    if (!formData.DepartureTime) {
      tempErrors.DepartureTime = 'Departure Time is required';
    }
    if (!formData.Distance) {
      tempErrors.Distance = 'Distance is required';
    }
    if (!formData.SourceStation) {
      tempErrors.SourceStation = 'Source Station is required';
    }
    if (!formData.SourceStationName) {
      tempErrors.SourceStationName = 'Source Station Name is required';
    }
    if (!formData.DestinationStation){
       tempErrors.DestinationStation = 'Destination Station is required';
    }
    if (!formData.DestinationStationName){
       tempErrors.DestinationStationName = 'Destination Station Name is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('/trains', formData);
      console.log('Train added successfully:', response.data);
      setFormData({
        TrainNo: '',
        TrainName: '',
        StationCode: '',
        StationName: '',
        Arrivaltime: '',
        DepartureTime: '',
        Distance: '',
        SourceStation: '',
        SourceStationName: '',
        DestinationStation: '',
        DestinationStationName: ''
      });
    } catch (error) {
      console.error('Error adding train:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Add Train</h2>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="TrainNo"
                  placeholder="Train Number"
                  value={formData.TrainNo}
                  onChange={handleChange}
                />
                {errors.TrainNo && <small className="text-danger">{errors.TrainNo}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="TrainName"
                  placeholder="Train Name"
                  value={formData.TrainName}
                  onChange={handleChange}
                />
                {errors.TrainName && <small className="text-danger">{errors.TrainName}</small>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="StationCode"
                  placeholder="Station Code"
                  value={formData.StationCode}
                  onChange={handleChange}
                />
                {errors.StationCode && <small className="text-danger">{errors.StationCode}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="StationName"
                  placeholder="Station Name"
                  value={formData.StationName}
                  onChange={handleChange}
                />
                {errors.StationName && <small className="text-danger">{errors.StationName}</small>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="Arrivaltime"
                  placeholder="Arrival Time"
                  value={formData.Arrivaltime}
                  onChange={handleChange}
                />
                {errors.Arrivaltime && <small className="text-danger">{errors.Arrivaltime}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="DepartureTime"
                  placeholder="Departure Time"
                  value={formData.DepartureTime}
                  onChange={handleChange}
                />
                {errors.DepartureTime && <small className="text-danger">{errors.DepartureTime}</small>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="Distance"
                  placeholder="Distance"
                  value={formData.Distance}
                  onChange={handleChange}
                />
                {errors.Distance && <small className="text-danger">{errors.Distance}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="SourceStation"
                  placeholder="Source Station"
                  value={formData.SourceStation}
                  onChange={handleChange}
                />
                {errors.SourceStation && <small className="text-danger">{errors.SourceStation}</small>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="SourceStationName"
                  placeholder="Source Station Name"
                  value={formData.SourceStationName}
                  onChange={handleChange}
                />
                {errors.SourceStationName && <small className="text-danger">{errors.SourceStationName}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="DestinationStation"
                  placeholder="Destination Station"
                  value={formData.DestinationStation}
                  onChange={handleChange}
                />
                {errors.DestinationStation && <small className="text-danger">{errors.DestinationStation}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="DestinationStationName"
                  placeholder="Destination Station Name"
                  value={formData.DestinationStationName}
                  onChange={handleChange}
                />
                {errors.DestinationStationName && <small className="text-danger">{errors.DestinationStationName}</small>}
              </div>
            </div>
          </div>
          <div className="text-center">
            <button onClick={handleSubmit} className="btn btn-danger">Add Train</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTrainForm;
