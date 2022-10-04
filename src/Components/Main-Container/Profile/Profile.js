import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Profile.css'
const Profile = () => {
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
                <button>
                    <span>5</span>s
                </button>
                <button>
                    <span>10</span>s
                </button>
                <button>
                    <span>15</span>s
                </button>
                <button>
                    <span>20</span>s
                </button>
                <button>
                    <span>30</span>s
                </button>
            </div>

            <div>
                <h4>Today's Burning:  </h4>
                <div className='total-time-container'>
                    <p>Exercise time: <span id='previous-exercise-time'>00</span>s</p>
                    <p>Break tme: <span>00</span>s</p>
                </div>
            </div>
            <button className='btn-complete'>Complete</button>
        </div>
    );
};

export default Profile;