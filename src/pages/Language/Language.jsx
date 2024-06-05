import React, { useState } from "react";
import './Language.css';

export default function Language({ step, setStep, score, setScore }) {
    const [numOptions, setNumOptions] = useState(0);
    const [reading, setReading] = useState(-1);
    const [speaking, setSpeaking] = useState(-1);
    const [listening, setListening] = useState(-1);
    const [writing, setWriting] = useState(-1);

    const handleChange = (event, type) => {
        let newVal = Number(event.target.value);
        let oldVal;

        switch (type) {
            case "reading":
                oldVal = reading;
                break;
            case "writing":
                oldVal = writing;
                break;
            case "listening":
                oldVal = listening;
                break;
            case "speaking":
                oldVal = speaking;
                break;
            default:
                oldVal = -1;
        }

        let oldNumOptions = numOptions;
        if (oldVal === -1 && newVal !== -1) {
            setNumOptions(numOptions + 1);
            if (newVal === 0) {
                setScore(score + 4);
            } else if (newVal === 1) {
                setScore(score + 5);
            } else if (newVal === 2) {
                setScore(score + 6);
            } else if (newVal === 3) {
                setScore(score + 0);
            }
        } else {
            let delta = 0;
            if (oldVal === 0) {
                delta -= 4;
            } else if (oldVal === 1) {
                delta -= 5;
            } else if (oldVal === 2) {
                delta -= 6;
            } else if (oldVal === 3) {
                delta -= 0;
            }

            if (newVal === -1) {
                setNumOptions(numOptions - 1);
            } else if (newVal === 0) {
                delta += 4;
            } else if (newVal === 1) {
                delta += 5;
            } else if (newVal === 2) {
                delta += 6;
            } else if (newVal == 3) {
                delta += 0;
            }
            setScore(score + delta);
        }

        switch (type) {
            case "reading":
                setReading(newVal);
                break;
            case "writing":
                setWriting(newVal);
                break;
            case "listening":
                setListening(newVal);
                break;
            case "speaking":
                setSpeaking(newVal);
                break;
        }
    };

    return (
        <div className='language-container' style={step===1?{display:'block'}:{display:'none'}}>
            <div className='crs-form-heading'>
                Language Skills (Maximum 24 points)
            </div>
            <div className='crs-form-description'>
                It’s very important to be able to communicate in one or both of Canada’s official languages. Knowing English, French or both helps you in the Canadian job market.
            </div>
            <div className="language-inputs">
                <div className="language-input">
                    <div className="language-input-title">
                        Reading
                    </div>
                    <select
                        id="language-reading-select"
                        value={reading}
                        onChange={(event) => handleChange(event, "reading")}
                    >
                        <option value="-1">Please select an option</option>
                        <option value="3">Not Skilled</option>
                        <option value="0">Moderately Skilled</option>
                        <option value="1">Skilled</option>
                        <option value="2">Highly Skilled</option>
                    </select>
                </div>
                <div className="language-input">
                    <div className="language-input-title">
                        Speaking
                    </div>
                    <select
                        id="language-speaking-select"
                        value={speaking}
                        onChange={(event) => handleChange(event, "speaking")}
                    >
                        <option value="-1">Please select an option</option>
                        <option value="3">Not Skilled</option>
                        <option value="0">Moderately Skilled</option>
                        <option value="1">Skilled</option>
                        <option value="2">Highly Skilled</option>
                    </select>
                </div>
                <div className="language-input">
                    <div className="language-input-title">
                        Listening
                    </div>
                    <select
                        id="language-listening-select"
                        value={listening}
                        onChange={(event) => handleChange(event, "listening")}
                    >
                        <option value="-1">Please select an option</option>
                        <option value="3">Not Skilled</option>
                        <option value="0">Moderately Skilled</option>
                        <option value="1">Skilled</option>
                        <option value="2">Highly Skilled</option>
                    </select>
                </div>
                <div className="language-input">
                    <div className="language-input-title">
                        Writing
                    </div>
                    <select
                        id="language-writing-select"
                        value={writing}
                        onChange={(event) => handleChange(event, "writing")}
                    >
                        <option value="-1">Please select an option</option>
                        <option value="3">Not Skilled</option>
                        <option value="0">Moderately Skilled</option>
                        <option value="1">Skilled</option>
                        <option value="2">Highly Skilled</option>
                    </select>
                </div>
            </div>
            <div className="crs-form-buttons">
                {numOptions==4?<button className="crs-form-next" onClick={()=>{setStep(step+1)}}>Next</button>:<button className="crs-form-next" style={{borderColor:'red'}}>Next</button>}
                
            </div>

        </div>
    );
}
