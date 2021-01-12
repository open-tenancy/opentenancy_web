import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p><a href = 'https://mailchi.mp/c6aaa91d8ea3/register'>Newsletter</a> | <a href='https://www.buymeacoffee.com/opentenancy'> Buy us a Byte </a></p>
          <p><a href='/pricing'>Get Advice</a> | <a href='/blog'>Blog</a> | <a href='/contribute'>Contribute</a> | <a href='/about'>About</a> | <a href='/team'>The Team</a> | <a href='/sponsor'>Sponsors</a></p>
          <p><a href='/about'>FAQ</a> | <a href='/privacy'>Privacy Policy</a> </p>
          <p>
            Copyright © Amy Conroy, Anastasia Shmyglia 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
