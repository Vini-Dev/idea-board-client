import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.content.background};
`;

export const Content = styled.div`
  margin: auto;
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 1024px;
`;
