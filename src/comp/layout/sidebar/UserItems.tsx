import React from 'react'
import {Link} from 'react-router-dom'
import { IUser } from '../../../types'

const UserItems:React.FC = () => {


  return (
    <div className='users'>
      <Link to='/profile' className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
        <h4 className='user-name'>Egor Kuleshin</h4>
      </Link>
      <Link to='/profile' className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
        <h4 className='user-name'>Egor Kuleshin</h4>
      </Link>
      <Link to='/profile' className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
        <h4 className='user-name'>Egor Kuleshin</h4>
      </Link>
      <Link to='/profile' className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
        <h4 className='user-name'>Egor Kuleshin</h4>
      </Link>
    </div>
  )
}

export default UserItems