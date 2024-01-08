import './category.css'
import Img from '../../assets/1.avif'
import Img2 from '../../assets/2.avif'
import Img3 from '../../assets/3.avif'
import Img4 from '../../assets/4.avif'

export default function Category(){
    return(
        <div className='section'>
            <h2>Categorias</h2>
            <div>
                <a href="">
                <figure>
                    <img src={Img}/>
                    <div>
                        <h3>Verão</h3>
                        <p>25 items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img2}/>
                    <div>
                        <h3>Inverno</h3>
                        <p>25 items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img3}/>
                    <div>
                        <h3>Calçados</h3>
                        <p>25 items</p>
                    </div>
                </figure>
                </a>
                <a href="">
                <figure>
                    <img src={Img4}/>
                    <div>
                        <h3>Acessórios</h3>
                        <p>25 items</p>
                    </div>
                </figure>
                </a>
            </div>
        </div>
    )
}