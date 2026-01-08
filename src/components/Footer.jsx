import './styles/Footer.css'
import email_logo from '/contatos/email-logo.png'
import instagram_logo from '/contatos/instagram-logo.png'
import linkedin_logo from '/contatos/linkdin-logo.png'
import facebook_logo from '/contatos/facebook-logo.png'

export default function Footer() {
    return ( <>
        <div className="Footer">
            <div className="Footer_section1">
                <div className="Footer_section1_redes">
                    <a href="https://www.instagram.com/pythonsudeste/" className='Footer_section1_redes_item' target='_blank'>
                        <img src={instagram_logo} alt="Logo Instagram" />
                        @pythonsudeste
                    </a>
                    <a href="https://www.linkedin.com/company/python-sudeste/" className='Footer_section1_redes_item' target='_blank'>
                        <img src={linkedin_logo} alt="Logo Linkedin" />
                        /python-sudeste
                    </a>
                    <a href="https://www.facebook.com/pythonsudeste/" className='Footer_section1_redes_item' target='_blank'>
                        <img src={facebook_logo} alt="Logo Facebook" />
                        /pythonsudeste
                    </a>
                    <a href="mailto:sudeste@python.org.br" className='Footer_section1_redes_item' target='_blank'>
                        <img src={email_logo} alt="Logo Email" />
                        sudeste@python.org.br
                    </a>
                </div>
                <div className="Footer_section1_rotas">
                    <a href="">Ingressos</a>
                    <a href="">Sobre</a>
                    <a href="">Local</a>
                    <a href="">Cronogram</a>
                    <a href="">Programação</a>
                    <a href="">Plano de Patrocínio</a>
                    <a href="">Código de conduta</a>
                </div>
            </div>

            <div className="Footer_section2">
                <p>A Python Sudeste é uma conferência sem fins lucrativos realizada por voluntários visando promover a linguagem de programação de código aberto Python.</p>
            </div>
        </div>
    </> )
}