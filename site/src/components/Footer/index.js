import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            Copyright © Amy Conroy, Anastasia Shmyglia 2021. All Rights Reserved.
          </p>
          <p><a href='/pricing'>Get Advice</a> | <a href='/blog'>Blog</a> | <a href='/contribute'>Contribute</a> | <a href='/about'>About</a> | <a href='/team'>The Team</a> | <a href='/sponsor'>Sponsors</a></p>
          <p><a href='/about'>FAQ</a> | <a href='/privacy'>Privacy Policy</a> | <a href='https://www.buymeacoffee.com/opentenancy'> Buy us a Byte</a> </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
