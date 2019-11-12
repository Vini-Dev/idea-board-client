import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Card = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

Card.defaultProps = {
  children: <></>,
  className: '',
};

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

export default Card;
