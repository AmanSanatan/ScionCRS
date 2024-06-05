import './SecondaryLanguage.css';
import React, { useState } from 'react';
export default function SecondaryLanguage({ score, setScore, step, setStep }) {
    const [SL, setSL] = useState(-1);

    const handleClick = (status) => {
        if (status == 1 ) {
            if (SL != 1) {
                setScore(score + 4) ;
                setSL(1) ;
            } else {
                setScore(score - 4) ;
                setSL(-1) ;
            }
        } else if (status == 0) {
            if(SL==1) {
                setScore(score - 4) ;
                setSL(0) ; 
            } else if(SL==-1) {
                setSL(0) ;
            } else if(SL==0) {
                setSL(-1) ;
            }
        }
    };
    return (
        <div className='sl-container' style={step === 2 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Do you speak another one of Canada’s official languages? (Maximum 4 points)
            </div>
            <div className='crs-form-description'>
            </div>
            <div className='sl-buttons-container'>
                <div className='sl-buttons'>
                    <button className='sl-button' style={SL == 0 ? { border: '2px solid blue' } : {}} onClick={() => handleClick(0)}>No / Yes, but not proficient</button>
                    <button className='sl-button' style={SL == 1 ? { border: '2px solid blue' } : {}} onClick={() => handleClick(1)}>Yes, I am moderately skilled</button>
                </div>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {SL != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next" style={{ borderColor: 'red' }}>Next</button>}
            </div>
        </div>
    )
}

