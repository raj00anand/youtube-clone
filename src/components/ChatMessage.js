import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img className='w-8' src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' alt="logo"/>
      <div className=''>
        <span className='m-1 font-semibold'>{name}</span>
        <span className='m-1'>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage
