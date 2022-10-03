import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ name, img, level, time, about }) => {

    return (
        <div className='Exercise'>

            <img src={img} alt="" />


            <div className='Excercise-info'>
                <h3>{name}</h3>
                <p>{about}</p>
                <p>Level: {level}</p>
                <p>Time: {time}s</p>

            </div>
            
                <button className='btn-do'>Do It</button>
            
        </div>
    );
};

export default ExerciseList;