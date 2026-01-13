import './styles/Carregamento.css'
import logo from "../../public/logo_pyse_1.png"

export default function Carregamento() {
    return (<>
        <div className='Carregamento'>
            <img src={logo} alt="" />
            <h4>Carregando...</h4>
        </div>
    </>)
}