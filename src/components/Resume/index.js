import './index.scss';
import React from 'react';
import ResumePage1 from '../../assets/images/DathonWeberResumePage1.png'
import ResumePage2 from '../../assets/images/DathonWeberResumePage2.png'

const ResumePage = () => {
    return (
        <div className='resume-page'>
            <h1 className='resume-header'>My Resume</h1>
            <div className='resume-pages'>
                <img className='resume-page1' src={ResumePage1} alt="Resume Page 1" />
                
                <img className='resume-page2' src={ResumePage2} alt="Resume Page 2" />
            </div>
        </div>
    );
}

export default ResumePage;
