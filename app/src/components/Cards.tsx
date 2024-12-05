import React from 'react';
import Card from './Card'; 
import './Cards.css';

const Cards: React.FC = () => {
  return (
    <section className="cards">
      <Card 
        image="https://via.placeholder.com/300x200" 
        title="Card 1"
        description="Este card é meramente ilustrativo.."
        text="Essa descrição é meramente ilustrativa."
        buttonLink="#"
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        title="Card 2"
        description="Este card é meramente ilustrativo."
        text="Essa descrição é meramente ilustrativa"
        buttonLink="#"
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        title="Card 3"
        description="Este card é meramente ilustrativo."
        text="Essa descrição é meramente ilustrativa."
        buttonLink="#"
      />
    </section>
  );
};

export default Cards;
