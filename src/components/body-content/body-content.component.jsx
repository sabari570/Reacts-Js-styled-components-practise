import React from 'react'
import content from '../../content';
import { Container } from '../../styled-components/container/container.styled';
import Card from '../card/card.component';

export default function BodyContent() {
  return (
    <div>
      <Container>
        {
            content.map((product) => {
                return < Card  key={product.id} product={product} />
            })
        }
      </Container>
    </div>
  )
}
