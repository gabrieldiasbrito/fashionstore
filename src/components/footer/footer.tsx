import './footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <span>
                <ul>
                    <li><b>Categorias</b></li>
                    <li><a href="">Casual</a></li>
                    <li><a href="">Esporte</a></li>
                    <li><a href="">Sandália</a></li>
                </ul>
                <ul>
                    <li><b>Idades</b></li>
                    <li><a href="">Adulto</a></li>
                    <li><a href="">Infantil</a></li>
                </ul>
                <span>
                    <h3>Fale conosco:</h3>
                    <input type="text" placeholder='email@gmail.com'/>
                </span>
            </span>
            <div>
                <h3>©2024 Gabriel Brito</h3>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}