import styled from 'styled-components'

interface NavbarItemProps {
  isActive: boolean;
}

// eslint-disable-next-line prettier/prettier
export const NavbarItem = styled.span <NavbarItemProps>`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;

  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.label)};

  text-decoration: none;
  text-transform: uppercase;

  align-items: center;
  padding: 12px;

`
