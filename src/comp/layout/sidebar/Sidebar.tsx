import React from 'react'
import { IUser } from '../../../types'
import Menu from './Menu'
import User from './User'
import UserItems from './UserItems'

const Sidebar:React.FC<IUser> = () => {
  return (
    <div className='sidebar'>
      <User/>
      <Menu/>
    </div>
  )
}

export default Sidebar