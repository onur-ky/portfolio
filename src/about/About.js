import React from 'react'
import './About.css'

function About() {
    return (
        <div className='content about'>
            <div className='content-wrapper about-wrapper'>
                <hr />
                <div className='row'>
                    <div className='col left'>
                        <div className='image'>
                            <img src='picture.jpeg' alt='portrait'>
                            </img>
                        </div>
                    </div>
                    <div className='col right'>
                        <p>I am currently a soon to graduate bachelor's student at Goethe University, Germany and a software
                            developer. I'm based in Frankfurt, Germany.
                        </p>
                        <p>Since June 2021 I've been working as a student web developer and have experience with Javascript,
                            Django, PostgreSQL stack. I am familiar with other various technologies from my other endevaours.
                            I have a special fondness for React and TypeScript.
                        </p>
                        <p>
                            I've been exposed to diverse environments ranging from academy to industry. I've been a part of
                            the research group for molecular bioinformatics at Goethe University and I'm currently a member of
                            the research group for applied bioinformatics. I partook in various projects, mostly on the software
                            side, and had the chance to come into contact with people of diverse talents.
                        </p>
                        <p>
                            As my time at the university draws near, I want to continue my journey as a software developer and
                            improve my skills in this field while being part of a diverse team.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default About