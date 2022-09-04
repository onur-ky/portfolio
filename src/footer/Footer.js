import React from 'react'
import './Footer.css'
import Icon from '../icon/Icon'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='copyright'>
          © Onur Kaya
        </div>
        <div className='footer-icons'>
          <Icon 
          icon='code' 
          tooltip='See site source code'
          link='#code'/>

          <Icon 
          icon='github' 
          tooltip='Go to my Github'
          link='https://github.com/onur-ky'/>

          <Icon 
          icon='pdf' 
          tooltip='Download my CV'
          link='cv_onur_kaya.pdf'/>

          <Icon 
          icon='email' 
          tooltip='Send me an Email'
          link='mailto:kayaonur2416@gmail.com'/>

          <Icon 
          icon='linkedin' 
          tooltip='Go to my Linkedin'
          link='https://www.linkedin.com/in/onur-ky/'/>
        </div>
      </div>
    </div>
  )
}

export default Footer