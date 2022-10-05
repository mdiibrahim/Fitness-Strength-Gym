import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ name, img, level, time, about, DoExercise}) => {
    
    return (
        <div className='Exercise'>

            <img src={img} alt="" />


            <div className='Excercise-info'>
                <div>
                    <h3>{name}</h3>
                    <p>{about}</p>
                    <p>Level: {level} </p>
                    <p >Exercise Time: <span>{time}</span>s</p>
                </div>
                <div>
                    <button className='btn-do' onClick={()=>DoExercise(time)}>
                        Do It</button>
                </div>
            </div>



        </div>
    );
};

export default ExerciseList;