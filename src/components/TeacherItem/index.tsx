import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/66556783?s=460&u=ea6c05cb9722a75c8d9959dea61a3069487b1424&v=4" alt="João Victor" />
                <div>
                    <strong>João Victor</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das mlhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atravez de experiências. Mais de 200 mil pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;