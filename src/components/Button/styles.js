import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.button.text};
  background: ${({ theme }) => theme.button.default};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .icon {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.action {
    background: ${({ theme }) => theme.button.action};
  }
`;
