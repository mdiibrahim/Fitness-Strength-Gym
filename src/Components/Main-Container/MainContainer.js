import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './MainContainer.css'

const MainContainer = () => {
    return (
        <div className='Main-container'>
            <div className='Exercise-container'>
                <div className='Title'>
                    <FontAwesomeIcon icon={faDumbbell} className='Fw-icon'></FontAwesomeIcon>
                    <h1>Fitness Strength Gym</h1>
                </div>

                <p>Today's exercise plan is: </p>
            </div>
            <div className='Profile-container'>
                <p>hello</p>
            </div>
        </div>
    );
};

export default MainContainer;