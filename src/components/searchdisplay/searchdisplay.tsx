import './searchdisplay.css'
import Data from '../../data/data.json'
import { useState } from 'react';

export default function SearchDisplay(){

    const [filteredData, setFilteredData] = useState(Data);

    const filterData = (event: any) =>{
        const value = event.target.value;
        const filtered = Data.filter(item => item.name.includes(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()))
        setFilteredData(filtered)
    }

    return(
        <>
        <div className='search-input-div' onChange={filterData}>
            <input type="text" className='search-input'/>
        </div>
            <div className='card-display'>
                {filteredData.map((item)=>
                <div className='card'>
                    <div className="card-container">
                        <img src={item.images[0]} />
                        <h3>R$ {item.price}</h3>
                    </div>
                    <div className="card-description">
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}