import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

// Actions redux
import { Creators as NoteActions } from '~/store/ducks/notes';

const Note = ({ _id, top, left, zindex, title, text, className }) => {
  const dispatch = useDispatch();
  const [noteValues, setNoteValues] = useState({ title, text });

  // Quando o usuário arrasta o card essa função é ativada
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'Note', _id, top, left },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Ao editar uma nota, a função espera 2s para atualizar o estado no redux
  useEffect(() => {
    const update = () => {
      if (noteValues.title !== title || noteValues.text !== text) {
        dispatch(
          NoteActions.updateValue(_id, noteValues.title, noteValues.text)
        );
      }
    };

    const timer = setTimeout(() => {
      update();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [noteValues]);

  // Altera o estado do card titulo e texto
  const handle = event => {
    event.persist();

    const { name, value } = event.target;
    setNoteValues({
      ...noteValues,
      [name]: value,
    });
  };

  return (
    <Container
      ref={dragRef}
      className={className}
      isDragging={isDragging}
      zindex={zindex}
      top={top}
      left={left}
    >
      <input type="text" name="title" defaultValue={title} onKeyUp={handle} />
      <TextareaAutosize name="text" defaultValue={text} onKeyUp={handle} />
    </Container>
  );
};

Note.defaultProps = {
  className: '',
  _id: '',
  title: '',
  text: '',
  zindex: 100,
  top: 0,
  left: 0,
};

Note.propTypes = {
  className: PropTypes.string,
  _id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  zindex: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default Note;
