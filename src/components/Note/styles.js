import styled, { css } from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  position: absolute;
  z-index: ${({ zindex }) => 100 + zindex};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: 100%;
  max-width: 320px;
  border-radius: 8px;
  overflow: hidden;
  line-height: 0px;
  border: none;
  color: ${({ theme }) => theme.note.text};
  background-color: ${({ theme }) => theme.button.default};
  box-shadow: 0 2px 4px 5px rgba(0, 0, 0, 0.1);
  transition: display 200ms linear;
  transform: translateY(-50%);

  input,
  textarea {
    width: 100%;
    border: none;
    padding: 10px;
    color: ${({ theme }) => theme.note.text};
    background-color: ${({ theme }) => theme.note.background};

    &:hover {
      cursor: grab;
    }

    &:focus {
      cursor: text;
    }

    ${({ isDragging }) =>
      isDragging &&
      css`
        cursor: grabbing;
        display: none;
      `}
  }

  input {
    font-size: 20px;
    font-weight: 800;
    border-bottom: 1px solid
      ${({ theme }) => lighten(0.05, theme.note.background)};
    background-color: ${({ theme }) => theme.note.background};
  }

  textarea {
    font-size: 16px;
    resize: none;
    min-height: 80px;
    /* height: 100%; */
  }
`;
