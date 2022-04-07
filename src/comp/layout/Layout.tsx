import React from 'react'
import { useAuth } from '../providers/useAuth'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout:React.FC = ({children}) => {
  const {user} = useAuth()
  return (
    <>
      <Header/>
      <div className='layout'>
        <main className='main'>
          {user &&
            <Sidebar/>
          }
          {children}
        </main>
      </div>
      
    </>
  )
}

export default Layout