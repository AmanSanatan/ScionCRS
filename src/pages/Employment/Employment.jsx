import './Employment.css';
import React, { useState } from 'react';
export default function Employment({ score, setScore, step, setStep }) {
    const [Employment, setEmployment] = useState(-1);

    const handleClick = (status) => {
        if(status==Employment){ 
            if(status==1) {
                setScore(score-10) ;
                setEmployment(-1) ;
            } else {
                setEmployment(-1) ;
            }
            return ;
        }
        if (status == 1 && Employment != 1) {
            setScore(score + 10);
            setEmployment(1);
        } else if (status == 0) {
            if (Employment != -1 && Employment != 0) {
                setScore(score - 10);
            }
            setEmployment(0);
        }
    };

    return (
        <div className='employment-container' style={step === 6 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Arranged Employment in Canada (Maximum 10 points)
            </div>
            <div className='crs-form-description'>
                You can get points if you have a valid LMIA accompanied job offer of at least 1 year from a Canadian employer. You must get the job offer in an occupation listed in TEER 0, 1, 2, or 3
            </div>
            <div className='employment-buttons-container'>
                <div className='employment-buttons-title'>
                    Select your experience
                </div>
                <div className='employment-buttons'>
                    <button className='employment-button' style={Employment==1?{border:'2px solid blue'}:{}} onClick={() => handleClick(1)}>Yes</button>
                    <button className='employment-button' style={Employment==0?{border:'2px solid blue'}:{}}  onClick={() => handleClick(0)}>No</button>
                </div>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {Employment != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next" style={{ borderColor: 'red' }}>Next</button>}
            </div>
        </div>
    )
}

