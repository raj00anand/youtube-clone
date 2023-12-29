import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 m-2 bg-gray-300 rounded-lg font-medium'>{name}</button>
    </div>
  )
}

export default Button
