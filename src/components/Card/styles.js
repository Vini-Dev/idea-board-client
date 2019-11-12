import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  padding: 30px;
  background-color: ${({ theme }) => theme.card.background};
`;
