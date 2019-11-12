import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const defaultLayout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

defaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default defaultLayout;
