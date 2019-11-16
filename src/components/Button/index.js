import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ onClick, icon, text, type, className }) => {
  return (
    <Container onClick={onClick} type={type} className={`default ${className}`}>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </Container>
  );
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  type: 'button',
  text: '',
  icon: {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.objectOf(Object),
  className: PropTypes.string,
};

export default Button;
