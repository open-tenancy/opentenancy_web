import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Home</strong>
          </Link>
          <div class = "navbar-item has-dropdown is-hoverable">
            <Link className='navbar-link' to='#'>
                            About
            </Link>
            <div class = "navbar-dropdown">
              <Link className='navbar-item' to='/about'>
                              FAQ
              </Link>
              <Link className='navbar-item' to='/team'>
                              The Team
              </Link>
              <Link className='navbar-item' to='/blog'>
                              Blog
              </Link>
            </div>
          </div>
          <div class = "navbar-item has-dropdown is-hoverable">
            <Link className='navbar-link' to='#'>
                            Get Involved
            </Link>
            <div class = "navbar-dropdown">
              <Link className='navbar-item' to='/contribute'>
                              Contribute
              </Link>
              <Link className='navbar-item' to='/sponsor'>
                              Sponsor
              </Link>
            </div>
          </div>
          <Link className='navbar-item' to='/contact'>
                          Contact Us
          </Link>

          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-end'>

            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    id="contact-us"
                    className='button is-warning is-outlined'
                    to='/pricing'>
                            Get Advice
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
