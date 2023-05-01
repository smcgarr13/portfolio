import React from 'react';

const Project = ({ title, description, href, imgSrc, altText, repo }) => {
    console.log('Project props:', { title, description, href, imgSrc, altText });
    return (
        <div className='flexbox-item'>
            <a href={ href }>
                <div className='container'>
                    <h4>{ title }</h4>
                    <span>{ description } </span>
                    <a href={ repo } target='_blank' rel="noopener noreferrer">
                | GitHub Repo
            </a>
                </div>
                <img src={ imgSrc } alt= {altText } className="project-image" />
            </a>
        </div>
    );
};

export default Project;