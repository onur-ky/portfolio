import React from 'react'
import './Project.css'
import Icon from '../../icon/Icon'


function Project(props) {
  return (
    <div className='project'>
        <div className='project-title'>
            <div><h3>{props.title}</h3></div>
            {props.tag}
        </div>
        <div className='project-type'>
            <i>{props.type}</i>
        </div>
        <div className='project-text'>
            {props.text}
        </div>
        <div className='project-links'>
            {props.projectSite && 
            <a href={props.projectSite}>
                <div className='project-site project-btn'>
                    <Icon icon='internet'/>
                    <i>Site</i>
                </div>
            </a>
            }
            {props.code &&
            <a href={props.code}>
                <div className='project-code project-btn'
                style={{marginLeft: props.projectSite ? '8px' : '0px'}}>
                    <Icon icon='code'/>
                    <i>Code</i>
                </div>
            </a>
            }
        </div>
    </div>
  )
}

export default Project