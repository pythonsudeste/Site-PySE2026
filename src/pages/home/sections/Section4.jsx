import '../styles/Section4.css'
import img from "/logo_pyse_1.PNG?url"
import { Link } from 'react-router-dom'
import { linksTicketSaleSite } from '../../../Links'

export default function Section4() {
    return (
        <div className="Section4">
            <div className='Section4-itens'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto'>
                    {/* <h4>Confira a Agenda Completa!</h4> */}
                    <h4>Faça parte da Python Sudeste 2026!</h4>
                    {/* <p>Veja todos os detalhes da programação da Python Sudeste 2026 e não perca nenhuma atividade.</p> */}
                    <p>Compre agora seu ingresso e garanta a sua participação no nosso evento.</p>
                    {/* <Link to="/"><button>Acessar Agenda</button></Link> */}
                    <a href={linksTicketSaleSite} target="_blank">
                        <button>Comprar Ingresso</button>
                    </a>
                </div>
            </div>
        </div>
    )
}