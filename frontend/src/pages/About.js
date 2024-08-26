import React from 'react';

import { NavBar } from './navbar';




const About = () => {
  const containerStyle = {
    backgroundColor: '#3498db', 
    color: '#ffffff',
    padding: '20px',
    borderRadius: '10px', 
    textAlign: 'left', 
    fontFamily: 'Times New Roman', 
  };

 

  const aboutUsStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
  };

  return (
    <>
<NavBar/>
    <div className="container" style={containerStyle}>
      <header>
        <h5 style={aboutUsStyle}>About Us</h5>
        <strong style={aboutUsStyle}>RailBuzz</strong>
      </header>
      <section>
        <p>
        *RailBuzz* is a platform where anyone can find comprehensive information about Indian Railways. 
        Instead of searching on Google, you can now get all the details related to Indian Railways in one place.
         Our goal is to provide complete information about various aspects of rail travel, including *train tickets, 
         **PNR status, **facts, **food, **hotels, **retiring rooms, **rules, **festival trains, and **tips & tricks*.
          And  We hope you find our efforts helpful, and we'll strive to answer all your questions.
           Thank you!
        </p>
        
        
      </section>
      {/* <div className="row">
        <div className="col-md-6">
        </div>
      </div> */}
    </div>
    </>
  );
};

export default About;
