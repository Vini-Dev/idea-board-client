import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

const Note = ({ id, top, left, zindex, title, text, className }) => {
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
      zindex={zindex}
      top={top}
      left={left}
    >
      <input type="text" defaultValue={title} />
      <TextareaAutosize defaultValue={text} />
    </Container>
  );
};

Note.defaultProps = {
  className: '',
  id: '',
  title: '',
  text: '',
  zindex: 100,
  top: 0,
  left: 0,
};

Note.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  zindex: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default Note;
