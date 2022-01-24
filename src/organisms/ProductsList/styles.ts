import styled from 'styled-components'

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  text-transform: uppercase;
`

export const Wrapper = styled.div`
  display: grid;

  margin-top: 5px;
  padding: 12px;

  border-radius: 3px;
  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  div + div {
    margin-top: 15px;
  }
`
