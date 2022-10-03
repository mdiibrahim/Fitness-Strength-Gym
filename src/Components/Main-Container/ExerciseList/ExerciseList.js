import React from 'react';

const ExerciseList = ({name,img}) => {
  
    return (
        <div>
            {/* <img src={exercise.img} alt="" /> */}
            <p>{name}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default ExerciseList;