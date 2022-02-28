import { NavbarItem } from 'atoms/NavbarItem';
import { IRoute } from 'routes/data';
import { Container } from './styles';

export interface NavbarProps {
  path: string;
  routes: IRoute[];
}

export function Navbar({ path, routes }: NavbarProps) {
  return (
    <Container data-testid="navbar-container">
      {routes.map((route) => (
        <NavbarItem data-testid="navbar-item" isActive={path === route.path} key={route.path}>
          {route.title}
        </NavbarItem>
      ))}
    </Container>
  );
}
