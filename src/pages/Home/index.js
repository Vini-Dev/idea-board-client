import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import { Container } from './styles';

// Actions redux
import { updateTheme } from '~/store/modules/theme/actions';

// Components
import Note from '~/components/Note';
import Button from '~/components/Button';

// API
import api from '~/services/api';

const Home = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/idea');

      const { data, error } = response;

      setNotes(data.data);
    };
    getUser();
  }, []);

  return (
    <Container>
      <div className="ideas">
        {notes.map(n => (
          <Note key={n.id} title={n.title} text={n.text} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
