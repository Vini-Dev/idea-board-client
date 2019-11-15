import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.content.background};
`;

export const Content = styled.div`
  margin: auto;
  max-width: 1024px;
`;
