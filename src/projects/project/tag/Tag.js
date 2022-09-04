import React from 'react'
import './Tag.css'

function Tag(props) {
  return (
    <div className='tag'
        style={{color: props.color}}>
        {props.text}
    </div>
  )
}

export default Tag