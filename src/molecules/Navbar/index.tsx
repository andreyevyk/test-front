import { NavbarItem } from 'atoms/NavbarItem'
import { IRoute } from 'routes/data'
import { Container } from './styles'

interface NavbarProps {
  path: string;
  routes: IRoute[];
}

export function Navbar({ path, routes }: NavbarProps) {
  return (
    <Container>
      {routes.map((route) => (
        <NavbarItem isActive={path === route.path} key={route.path}>
          {route.title}
        </NavbarItem>
      ))}
    </Container>
  )
}
