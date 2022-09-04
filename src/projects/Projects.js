import React from 'react'
import Project from './project/Project'
import './Projects.css'
import Tag from './project/tag/Tag'

const ProjectTexts = {
  portfolio: `A simplistic and responsive static portfolio site that fits into every device, 
              made with react.js and uses client side routing. Deployed on github pages.`,
  famly: `For my graduation project I developed a machine learning pipeline for protein function prediction.
            I used labeled protein sequence data from KEGG database and trained artificial neural networks to map query 
            sequences on protein groups.`,
  daviewer: `A full stack web application for visualisation of domain coverage data. Upon request,
            the server queries the selected KO group from MongoDB. A server-side rendered table, styled
            as a heatmap, is then sent to the client. Data can also be prepared as a csv export on the server side.
            The server is made with python flask, containerised with docker and deployed to mogenius. Mogenius' own secret
            management system "key vault" is used for database credentials. The front-end is built with ReactJS and deployed to
            firebase hosting.`
}

function Projects() {
  return (
    <div className='content projects'>
      <div className='content-wrapper projects-wrapper'>
      <Project 
        title='FAMLy'
        text={ProjectTexts.famly}
        type='Machine Learning / Data Science / Bioinformatics'
        code={'https://github.com/onur-ky/FAMLy'}
        tag={<div className='tag-wrapper'>
              <Tag 
              color='#EE4C2C'
              text='PyTorch'/>
              <Tag 
              color='#2c64cc'
              text='Numpy'/>
            </div>
            }
        />

        <Project 
        title='DA Viewer'
        text={ProjectTexts.daviewer}
        type='Web Development / Application / Fullstack'
        projectSite={'https://da-viewer.web.app/'}
        code={'https://github.com/onur-ky/DA-Viewer'}
        tag={<div className='tag-wrapper'>
              <Tag 
              color='#00d8ff'
              text='ReactTS'/>
              <Tag 
              color='#858585'
              text='Flask'/>
              <Tag 
              color='#0db7ed'
              text='Docker'/>
              <Tag 
              color='#4DB33D'
              text='MongoDB'/>
            </div>
            }
        />

        <Project 
        title='Portfolio Site'
        text={ProjectTexts.portfolio}
        type='Web Development / Static / Front-end'
        projectSite={'https://onur-ky.github.io'}
        code={'https://github.com/onur-ky/portfolio'}
        tag={<Tag 
          color='#00d8ff'
          text='ReactJS'/>}
        />
      </div>
    </div>
  )
}

export default Projects