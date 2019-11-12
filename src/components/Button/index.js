import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, onClick, type, className }) => {
  return (
    <Container onClick={onClick} type={type} className={`default ${className}`}>
      {children}
    </Container>
  );
};

Button.defaultProps = {
  children: <></>,
  onClick: () => {},
  className: '',
};

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
