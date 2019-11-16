import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import Routes from './routes';

import GlobalStyle from './styles/global';
import { light, dark } from '~/styles/theme';

const history = createBrowserHistory();

const App = () => {
  const { theme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
