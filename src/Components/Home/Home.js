import React from 'react'
import Search from './Search'
import './Home.css'
import NavBar from '../NevBar/NavBar';
// import { Link } from 'react-router-dom'
 
function Home() {
    return (
        <div className='home'>
            <NavBar />
            {/* <div className='home__header'>
                <div className='home__headerLeft'>
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                </div>
                <div className='home__headerRight'>
                    <a href='/images'>Images</a>
                    <a href='/gmail'>Gmail</a>
                    <IoApps />
                    <RxAvatar />
                
                </div>
            </div> */}
            <div className='home__body'>
                <img alt="Google" src="https://i.postimg.cc/15DK1QHk/Fardos-logo-text-only.png"></img>
                    <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home