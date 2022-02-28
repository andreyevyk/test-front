import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div,
  > button {
    margin-top: 20px;
    width: 100%;
  }

  button {
    @media (min-width: 576px) {
      width: 340px;
    }
  }
`;
