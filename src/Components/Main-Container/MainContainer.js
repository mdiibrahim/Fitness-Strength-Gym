import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './MainContainer.css'
import ExerciseList from './ExerciseList/ExerciseList';
import Profile from './Profile/Profile';

const MainContainer = () => {

    const LoadExercises = () => {
        const [exercises, setExercises] = useState([]);
        useEffect(() => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => setExercises(data))
        }, [])
        return (
            <div className='ExerciseList-container' >
                {
                    exercises.map(Exercise => <ExerciseList
                        key={Exercise.id}
                        img={Exercise.img}
                        name={Exercise.name}
                        level={Exercise.level}
                        time={Exercise.time}
                        about={Exercise.about}
                    ></ExerciseList>)
                }

            </div>

        )
    }
    return (
        <div className='Main-container'>
            <div className='Exercise-container'>

                <div className='Title'>
                    <FontAwesomeIcon icon={faDumbbell} className='Fw-icon'></FontAwesomeIcon>
                    <h1>Fitness Strength Gym</h1>
                </div>

                    <p>Today's exercise plan is: </p>
                    <LoadExercises></LoadExercises>
            </div>
            <div className='Profile-container'>
                <Profile></Profile>
            </div>
        </div>
    );
};


export default MainContainer;