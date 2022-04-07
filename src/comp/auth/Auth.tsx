import { Button, ButtonGroup, TextField } from '@mui/material'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IUserData } from './types'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useAuth } from '../providers/useAuth'
import { useHistory } from 'react-router-dom'

const Auth:React.FC = () => {
  const {ga, user} = useAuth()
  const [isRegForm, setIsRegForm] = useState(false)
  const [userData, setUserData] = useState<IUserData>({email:'', password:''} as IUserData)

  const handleLogin = async (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(isRegForm){
      try {
        const res = await createUserWithEmailAndPassword(ga, userData.email, userData.password)
        await updateProfile(res.user, {
          displayName: userData.name
        })
      } catch (error:any) {
        error.message && console.log(error.message)
      }
    } else {
        try {
          await signInWithEmailAndPassword(ga, userData.email, userData.password)
        } catch (error:any) {
          error.message && console.log(error.message)
        }
    }

    console.log(userData.email, userData.password)
    setUserData({email:'', password:'', name:''})
  }
  const history = useHistory()
  
    useEffect(() => {
      if(user) {
        history.push('/')
      } else {
        history.push('/auth')
      }
    }, [user])

  return (
    <form onSubmit={handleLogin} className='auth-form'>
      <TextField
        required 
        label='name' 
        variant='outlined' 
        value={userData.name}
        onChange={(e)=>setUserData({...userData, name: e.target.value})}
        sx={{

        }}
      />
      <TextField
        required 
        type='email' 
        label='email' 
        variant='outlined' 
        value={userData.email}
        onChange={(e)=>setUserData({...userData, email: e.target.value})}
      />
      <TextField
        required 
        type='password' 
        label='password' 
        variant='outlined' 
        value={userData.password}
        onChange={(e)=>setUserData({...userData, password: e.target.value})}
      />
      <ButtonGroup variant='outlined' className='authBtns'>
        <Button type='submit' onClick={(e)=> setIsRegForm(false)}>Auth</Button>
        <Button type='submit' onClick={(e)=> setIsRegForm(true)}>Register</Button>
      </ButtonGroup>
    </form>
  )
}

export default Auth