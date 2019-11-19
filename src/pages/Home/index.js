import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Style
import { Container, Header } from './styles';

import Button from '~/components/Button';

// Actions redux
import { Creators as NoteActions } from '~/store/ducks/notes';

import Board from '~/components/Board';

// Api
import api from '~/services/api';

const Home = () => {
  const dispatch = useDispatch();

  // Cria uma nova nota
  const newNote = async () => {
    // Call store api
    const response = await api.post('/idea', {
      title: 'Title',
      text: 'Text',
    });

    const { data } = response;

    // Adiciona nota do redux
    dispatch(NoteActions.add([{ ...data.data }]));
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        className="toast-container"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
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
