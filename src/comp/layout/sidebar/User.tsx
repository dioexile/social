import { signOut } from 'firebase/auth'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IUser } from '../../../types'
import { useAuth } from '../../providers/useAuth'

const User:React.FC<IUser> = () => {

  const {user, ga} = useAuth()
  const history = useHistory()
  const logout = () => {
    signOut(ga)
    history.push('/auth')
  }
  return (
    <div className='you'>
      <Link to='/profile' className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='user-photo'/>
        <h4 className='user-name'>{user?.name}</h4>
      </Link>
      <button onClick={logout} className='logOutBtn'>log out</button>
    </div>
  )
}

export default User