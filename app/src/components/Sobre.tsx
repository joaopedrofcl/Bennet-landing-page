import React from "react";
import './Sobre.css';

const Sobre: React.FC = () => {
  return (
    <section className="sobre">
      <div className="sobre__imagem-container">
        <img 
          src="https://img-9gag-fun.9cache.com/photo/a3E6B43_460s.jpg" 
          alt="Imagem de João Pedro" 
          className="sobre__imagem"
        />
      </div>
      <div className="sobre__texto">
        <h2>João Pedro</h2>
        <p>
          Olá! Eu sou João Pedro, um desenvolvedor web apaixonado por
          tecnologia e aprendizado contínuo. Adoro criar soluções criativas
          e eficientes para desafios do mundo real.
        </p>
        <button>Saiba mais</button>
      </div>
    </section>
  );
};

export default Sobre;

