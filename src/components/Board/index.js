import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';

// Style
import { Container } from './styles';

// Components
import Note from '~/components/Note';

const Board = () => {
  const ref = useRef();

  const [notes, setNotes] = useState([
    {
      _id: '1',
      zindex: 1,
      top: 15,
      left: 15,
      title: 'Title 1',
      text: 'Text 1',
    },
    {
      _id: '2',
      zindex: 2,
      top: 40,
      left: 10,
      title: 'Title 2',
      text: 'Text 2',
    },
    {
      _id: '3',
      zindex: 3,
      top: 80,
      left: 15,
      title: 'Title 3',
      text: 'Text 3',
    },
  ]);

  const droped = ({ id, target }) => {
    const { x, y } = target;
    const { clientWidth, clientHeight } = ref.current;

    const percentX = Number(((x / clientWidth) * 100).toFixed(2));
    const percentY = Number(((y / clientHeight) * 100).toFixed(2));

    setNotes(
      notes.map(note => ({
        ...note,
        ...(note._id === id
          ? {
              zindex: notes.length,
              left: percentX,
              top: percentY,
            }
          : {
              zindex: note.zindex > 2 ? note.zindex - 1 : note.zindex,
            }),
      }))
    );
  };

  const [, dropRef] = useDrop({
    accept: 'Note',
    drop(item, monitor) {
      droped({
        id: item.id,
        test: monitor.getItem(),
        target: monitor.getSourceClientOffset(),
      });
    },
  });

  dropRef(ref);

  return (
    <Container ref={ref}>
      {notes.map(n => (
        <Note
          key={n._id}
          id={n._id}
          zindex={n.zindex}
          top={n.top}
          left={n.left}
          title={n.title}
          text={n.text}
        />
      ))}
    </Container>
  );
};

export default Board;
