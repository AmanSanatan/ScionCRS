import './WorkExperience.css';
import React, { useState } from 'react';
const WEMap = {
    0: 9,
    1: 11,
    2: 13,
    3: 15,
    4: 0
}
export default function WorkExperience({ score, setScore, step, setStep }) {
    const [WE, setWE] = useState(-1);

    const handleClick = (WERange) => {
        const newScore = WEMap[WERange];
        if(WE==WERange) {
            setScore(score-newScore) ;
            setWE(-1) ;
            return ;
        }
        let updatedScore = score;
        if (WE === -1) {
            updatedScore += newScore;
        } else {
            const oldScore = WEMap[WE];
            updatedScore += newScore - oldScore;
        }

        setScore(updatedScore);
        setWE(WERange);

    };

    return (
        <div className='we-container' style={step === 4 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Work Experience (Maximum 15 points)
            </div>
            <div className='crs-form-description'>
                You can get points for the number of years you’ve spent doing full-time paid work (at least 30 hours per week, or an equal amount of part-time [15 hours per week for 24 months]) in most skilled occupations
            </div>
            <div className='we-buttons-container'>
                <div className='we-buttons-title'>
                    Select your experience
                </div>
                <div className='we-buttons'>
                    <button className='we-button' style={WE==4?{border:'2px solid blue'}:{}} onClick={() => handleClick(4)}>Less than 1 year</button>
                    <button className='we-button' style={WE==0?{border:'2px solid blue'}:{}}  onClick={() => handleClick(0)}>1 years</button>
                    <button className='we-button' style={WE==1?{border:'2px solid blue'}:{}}  onClick={() => handleClick(1)}>2-3 years</button>
                    <button className='we-button' style={WE==2?{border:'2px solid blue'}:{}}  onClick={() => handleClick(2)}>4-5 years</button>
                    <button className='we-button' style={WE==3?{border:'2px solid blue'}:{}}  onClick={() => handleClick(3)}>6+ years</button>
                </div>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button> 
                {WE != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next" style={{ borderColor: 'red' }}>Next</button>}
            </div>
        </div>
    )
}

