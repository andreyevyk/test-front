import styled from 'styled-components';

export const Layout = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  height: calc(100% - 40px);

  > div,
  > button {
    margin-top: 20px;
  }

  @media (min-width: 576px) {
    button {
      width: 340px;
    }
  }
`;
