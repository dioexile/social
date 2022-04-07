import React from 'react'
import AddPost from './AddPost'
import Posts from './Posts'

const Home:React.FC = () => {

  return (
    <main>
      <div className='home'>
        <AddPost/>
        <Posts/>
      </div>
    </main>
  )
}

export default Home