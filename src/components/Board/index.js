import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

// Style
import { Container } from './styles';

// Components
import Note from '~/components/Note';

// Actions redux
import { storeAction, updateAction } from '~/store/modules/notes/actions';

// Api
import api from '~/services/api';

const Board = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const notes = useSelector(state => state.notes);

  useEffect(() => {
    // Call api (store)
    const getNotes = async () => {
      const response = await api.get('/idea');

      if (!response) return;

      const { data } = response;

      dispatch(storeAction(data.data));
    };
    getNotes();
  }, []);

  const droped = async ({ id, target }) => {
    const { x, y } = target;
    const { clientWidth, clientHeight } = ref.current;

    const percentX = Number(((x / clientWidth) * 100).toFixed(2));
    const percentY = Number(((y / clientHeight) * 100).toFixed(2));

    dispatch(
      updateAction({
        id,
        left: percentX,
        top: percentY,
      })
    );

    // Call api (update)
    // const response = await api.put('/idea', [...notes]).catch(e => {
    //   console.log(e.response, e.response.data.error);
    //   return false;
    // });

    // if (!response) return;

    // const { data } = response;

    // console.log(data);
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
