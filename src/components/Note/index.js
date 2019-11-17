import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

import { updateAction } from '~/store/modules/notes/actions';

const Note = ({ id, top, left, zindex, title, text, className }) => {
  const dispatch = useDispatch();

  const [noteValues, setNoteValues] = useState({ title, text });
  const [noteParams, setNoteParams] = useState({ top, left, zindex });

  // Quando o usuário arrasta o card essa função é ativada
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'Note', id, top, left },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    dispatch(
      updateAction({
        id,
        left: noteParams.left,
        top: noteParams.top,
      })
    );
  }, [noteParams]);

  // Ao editar uma nota, a função espera 3s para atirar o update
  useEffect(() => {
    const update = () => {
      console.log('Update');
      // dispatch(
      //   updateAction({
      //     id,
      //     title: noteValues.title,
      //     text: noteValues.text,
      //   })
      // );
    };

    const timer = setTimeout(() => {
      update();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [noteValues]);

  // Altera o estado do card
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
      <input type="text" name="title" defaultValue={noteValues.title} onKeyUp={handle} />
      <TextareaAutosize name="text" defaultValue={noteValues.text} onKeyUp={handle} />
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
