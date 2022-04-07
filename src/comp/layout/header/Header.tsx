import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

const logo =  require("./logo.png")

const Header:React.FC = () => {
  return (
    <header className='header'>
      <div className="header-wrap">
        <Link to={'/profile/:id'}>
          <img src={logo} alt="" />
        </Link>
        <input type="text" placeholder='Search' className='header-input'/>
      </div>
    </header>
  )
}

export default Header