import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Dot } from 'pure-react-carousel';

const ButtonsCarousel = ({ slides, size }) => {
  return (
    <Container textAlign='center'>
      <Button.Group size={size}>
        {[ ...Array(slides).keys()].map((slide) => (

          <Button as={Dot} key={slide} icon='circle' slide={slide} />

        ))}
      </Button.Group>
    </Container>
  )
}

ButtonsCarousel.defaultProps = {
  size: "mini"
};

export default ButtonsCarousel;