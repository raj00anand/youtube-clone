import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='h-8 mx-3 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256" alt="humburger-logo"/>
            <a href='/'>
            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube-logo"/>
            </a>
        </div>
        <div className='col-span-10 text-center'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search'/>
            <button className='border border-gray-400 py-2 px-4 bg-gray-200 rounded-r-full'>&#x1F50D;&#xFE0E;</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' alt='user-logo'/>
        </div>
    </div>
  )
}

export default Head
