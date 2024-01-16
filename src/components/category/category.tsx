import './category.css'
import Img from '../../assets/nike.jpg'
import Img2 from '../../assets/adidas.avif'
import Img3 from '../../assets/masc.jpg'
import Img4 from '../../assets/fem.jpg'

import data from '../../data/data.json'

export default function Category(){

    const filteredDataNike =  data.filter((a) => a.brand == "Nike")
    const filteredDataAdidas =  data.filter((a) => a.brand == "Adidas")
    const filteredDataMasculino =  data.filter((a) => a.gender == "Masculino")
    const filteredDataFeminino =  data.filter((a) => a.gender == "Feminino")

    return(
        <div className='section'>
            <h2>Categorias</h2>
            <div>
                <a href="">
                <figure>
                    <img src={Img}/>
                    <div>
                        <h3>Nike</h3>
                        <p>{ filteredDataNike.length} Items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img2}/>
                    <div>
                        <h3>Adidas</h3>
                        <p>{filteredDataAdidas.length} items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img3}/>
                    <div>
                        <h3>Masculino</h3>
                        <p>{filteredDataMasculino.length} items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img4}/>
                    <div>
                        <h3>Feminino</h3>
                        <p>{filteredDataFeminino.length} items</p>
                    </div>
                </figure>
                </a>
            </div>
        </div>
    )
}