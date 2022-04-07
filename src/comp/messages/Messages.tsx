import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { IMessage } from '../../types'
import { useAuth } from '../providers/useAuth'

const Messages = () => {
  const {user, db} = useAuth()
  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState('')



  const addMsgHandler: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if(e.key==='Enter' && user){
      try {
        await addDoc(collection(db, "messages"), {
          user, message
        });
      } catch (e) {
          console.error("Error adding document: ", e);
        }
      setMessage('')     
    }
  }


  useEffect(()=> {
      const unsub = onSnapshot(collection(db, 'messages'), doc => {
        const array: IMessage[] = []
        doc.forEach((d:any) => {
          array.push(d.data())  
        })
        setMessages(array)
      })
      return () => (
        unsub()
      )
  }, [])

  return (
    <div className='dialog'>
      <div className="dialog-body">
        {messages.map((msg, idx) => (
          <div className="message" key={idx}>
            <div className="message-sender">
              <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='user-photo'/>
              <h4 className='user-name'>{msg.user.name}</h4>
            </div>
            <p className='message-content'>{msg.message}</p>
          </div> 
        ))}
      </div>
      <div className='dialog-input'>
        <input 
          type="text" 
          className='dialog-input_area' 
          placeholder="what's new?"
          onChange={e => setMessage(e.target.value)}
          onKeyPress={addMsgHandler}
        />
      </div>
    </div>
  );
}

export default Messages;




















 