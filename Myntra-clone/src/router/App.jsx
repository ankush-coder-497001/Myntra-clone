import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import FetchItem from '../components/fetchItem'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'


function App() {
  return (
    <>
    <Header></Header>
<Outlet></Outlet>
   <Footer></Footer>
   <FetchItem></FetchItem>
    </>
  )
}

export default App
