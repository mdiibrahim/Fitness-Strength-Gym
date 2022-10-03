import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ name, img, level,time,about }) => {

    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{about}</p>
                <p>Level: {level}</p>
                <p>Time: {time}s</p>
                <button className='btn-do'>Do It</button>
            </div>
        </div>
    );
};

export default ExerciseList;