import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`
interface NavbarItemProps {
  isActive: boolean;
}

// eslint-disable-next-line prettier/prettier
export const NavbarItem = styled(Link) <NavbarItemProps>`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;

  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.label)};

  text-decoration: none;
  text-transform: uppercase;

  align-items: center;
  padding: 12px;

`
