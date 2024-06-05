import './Adaptability.css'
import React, { useState } from 'react';
const AdaptabilityMap = {
    0: 5,
    1: 5,
    2: 5,
    3: 5,
    4: 10,
    5: 5,
    6: 5,
    7: 0
}
export default function Adaptability({ score, setScore, step, setStep }) {
    const [options, setOptions] = useState([]);
    const [tempScore, setTempScore] = useState(0);
    const handleClick = (index) => {
        if(index==7) {
            if(options.includes(7)) {
                setOptions([]) ;
                return ;
            } 
            setScore(score-tempScore) ;
            setOptions([7]) ;
            setTempScore(0) ;
            return ; 
        }
        if(options.includes(7)) {
            setTempScore(AdaptabilityMap[index]) ;
            setScore(score+AdaptabilityMap[index]) ;
            setOptions([index]) ;
            return ;
        }
        if (options.includes(index)) {
            let newScore = 0;
            let newoptions = options.filter((element) => element != index);
            for (let i of newoptions) {
                newScore += AdaptabilityMap[i];
            }
            newScore = Math.min(10, newScore);
            setScore(score + newScore - tempScore);
            setOptions(newoptions);
            setTempScore(newScore);
        } else {
            setOptions([...options, index]);
            let newScore = tempScore;
            newScore += AdaptabilityMap[index];
            newScore = Math.min(10, newScore);
            setScore(score + newScore - tempScore);
            setTempScore(newScore);
        }

    };

    return (
        <div className='Adaptability-container' style={step === 7 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Adaptability (Maximum 10 points)
            </div>
            <div className='crs-form-description'>
                You and your spouse or common-law partner who will immigrate with you to Canada can earn points for adaptability.
            </div>
            <div className='adaptability-buttons-container'>
                <div className='adaptability-buttons-title'>
                    Level of Adaptability
                </div>
                <div className='adaptability-buttons'>
                    <button className='adaptability-button' style={options.includes(0) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(0)}>Spouse Moderate Language Proficiency</button>
                    <button className='adaptability-button' style={options.includes(1) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(1)}>Spouse Previous Study in Canada</button>
                    <button className='adaptability-button' style={options.includes(2) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(2)}>Spouse Previous Work Experience in Canada</button>
                    <button className='adaptability-button' style={options.includes(3) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(3)}>Primary Applicant Study in Canada</button>
                    <button className='adaptability-button' style={options.includes(4) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(4)}>Primary Applicant Previous Skilled Work Experience in Canada</button>
                    <button className='adaptability-button' style={options.includes(5) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(5)}>Arranged Employment in Canada</button>
                    <button className='adaptability-button' style={options.includes(6) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(6)}>Family Members in Canada</button>
                    <button className='adaptability-button' style={options.includes(7) ? { border: '2px solid blue' } : {}} onClick={() => handleClick(7)}>None</button>
                </div>
            </div>
            <div className="crs-form-buttons-adaptability">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {options.length != 0 ? <button className="crs-form-next">Submit</button> : <button className="crs-form-next" style={{ borderColor: 'red' }}>Submit</button>}
            </div>
        </div>
    )
}

