import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

export default function App() {

  return (
    <>
      <Navbar/>
      <div className='spacing'>
        <Outlet/>
      </div>
      <br />
      <Footer/>
    </>
  )
}