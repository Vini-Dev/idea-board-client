import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import { Container } from './styles';

// Actions redux
import { updateTheme } from '~/store/modules/theme/actions';

// Components
import Card from '~/components/Card';
import Button from '~/components/Button';

// Assets
import { ReactComponent as Party } from '~/assets/img/party-face-apple.svg';

// API Github
import api from '~/services/api';

const Home = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme);

  const [creator, setCreator] = useState({ name: '', github: '' });

  useEffect(() => {
    const getUser = async () => {
      const result = await api.get('Vini-dev');

      const { data, error } = result;

      if (error) return setCreator('Falha na requisição');

      return setCreator({ name: data.name, github: data.html_url });
    };
    getUser();
  }, []);

  return (
    <Container>
      <Card className="card-welcome">
        <div className="container-emoji">
          <Party className="emoji" />
        </div>
        <div className="container-text">
          <span className="text">Edit /pages/Home!</span>
        </div>
        <Button
          type="button"
          onClick={() => dispatch(updateTheme())}
          className="action"
        >
          Turn to {mode.theme === 'light' ? 'dark' : 'light'} theme
        </Button>
      </Card>

      <div className="container-creator">
        <span className="creator-name">{creator.name}</span>
        <a
          className="creator-link"
          target="_blank"
          rel="noopener noreferrer"
          href={creator.github}
        >
          {creator.github}
        </a>
      </div>
    </Container>
  );
};

export default Home;
