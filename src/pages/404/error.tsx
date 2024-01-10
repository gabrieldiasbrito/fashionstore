import './error.css'

export default function Error(){
    return(
        <div className='error'>
            <div>
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <p>Página não encontrada - O servidor não conseguiu encontrar a rota solicitada.</p>
                <br />
                <button>Voltar para a página principal</button>
            </div>
        </div>
    )
}