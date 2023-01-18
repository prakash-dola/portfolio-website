import React from 'react'
import'./home.css'
import Profile from '../Home/Profile'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Home
