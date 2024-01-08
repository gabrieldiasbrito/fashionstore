import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'

export default function App() {

  return (
    <>
      <Navbar/>
      <div className='body'>
        <Outlet/>
      </div>
    </>
  )
}