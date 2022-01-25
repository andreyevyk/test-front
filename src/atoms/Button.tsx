import styled from 'styled-components';

export const Button = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 3px;
  border: none;

  cursor: pointer;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.shape};

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: #d45a00;
    box-shadow: none;
  }
`;
