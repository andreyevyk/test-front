import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;
