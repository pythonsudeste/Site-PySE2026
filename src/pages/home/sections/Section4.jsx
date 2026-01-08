import '../styles/Section4.css'
import img from "/logo_pyse_1.PNG"
import { Link } from 'react-router-dom'

export default function Section4() {
    return (
        <div className="Section4">
            <div className='Section4-itens'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto'>
                    <h4>Confira a Agenda Completa!</h4>
                    <p>Veja todos os detalhes da programação da Python Sudeste 2026 e não perca nenhuma atividade.</p>
                    <Link to="/"><button>Acessar Agenda</button></Link>
                </div>
            </div>
        </div>
    )
}