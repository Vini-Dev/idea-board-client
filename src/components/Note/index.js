import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

const Note = ({ id, top, left, title, text, className }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'Note', id, top, left },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container
      ref={dragRef}
      className={className}
      isDragging={isDragging}
      // left={left}
      // top={top}
    >
      <input type="text" defaultValue={title} />
      <input type="text" defaultValue={text} />
    </Container>
  );
};

Note.defaultProps = {
  className: '',
  title: '',
  text: '',
  id: '',
};

Note.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Note;
