import React, { useState, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

// import { useSelector, useDispatch } from 'react-redux';

// Style
import { Container } from './styles';

// Actions redux
// import { updateTheme } from '~/store/modules/theme/actions';

// Components
import Note from '~/components/Note';
// import Button from '~/components/Button';

// API
import api from '~/services/api';

const Home = () => {
  const ref = useRef();
  // const dispatch = useDispatch();
  // const mode = useSelector(state => state.theme);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/idea');

      const { data } = response;

      setNotes(data.data);
    };
    getUser();
  }, []);

  const [, dropRef] = useDrop({
    accept: 'Note',
    hover(item, monitor) {
      const position = ref.current.getBoundingClientRect();
      item.left = position.left;
      item.top = position.top;
    },
  });

  dropRef(ref);

  return (
    <Container ref={ref}>
      {notes.map(n => (
        <Note key={n._id} id={n._id} title={n.title} text={n.text} />
      ))}
    </Container>
  );
};

export default Home;
