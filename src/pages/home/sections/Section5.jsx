import '../styles/Section5.css'
import KeyNoteCard from '../../../components/KeyNoteCard'
import { keyNotesList } from './KeyNotesList'

export default function Section5() {
    return (
        <div className="Section5">
            <div className="Section5-aba">
                <h3>KeyNotes</h3>
            </div>

            <div className='Section5-keynotescards'>
                {keyNotesList.map((palestrante, index) => (
                        <KeyNoteCard
                            img={palestrante.img}
                            nome={palestrante.nome}
                            descricao={palestrante.descricao}
                            githubArroba={palestrante.githubArroba}
                            githubLink={palestrante.githubLink}
                            instagramArroba={palestrante.instagramArroba}
                            instagramLink={palestrante.instagramLink}
                            linkdinArroba={palestrante.linkedinArroba}
                            linkdinLink={palestrante.linkedinLink}
                        />
                    ))
                }
            </div>
        </div>
    )
}