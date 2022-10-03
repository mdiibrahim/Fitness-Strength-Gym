import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './MainContainer.css'
import ExerciseList from '../ExerciseList/ExerciseList';

const MainContainer = () => {
    const Exercises = [
        {
            img: 'arms_standing_barbell_curl rsz',
            name: 'Arms Standing Barbell Curl',
            level: 'Beginner'
        },
        
    ]
    return (
        <div className='Main-container'>
            <div className='Exercise-container'>
                <div className='Title'>
                    <FontAwesomeIcon icon={faDumbbell} className='Fw-icon'></FontAwesomeIcon>
                    <h1>Fitness Strength Gym</h1>
                </div>

                <div>
                    <p>Today's exercise plan is: </p>
                    <ExerciseList></ExerciseList>
                </div>
            </div>
            <div className='Profile-container'>
                <p>hello</p>
            </div>
        </div>
    );
};

export default MainContainer;