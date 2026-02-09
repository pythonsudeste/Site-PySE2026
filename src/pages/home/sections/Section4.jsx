import '../styles/Section4.css'
import img from "../../../../public/logo_pyse_1.png"
import { Link } from 'react-router-dom'

export default function Section4() {
    return (
        <div className="Section4">
            <div className='Section4-itens'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto'>
                    {/* <h4>Confira a Agenda Completa!</h4> */}
                    <h4>Faça parte da Python Sudeste 2026!</h4>
                    {/* <p>Veja todos os detalhes da programação da Python Sudeste 2026 e não perca nenhuma atividade.</p> */}
                    <p>Submeta agora sua palestra ou tutorial, e contribua com a nossa comunidade.</p>
                    {/* <Link to="/"><button>Acessar Agenda</button></Link> */}
                    <a href="https://2026.sudeste.python.org.br/" target='_blank'>
                        <button>Clique aqui e envie</button>
                    </a>
                </div>
            </div>
        </div>
    )
}