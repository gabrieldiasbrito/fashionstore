import { useState } from 'react';
import './navbar.css'
import { IoCart, IoSearch  , IoMenu , IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='navbar'>
            <Link to="/"><h2>Logo</h2></Link>
            <ul className={`${isOpen && "open"}`}>
                <IoClose className="menu close" onClick={() => setIsOpen(!isOpen)}/>
                <li><Link to="/">Home</Link></li>
                <li><Link to="">Masculino</Link></li>
                <li><Link to="">Feminino</Link></li>
                <li><Link to="">Infantil</Link></li>
            </ul>
            <div>
                <Link to=""> <IoCart /> </Link>
                <Link to="/search"> <IoSearch/> </Link>
            </div>
            <IoMenu className="menu" onClick={() => setIsOpen(!isOpen)}/>
        </div>
    )
}