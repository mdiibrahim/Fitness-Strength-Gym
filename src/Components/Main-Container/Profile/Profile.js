import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Profile.css'
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
                    <span>5</span>s
                </button>
                <button onClick={()=>TakeABreak(10)}>
                    <span>10</span>s
                </button>
                <button onClick={()=>TakeABreak(15)}>
                    <span>15</span>s
                </button>
                <button onClick={()=>TakeABreak(20)}>
                    <span>20</span>s
                </button>
                <button onClick={()=>TakeABreak(30)}>
                    <span>30</span>s
                </button>
            </div>

            <div>
                <h4>Today's Burning:  </h4>
                <div className='total-time-container'>
                    <p>Exercise time: <span id='previous-exercise-time'>00</span>s</p>
                    <p>Break tme: <span id='break-time'>00</span>s</p>
                </div>
            </div>
            <button className='btn-complete'>Complete</button>
        </div>
    );
};

export default Profile;