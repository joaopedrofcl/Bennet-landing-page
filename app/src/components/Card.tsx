import React from 'react';


interface CardProps {
  image: string;
  title: string;
  description: string;
  text: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, text, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__text">{text}</p>
        <a href={buttonLink} className="card__button">Saiba mais</a>
      </div>
    </div>
  );
};

export default Card;
