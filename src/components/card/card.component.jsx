import React from 'react'
import { StyledCard } from './card.styles';

export default function Card({ product }) {
  const { id, title, body, image } = product;
  return (
    <StyledCard layout={ (id % 2 === 0)? 'row-reverse' : 'row' }>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
