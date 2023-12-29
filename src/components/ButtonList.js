import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Cricket"/>
      <Button name="Comedy"/>
      <Button name="Football"/>
      <Button name="Coding"/>
      
    </div>
  )
}

export default ButtonList
