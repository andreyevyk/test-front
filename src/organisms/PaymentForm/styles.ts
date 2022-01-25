import styled from 'styled-components';

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  text-transform: uppercase;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px 20px;

  .formitem {
    grid-column: span 2;
  }

  .rccs {
    grid-column-start: 4;
  }

  @media (min-width: 576px) {
    .formitem {
      grid-column: span 1;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Wrapper = styled.div`
  margin-top: 5px;
  padding: 12px;

  border-radius: 3px;
  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  display: grid;
  @media (min-width: 1200px) {
    grid-template-columns: auto 350px;
  }
`;
