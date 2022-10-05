import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Profile.css';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';




const Profile = ({TakeABreak}) => {
    return (
        <div className='profile'>
            
            <div className='profile-name'>
                <div>
                    <img className='profile-pic' src="profile.png" alt="" />
                </div>
                <div>
                    <p>
                        Mohammad Ibrahim
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <small>Chattogram, Bangladesh</small>
                    </p>
                </div>
            </div>
            <div className='profile-contact'>
                <h3>Email: ibrahim@google.com</h3>
                <h4>Phone: 0123456789</h4>
            </div>
            <p>Take a break: </p>
            <div className='break-time-container'>
                <button onClick={()=>TakeABreak(5)}>
                    5s
                </button>
                <button onClick={()=>TakeABreak(10)}>
                    10s
                </button>
                <button onClick={()=>TakeABreak(15)}>
                    15s
                </button>
                <button onClick={()=>TakeABreak(20)}>
                    20s
                </button>
                <button onClick={()=>TakeABreak(30)}>
                    30s
                </button>
            </div>
           
            <div>
                <h4>Today's Burning:  </h4>
                <div className='total-time-container'>
                    <p>Exercise time: <span id='previous-exercise-time'>00</span>s</p>
                    <p>Break tme: <span id='break-time'>00</span>s</p>
                </div>
            </div>
            <AutohideExample></AutohideExample>
        </div>
    );
};
function AutohideExample() {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Congratulations!!!</strong>
            </Toast.Header>
            <Toast.Body>Woohoo, you're great! You are finished today's exercise.</Toast.Body>
          </Toast>
        </Col>
            <Col xs={6}>
          <Button onClick={() => setShow(true)} className='btn-complete' >Finish</Button>
        </Col>
      </Row>
    );
  }

export  {Profile,AutohideExample};