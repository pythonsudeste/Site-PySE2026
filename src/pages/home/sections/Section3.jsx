import "../styles/Section3.css"
import divisao from "/divisao.svg"

export default function Section3() {
    return (
        <div className="Section3">
            <img src={divisao} alt="divisão de sections do site" />

            <div className="Section3-titulo">
                <h3>Cronograma</h3>
                <h5>A Python Sudeste 2026 é composta por 2 tipos de atividades: tutoriais e palestras</h5>
            </div>

            <div className="Section3-todas-datas">
                <div className="Section3-data">
                    <h6>Tutoriais</h6>
                    <h6>30 de Maio</h6>
                    <p>Os tutoriais são cursos práticos que acontecem no primeiro dia do evento, com duração de 4 horas.</p>
                </div>

                <div className="Section3-data">
                    <h6>Palestras</h6>
                    <h6>31 de Maio e 01 de Junho</h6>
                    <p>As palestras são apresentações de 45 minutos sobre temas variados, desde técnicas avançadas até casos de uso.</p>
                </div>
            </div>
        </div>
    )
}