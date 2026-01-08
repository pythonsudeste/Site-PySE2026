import '../styles/Section6.css'
import KeyNoteCard from '../../../components/KeyNoteCard'
import { PalestranteList } from './PalestrantList'

export default function Section6() {
    return (
        <div className="Section6">
            <div className="Section6-aba">
                <h3>Palestrante</h3>
            </div>

            <div className='Section6-PalestranteCard'>
                {PalestranteList.map((palestrante, index) => (
                    // <div className='Section6-palestrantescards'>
                        <div key={palestrante.code} className="palestrante-item">
                            <h2>{palestrante.talkTitle}</h2>
                            <img src={palestrante.avatar} alt={`Avatar de ${palestrante.name}`} />
                            <h4>{palestrante.name}</h4>
                            <p>{palestrante.biography}</p>
                        </div>
                    // </div>
                    ))
                }
            </div>
        </div>
    )
}