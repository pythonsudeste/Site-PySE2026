import "../styles/Section9.css"
import logo_fiap from "/home/section9/fiap.logo.webp"

export default function Section9() {
    return (<>
        <div className="Section9">
            <div className="Section9_titulo">
                <h4>Patrocinadores</h4>
                <h5>Conheça nossos patrocinadores e apoiadores</h5>
            </div>

            <div className="Section9_patrocinadores">
                <Patrocinadores logo={logo_fiap} link="https://www.fiap.com.br/" />
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