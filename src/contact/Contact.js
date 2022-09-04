import React from 'react'
import Icon from '../icon/Icon'
import './Contact.css'

function Contact() {
  return (
    <div className='content contact'>
        <div className='content-wrapper contact-wrapper'>
            <hr/>
            <Icon 
            icon='phone'
            text='+49 1520 399 0084'/>
            <Icon
            icon='mail2'
            text='kayaonur2416@gmail.com'/>
            <hr/>
            My preferred method of communication is per E-mail. I'm happy to hear from you!
        </div>
       
    </div>
  )
}

export default Contact