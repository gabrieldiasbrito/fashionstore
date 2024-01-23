import './searchdisplay.css'
import data from '../../data/data.json'

export default function SearchDisplay(){
    return(
        <div className='test'>
            {data.map((item)=>
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
    )
}