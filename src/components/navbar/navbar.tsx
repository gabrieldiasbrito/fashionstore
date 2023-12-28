import { useState } from 'react';
import './navbar.css'
import { IoCart, IoPersonCircle , IoMenu , IoClose } from "react-icons/io5";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='navbar'>
            <h2>Logo</h2>
            <ul className={`${isOpen && "open"}`}>
                <IoClose className="menu close" onClick={() => setIsOpen(!isOpen)}/>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
            <div>
                <IoCart />
                <IoPersonCircle />
            </div>
            <IoMenu className="menu" onClick={() => setIsOpen(!isOpen)}/>
        </div>
    )
}