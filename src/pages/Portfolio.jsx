import React from 'react';
import Project from '../components/Project';
import projects from '../data/projectData';

const Portfolio = () => {
    return (
       <section className='page-selection' id='work'>
            <h3>my work</h3>
            <div className='flexbox-container'>
                {projects.map((project) => (
                    <Project
                    key={ project.title }
                    title={ project.title }
                    description={ project.description }
                    href={ project.href }
                    imgSrc={ project.imgSrc }
                    altText={ project.altText }
                    repo={ project.repo }
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;