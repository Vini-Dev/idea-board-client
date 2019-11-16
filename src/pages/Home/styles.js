import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9% 91%;
  grid-template-areas:
    'header'
    'board';
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.button.default};

  button {
    padding: 7px 10px;
    .icon {
      font-size: 24px;
    }
  }
`;
