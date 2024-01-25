import './filter.css'
import data from '../../data/data.json'
import { useState } from 'react';
import { IoFilter } from "react-icons/io5";

export default function Filter(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='filter'>
            <button className='filter-button' onClick={() => setIsOpen(!isOpen)}>Filtros <IoFilter/></button>
            <div className={`filter-div ${isOpen && "open"}`}>
            <br />
                <ul className='gender'>
                    Gênero
                <li><button>Masculino</button></li>
                    <li><button>Feminino</button></li>
                </ul>
                <ul>
                    Cor
                    <li><button>Preto</button></li>
                    <li><button>Branco</button></li>
                </ul>
                <ul>
                    Marca
                    <li><button>Adidas</button></li>
                    <li><button>Nike</button></li>
                </ul>
                <ul>
                    Idade
                    <li><button>Adulto</button></li>
                    <li><button>Infantil</button></li>
                </ul>
                <ul>
                    Tipo
                    <li><button>Casual</button></li>
                    <li><button>Esporte</button></li>
                    <li><button>Chinelo e Sandália</button></li>
                </ul>
            </div>
        </div>
    )
}