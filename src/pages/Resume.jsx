import React from 'react';
import resumeImage from '../assets/smcgarr_resume_1222-06.jpg';
import resumePdf from '../assets/smcgarr_resume_1222-06.pdf'

const Resume = () => {
    return (
        <section className='Resume'>
            <h3>My Resume</h3>
            <div>
                <a href={ resumePdf } target='_blank' rel='noopener noreferrer'>
                <img src={resumeImage} alt='Resume' />
                </a>
            </div>
        </section>
    );
};

export default Resume;