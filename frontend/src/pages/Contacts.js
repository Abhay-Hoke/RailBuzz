import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




import tejasImage from '../images/tejas.jpg';
import abhayImage from '../images/abhay.jpg';
import ayeshaImage from '../images/ayesha.jpg';

import React from 'react';
import { NavBar } from './navbar';

const Contacts = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth:'80%',
    marginTop: '20px',
    marginLeft: '20px',
  };

  const imageStyle = {
    maxWidth: '40%', 
    marginTop: '20px',
    maxHeight:'50%', 
  };

  const imageStyle1 = {
    maxWidth: '50%', 
    marginTop: '20px',
    maxHeight:'70%', 
  };

  

  return (


    
<>

<NavBar/>
    
    <Row xs={1} md={3} className="g-4">
   
      <Col>
        <Card style={containerStyle}>
        <Card.Img variant="top" src={tejasImage} style={imageStyle}></Card.Img>
          <Card.Body>
            <Card.Title>Tejas Kolhe</Card.Title>
            <Card.Text>
             <p>Email:- tejaskolhe184@gmail.com</p>
             <p>Prn:- 240340320113</p>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        
      <Col>
        <Card style={containerStyle}>
        <Card.Img variant="top" src={abhayImage}  style={imageStyle}/>
          <Card.Body>
            <Card.Title>Abhay Hoke</Card.Title>
            <Card.Text>
            <p>Email:- hokeabhay18@gmail.com</p>
            <p>Prn:- 240340520003</p>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={containerStyle}>
        <Card.Img variant="top" src={ayeshaImage} style={imageStyle1}></Card.Img>
          <Card.Body>
            <Card.Title>Ayesha Sayed</Card.Title>
            <Card.Text>
            <p>Email:- ayeshasayed12@gmail.com</p>
            <p>Prn:- 240340320024</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
   
  </Row>
      

  </>
    
  );
};

export default Contacts;