import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;

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
