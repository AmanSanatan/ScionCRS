import { useState } from 'react'
import './App.css'
import React from 'react';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Language from './pages/Language/Language.jsx';
import Age from './pages/Age/Age.jsx' ;
import WorkExperience from './pages/WorkExperience/WorkExperience.jsx';
import Education from './pages/Education/Education.jsx';
import Employment from './pages/Employment/Employment.jsx';
import SecondaryLanguage from './pages/SecondaryLanguage/SecondaryLanguage.jsx';
import Adaptability from './pages/Adaptability/Adaptability.jsx';
function App() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div className="crs-form-container">
      <div className='crs-form'>
        <div className='crs-form-step-display'>
          <div className='crs-form-step'>Step {step} out 8</div>
          <div className='crs-form-step-box'>
            <div className='box' style={step == 1 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 2 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 3 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 4 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 5 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 6 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 7 ? { backgroundColor: 'black' } : {}} />
            <div className='box' style={step == 8 ? { backgroundColor: 'black' } : {}} />
          </div>
        </div>
        <div className='crs-form-inputs'>
          <Age score={score} setScore={setScore} step={step} setStep={setStep} />
          <Language score={score} setScore={setScore} step={step} setStep={setStep}/>
          <Education score={score} setScore={setScore} step={step} setStep={setStep}/>
          <Employment score={score} setScore={setScore} step={step} setStep={setStep} />
          <SecondaryLanguage score={score} setScore={setScore} step={step} setStep={setStep} /> 
          <Adaptability score={score} setScore={setScore} step={step} setStep={setStep} />
          <WorkExperience score={score} setScore={setScore} step={step} setStep={setStep}/>
        </div>

      </div>
      <div className='crs-score-display'>
        <div className='crs-score-banner'>
          <img className='crs-score-banner-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/383px-Flag_of_Canada_%28Pantone%29.svg.png" />
        </div>
        <div className='crs-score-section'>
          <div className='crs-score-title'>Your score</div>
          <div className='crs-score'>{score}</div>
        </div>
        <div className='crs-score-banner-contact'>
          <ConnectWithoutContactIcon />
          <div className='crs-score-banner-contact-text'>Talk to an Expert<br />Call 9572835044</div>
        </div>
      </div>
    </div>
  )
}







export default App
