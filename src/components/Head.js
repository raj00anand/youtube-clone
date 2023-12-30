import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { chacheResult } from '../utils/searchSlice';

const Head = () => {
    const [SearchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        //make Api call after each key press
        //but if the difference between two API calls is <200ms
        //decline the api call
        const timer = setTimeout(() => {
            if(searchCache[SearchQuery]){
                setSuggestion(searchCache[SearchQuery]);
            }else{
                getSearchSuggestions();
                //Update cache
                
            }
            
        }
        ,200)
        
        return () => clearTimeout(timer);

    },[SearchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+SearchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestion(json[1]);
        dispatch(chacheResult({[SearchQuery]: json[1]}))
    }
    // console.log(SearchQuery);
    
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
        <div className='col-span-10 '>
        <div>
            <input onChange={(e)=> setSearchQuery(e.target.value)} onFocus={() => setShowSuggestion(true)} 
            onBlur={() => setShowSuggestion(false)} className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='&#x1F50D;&#xFE0E;Search'/>
            <button className='border border-gray-400 py-2 px-4 bg-gray-200 rounded-r-full'>&#x1F50D;&#xFE0E;</button>
            {showSuggestion && <ul className='w-1/3 fixed  rounded-lg p-2 text-left shadow-lg text-black bg-white font-medium border border-gray-100'>
                    {suggestions.map((name) => <li key={name} className='py-1 shadow-sm hover:bg-gray-200'>&#x1F50D;&#xFE0E;{name}</li>)}
                    
                </ul>}
            </div>
            
        </div>
        <div className='col-span-1'>
            <img className='h-8' src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' alt='user-logo'/>
        </div>
    </div>
  )
}

export default Head
