import styled, { css } from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  border-radius: 8px;

  padding: 15px;
  cursor: grab;
  color: ${({ theme }) => theme.note.text};
  background-color: ${({ theme }) => theme.button.action};

  ${({ isDragging }) =>
    isDragging &&
    css`
      cursor: grabbing;
      background-color: ${({ theme }) => theme.button.text};
    `}

  input,
  textarea {
    width: 100%;
    border: none;
    padding: 10px;
    color: ${({ theme }) => theme.note.text};
    background-color: ${({ theme }) => theme.note.background};
  }

  input {
    font-size: 20px;
    border-bottom: 1px solid
      ${({ theme }) => lighten(0.05, theme.note.background)};
    background-color: ${({ theme }) => theme.note.background};
  }

  textarea {
    font-size: 16px;
    resize: vertical;
    height: 100%;
  }
`;
