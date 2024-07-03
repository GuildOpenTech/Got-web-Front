import { Box } from '@mui/material';
import NavItem, { NavItemLink } from '../NavItem/NavItem';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Colors } from '../../core/colors';
import './navbar.css';

export default function Navbar() {

  const navItems: NavItemLink[] = [
    {
      name: 'La GOT Âme',
      target: '/#gotAme'
    },
    {
      name: 'Projets en cours',
      target: '/#projects'
    },
    {
      name: 'Témoignages',
      target: '/#feedbacks'
    },
    {
      name: 'GOT Connexion',
      target: '/connexion'
    }
  ];


  return (
    <nav>
      <BurgerMenu />
      <ul>
        <Box
          width="100%"
          height=".65mm"
          sx={{
            position: 'absolute',
            background: Colors.TURQUOISE,
          }}
        />
        {navItems.map(
          (link: { name: string, target: string }, index: number) => (
            <NavItem
              link={link}
              key={index}
            />
          ))}
      </ul>
    </nav>
  )
}