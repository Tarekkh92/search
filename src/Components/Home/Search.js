import React, { useState, } from 'react'
import {  IoSearch } from 'react-icons/io5'
import './Search.css'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hidebuttons = false }) {
  const [ , dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault()
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term : input
    })

    navigate('/search')
  
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <IoSearch className='searchicon'/>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        {/* <IoMic className='micicon' />  */}
      </div>
      { !hidebuttons? (<div className='search__button'>
        <button type='submit' onClick={search} variant="outlined"></button>
        <button variant="outlined" ></button>
      </div>)
        : (
          <div className='search__button' style={{display:'none'}} >
            <button className='search__buttonHidden' type='submit' onClick={search} variant="outlined">Google Search</button>
          </div>)
            }
    </form>
  )
}

export default Search