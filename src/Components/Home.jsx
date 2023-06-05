import React from 'react'
import Login from './Login'
import User from './User'

import {Routes, Route} from'react-router-dom'


const Home = () => {
  return (
    <>
      <Login/>
    <Routes>
        <Route exact path='/sign' element={<User/>} />
    </Routes>
    </>
    
  )
}

export default Home;
