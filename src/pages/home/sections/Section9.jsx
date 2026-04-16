import "../styles/Section9.css"
import logo_fiap from "/home/section9/fiap.logo.webp"
import alura_logo from "/home/section9/alura.logo.webp"
import arcaHub from "/home/section9/arcaHub.webp"
import sambaHoteis from "/home/section9/sambaHoteis.png"

export default function Section9() {
    return (<>
        <div className="Section9">
            <div className="Section9_titulo">
                <h4>Patrocinadores</h4>
                <h5>Conheça nossos patrocinadores e apoiadores</h5>
            </div>

            <div className="Section9_patrocinadores">
                <Patrocinadores logo={logo_fiap} link="https://www.fiap.com.br/" />
                <Patrocinadores logo={alura_logo} link="https://www.alura.com.br/" />
                <Patrocinadores logo={arcaHub} link="https://arcahub.com.br/" />
                <Patrocinadores logo={sambaHoteis} link="https://sambahoteis.com/" />
            </div>
        </div>
    </>)
}

function Patrocinadores({logo , link = "#"}) {
    return(
        <a href={link} target="_blank">
            <img src={logo} alt="Patrocinador" />
        </a>
    )
}