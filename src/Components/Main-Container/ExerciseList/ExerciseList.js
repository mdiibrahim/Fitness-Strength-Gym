import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ name, img, level, time, about }) => {
    console.log(time)

    return (
        <div className='Exercise'>

            <img src={img} alt="" />


            <div className='Excercise-info'>
                <h3>{name}</h3>
                <p>{about}</p>
                <p>Level: {level} <span className='time'>Time: {time}s</span></p>
                <div>
                    <button className='btn-do'>
                        Do It</button>
                </div>
            </div>



        </div>
    );
};

export default ExerciseList;