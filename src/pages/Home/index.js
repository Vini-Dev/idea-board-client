import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';

// Style
import { Container, Header } from './styles';

import Button from '~/components/Button';

// Actions redux
import { storeAction } from '~/store/modules/notes/actions';

import Board from '~/components/Board';

// Api
import api from '~/services/api';

const Home = () => {
  const dispatch = useDispatch();

  const newNote = async () => {
    // Call store api
    const response = await api.post('/idea', {
      title: 'Title',
      text: 'Text',
    });

    const { data } = response;

    dispatch(storeAction([{ ...data.data }]));
  };

  return (
    <Container>
      <Header>
        <h1>Idea Board</h1>
        <Button
          onClick={() => newNote()}
          className="action"
          text="New idea"
          icon={<IoIosAdd />}
        />
      </Header>
      <Board />
    </Container>
  );
};

export default Home;
