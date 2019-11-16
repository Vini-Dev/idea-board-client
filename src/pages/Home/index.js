import React from 'react';
import { IoIosAdd } from 'react-icons/io';
// import { useSelector, useDispatch } from 'react-redux';

// Style
import { Container, Header } from './styles';

import Button from '../../components/Button';
// Actions redux
// import { updateTheme } from '~/store/modules/theme/actions';

import Board from '../../components/Board';

const Home = () => {
  // const dispatch = useDispatch();
  // const mode = useSelector(state => state.theme);

  return (
    <Container>
      <Header>
        <h1>Idea Board</h1>
        <Button className="action" text="Nova" icon={<IoIosAdd />} />
      </Header>
      <Board />
    </Container>
  );
};

export default Home;
