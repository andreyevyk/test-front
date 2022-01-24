import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.label};

  padding: 15px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  span + span {
    margin-top: 9px;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
  }
`

export const Discount = styled.span`
  color: ${({ theme }) => theme.colors.primary_light};
`
export const TotalPrice = styled.span`
  margin-top: 16px !important;
  font-weight: 700;
`
