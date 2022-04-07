import React, { useState } from 'react'
import { useAuth } from '../../providers/useAuth'
import { collection, addDoc } from "firebase/firestore"; 


const AddPost:React.FC = () => {
  
  const [content, setContent] = useState('')
  const {user, db} = useAuth()
  const addPostHandler: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if(e.key==='Enter' && user){
      try {
        await addDoc(collection(db, "posts"), {
          author: user.name,
          content,
          createdAt: new Date().toString()
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }      
    }
  }
  return (
    <div className='addPost'>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='user-photo'/>
      <input 
        className='addPost-input'
        placeholder="what's new?"
        onChange={e => setContent(e.target.value)}
        onKeyPress={addPostHandler}
      />
    </div>
  )
}

export default AddPost