import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Note = ({ title, text, className }) => {
  return (
    <Container className={className}>
      <input type="text" value={title} />
      <textarea name="">{text}</textarea>
    </Container>
  );
};

Note.defaultProps = {
  className: '',
  title: '',
  text: '',
};

Note.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Note;
