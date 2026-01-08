import React, { useState } from 'react';
import './styles/ButaoFlutuante.css'

export default function ButaoFlutuante() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isSelecionarLinguaOpen, setIsSelecionarLinguaOpen] = useState(false);
    const openSelecionarLingua = () => setIsSelecionarLinguaOpen(true);
    const closeSelecionarLingua = () => setIsSelecionarLinguaOpen(false);

    return (<>
        <div className={`ButaoFlutuante ${isModalOpen ? "invisivel" : ""}`} onClick={openModal}>
            <h4>Menu</h4>
        </div>

        <div className={`Modal ${!isModalOpen ? "invisivel" : ""}`}>
            <div className={`Modal_opçoes ${isSelecionarLinguaOpen ? "invisivel" : ""}`}>
                <h6 className={`Modal_opçoes_linguagem`}
                    onClick={openSelecionarLingua}>
                    Selecionar Lingua
                </h6>
                <a href=""><h6>Ingressos</h6></a>
                <a href=""><h6>Local</h6></a>
                <a href=""><h6>Palestrantes</h6></a>
                <a href=""><h6>Sobre</h6></a>
            </div>

            <div className={`Modal_opçoes_linguagem ${!isSelecionarLinguaOpen ? "invisivel" : ""}`}>
                <h6>Portugues</h6>
                <h6>Ingles</h6>
                <h6>Espanhol</h6>

                <h5 onClick={closeSelecionarLingua}>
                    sair
                </h5>
            </div>
            <button onClick={closeModal}>Fechar</button>
        </div>
    </>)
}