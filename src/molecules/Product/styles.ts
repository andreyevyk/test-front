import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.shape};

  padding: 14px;

  > div {
    width: 100%;
    height: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    max-height: 60px;
  }
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  line-height: 16px;
`;
export const Price = styled.span`
  align-self: flex-end;

  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
