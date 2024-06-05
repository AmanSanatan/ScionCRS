import './Age.css';
import React, { useState } from 'react';
const ageMap = {
    0: 0,
    1: 12,
    2: 11,
    3: 10,
    4: 9,
    5: 8,
    6: 7,
    7: 6,
    8: 5,
    9: 4,
    10: 3,
    11: 2,
    12: 1,
    13: 0,
}
export default function Age({ score, setScore, step, setStep }) {
    const [age, setAge] = useState(-1);

    const handleClick = (ageRange) => {
        const newScore = ageMap[ageRange];
        if(ageRange==age) {
            setScore(score-newScore) ;
            setAge(-1) ;
            return ;
        }
        let updatedScore = score;
        if (age === -1) {
            updatedScore += newScore;
        } else {
            const oldScore = ageMap[age];
            updatedScore += newScore - oldScore;
        }

        setScore(updatedScore);
        setAge(ageRange);

    };

    return (
        <div className='age-container' style={step === 5 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Age (Maximum 12 points)
            </div>
            <div className='crs-form-description'>
                You’ll get points based on your age on the day IRCC receives your application
            </div>
            <div className='age-buttons-container'>
                <div className='age-buttons-title'>
                    Select Your Age
                </div>
                <div className='age-buttons'>
                    <button className='age-button' style={age==0?{border:'2px solid blue'}:{}} onClick={() => handleClick(0)}>Below 18</button>
                    <button className='age-button' style={age==1?{border:'2px solid blue'}:{}}  onClick={() => handleClick(1)}>18-35</button>
                    <button className='age-button' style={age==2?{border:'2px solid blue'}:{}}  onClick={() => handleClick(2)}>36</button>
                    <button className='age-button' style={age==3?{border:'2px solid blue'}:{}}  onClick={() => handleClick(3)}>37</button>
                    <button className='age-button' style={age==4?{border:'2px solid blue'}:{}}  onClick={() => handleClick(4)}>38</button>
                    <button className='age-button' style={age==5?{border:'2px solid blue'}:{}}  onClick={() => handleClick(5)}>39</button>
                    <button className='age-button' style={age==6?{border:'2px solid blue'}:{}}  onClick={() => handleClick(6)}>40</button>
                    <button className='age-button' style={age==7?{border:'2px solid blue'}:{}}  onClick={() => handleClick(7)}>41</button>
                    <button className='age-button' style={age==8?{border:'2px solid blue'}:{}}  onClick={() => handleClick(8)}>42</button>
                    <button className='age-button' style={age==9?{border:'2px solid blue'}:{}}  onClick={() => handleClick(9)}>43</button>
                    <button className='age-button' style={age==10?{border:'2px solid blue'}:{}} onClick={() => handleClick(10)}>44</button>
                    <button className='age-button' style={age==11?{border:'2px solid blue'}:{}} onClick={() => handleClick(11)}>45</button>
                    <button className='age-button' style={age==12?{border:'2px solid blue'}:{}} onClick={() => handleClick(12)}>46</button>
                    <button className='age-button' style={age==13?{border:'2px solid blue'}:{}} onClick={() => handleClick(13)}>47 or more</button>
                </div>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {age != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next" style={{ borderColor: 'red' }}>Next</button>}
            </div>
        </div>
    )
}
