import React from 'react'
import './Icon.css'
import Tooltip from '../tooltip/Tooltip'

function Icon(props) {
  return (
    <div className={`nav-element  ${props.icon} ${props.tooltip ? 'tooltip': ''}`}>
      <a href={props.link}>
        <div className='icon-text-wrapper'>
          <div className='icon-wrapper'>
            <img src={`${props.icon}.svg`}
              alt={props.icon}
              className='nav-icon'>
            </img>
          </div>
          {props.text && <span><div className='icon-text'><b>{props.text}</b></div></span>}
          {props.tooltip && <Tooltip text={props.tooltip}/>}
        </div>
      </a>  
    </div>
  )
}

export default Icon