import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './MainContainer.css'
import ExerciseList from './ExerciseList/ExerciseList';

const MainContainer = () => {
    
    const LoadExercises = () => {
        const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
        return (
            <div>
                {
                    exercises.map(Exercise => <ExerciseList key={Exercise.id} img={Exercise.img} name={Exercise.name}></ExerciseList>)
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
                <div>
                    <p>Today's exercise plan is: </p>
                    <LoadExercises></LoadExercises>
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