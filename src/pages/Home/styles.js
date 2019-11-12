import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.content.background};
  display: flex;
  justify-content: center;
  align-items: center;

  .card-welcome {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-areas:
      'e'
      't'
      'b';
    width: 25%;
    height: 50%;

    @media only screen and (max-width: 768px) {
      width: 90%;
      height: 50%;
    }
    .container-emoji {
      display: flex;
      justify-content: center;
      grid-area: e;
      width: 100%;
      padding: 30px;
      border-radius: 8px;
      background-color: ${({ theme }) => lighten(0.01, theme.button.default)};

      .emoji {
        height: 60px;
        width: 60px;
      }
    }

    .container-text {
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        grid-area: t;
        font-size: 18px;
        color: ${({ theme }) => theme.content.text};
      }
    }

    button {
      grid-area: b;
      width: 100%;
    }
  }

  .container-creator {
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: center;

    .creator-name,
    .creator-link {
      color: ${({ theme }) => lighten(0.2, theme.content.text)};
    }

    .creator-name {
      margin-right: 10px;
    }

    .creator-link {
      text-decoration: none;
    }
  }
`;
