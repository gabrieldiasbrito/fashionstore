import './App.css'
import Navbar from './components/navbar/navbar'
import Category from './components/section/category'

export default function App() {

  return (
    <>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <div className='body'>
        <Category/>
      </div>
    </>
  )
}