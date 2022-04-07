import React from 'react'
import { useAuth } from '../providers/useAuth'

const Profile:React.FC = () => {
  const {user} = useAuth()
  return (
    <div className='profile'>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='profile-photo'/>
      <h1 className='profile-name'>{user?.name}</h1>
    </div>
  )
}

export default Profile