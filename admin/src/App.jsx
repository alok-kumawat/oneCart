import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Lists from './pages/Lists'
import Login from './pages/Login'
import Add from './pages/Add'
import { useContext } from 'react'
import { adminDataContext } from './context/AdminContext'
import {ToastContainer, toast} from 'react-toastify'

const App = () => {

  let {adminData} = useContext(adminDataContext)
  
  return (
    <>
    <ToastContainer />
    {!adminData ? <Login /> : 
      <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/lists' element={<Lists />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </>
      }
    </>
  )
}

export default App