import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  color: ${({ theme }) => theme.colors.primary_light};

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    margin-top: 5px;

    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;
