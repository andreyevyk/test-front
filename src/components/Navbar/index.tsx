import { routes } from 'routes/data'
import { Container, NavbarItem } from './styles'

interface NavbarProps {
  path: string;
}

export function Navbar({ path }: NavbarProps) {
  return (
    <Container>
      {routes.map((route) => (
        <NavbarItem to={route.path} isActive={path === route.path} key={route.path}>
          {route.title}
        </NavbarItem>
      ))}
    </Container>
  )
}
