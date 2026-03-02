import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/ButaoFlutuante.css'

export default function ButaoFlutuante() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (<>
        <div className={`ButaoFlutuante ${isModalOpen ? "invisivel" : ""}`} onClick={openModal}>
            Menu
        </div>

        <div className={`Modal ${!isModalOpen ? "invisivel" : ""}`}>
            <a href="https://2026.sudeste.python.org.br/">Inicio</a>
            <a href="https://2026.sudeste.python.org.br/ingressos">Ingressos aqui!</a>
            <a href="https://2026.sudeste.python.org.br/submissao">Submeta sua Talk</a>
            <a href="https://2026.sudeste.python.org.br/sobre">Sobre o Evento</a>
            <a href="https://2026.sudeste.python.org.br/local">Local</a>
            <button onClick={closeModal}>Fechar</button>
        </div>
    </>)
}