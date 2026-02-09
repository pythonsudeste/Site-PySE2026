import "../styles/Section9.css"
import logo_fiap from "../../../../public/home/section9/fiap.logo.webp"
import alura_logo from "../../../../public/home/section9/alura.logo.webp"
import arcaHub from "../../../../public/home/section9/arcaHub.webp"

export default function Section9() {
    return (<>
        <div className="Section9">
            <div className="Section9_titulo">
                <h4>Patrocinadores</h4>
                <h5>Conheça nossos patrocinadores e apoiadores</h5>
            </div>

            <div className="Section9_patrocinadores">
                <img src={logo_fiap} alt="" />
                <img src={alura_logo} alt="" />
                <img src={arcaHub} alt="" />
            </div>
        </div>
    </>)
}