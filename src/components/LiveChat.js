import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, generateRandomMessage } from '../utils/healper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.messages);

    useState(() => {
        const id = setInterval(()=>{
            dispatch(addMessage({name: generateRandomName(), message: generateRandomMessage(20) + "🚀"}))
        }, 1500);

        return () => clearInterval(id);
    }, [])

  return (
    <>
    <div className='bg-slate-100 rounded-lg h-[500px] ml-2 p-2 border border-black overflow-y-scroll flex flex-col-reverse'>
    <div>
      {chatMessage.map((c,index) =><ChatMessage key={index} name={c.name} message={c.message}/>)}
      </div>
      
    </div>
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addMessage({
            name:"Anand",
            message: liveMessage
        }))
        setLiveMessage('');
        }} className=' p-1 ml-2 border border-black rounded-lg'>
        <input onChange={(e) => setLiveMessage(e.target.value)} className='w-96 bg-gray-100 p-1 rounded-lg' value={liveMessage} type='text'></input>
        <button className='px-2 py-1 mx-1 bg-green-200 rounded-lg font-semibold'>send</button>

      </form>
      </>
  )
}

export default LiveChat
