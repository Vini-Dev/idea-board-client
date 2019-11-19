import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { toast } from 'react-toastify';

// Style
import { Container } from './styles';

// Components
import Note from '~/components/Note';

// Actions redux
import { Creators as NoteActions } from '~/store/ducks/notes';

// Api
import api from '~/services/api';

const Board = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);

  const notes = useSelector(state => state.notes);

  // Busca todas as notas salvas no banco
  useEffect(() => {
    // Call api
    const getNotes = async () => {
      const response = await api.get('/idea');

      if (!response) return;

      const { data } = response;

      if (data.data.length !== 0) {
        dispatch(NoteActions.add([...data.data]));
      } else {
        toast.info(`Não há nenhuma nota salva...`);
      }
    };
    getNotes();
  }, []);

  // Caso o estado no redux seja alterado essa função é ativada,
  // se o estado for alterado novamente dentro de 2s, ela é cancelada
  // e a contagem é zerada
  useEffect(() => {
    const update = async () => {
      if (notes.length !== 0) setUpdated(true);

      if (updated) {
        toast.info(`Salvando edições...`);
        // Call api (update)
        const response = await api.put('/idea', [...notes]).catch(e => {
          console.log(e.response, e.response.data.error);
          return false;
        });

        if (!response) return;

        // const { data } = response;

        toast.success(`Edições salvas...`);
      }
    };

    const timer = setTimeout(() => {
      update();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [notes]);

  const droped = async ({ _id, target }) => {
    const { x, y } = target;
    const { clientWidth, clientHeight } = ref.current;

    const percentX = Number(((x / clientWidth) * 100).toFixed(2));
    const percentY = Number(((y / clientHeight) * 100).toFixed(2));

    dispatch(NoteActions.updatePosition(_id, percentX, percentY));

    setUpdated(false);
  };

  const [, dropRef] = useDrop({
    accept: 'Note',
    drop(item, monitor) {
      droped({
        _id: item._id,
        target: monitor.getSourceClientOffset(),
      });
    },
  });

  dropRef(ref);
  return (
    <Container ref={ref}>
      {notes.length !== 0
        ? notes.map(n => (
            <Note
              key={n._id}
              _id={n._id}
              zindex={n.zindex}
              top={n.top}
              left={n.left}
              title={n.title}
              text={n.text}
            />
          ))
        : ''}
    </Container>
  );
};

export default Board;
