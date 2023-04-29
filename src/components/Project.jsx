import React from 'react';

const Project = ({ title, description, href, imgSrc, altText }) => {
    console.log('Project props:', { title, description, href, imgSrc, altText });
    return (
        <div className='flexbox-item'>
            <a href={ href }>
                <div className='container'>
                    <h4>{ title }</h4>
                    <span>{ description }</span>
                </div>
                <img src={ imgSrc } alt= {altText } />
            </a>
        </div>
    );
};

export default Project;