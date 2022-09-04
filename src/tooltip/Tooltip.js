import React from 'react'
import './Tooltip.css'

function Tooltip(props) {
  return (
    <div className='tooltiptext'>
        {props.text}
    </div>
  )
}

export default Tooltip