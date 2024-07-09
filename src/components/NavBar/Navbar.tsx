import { Box } from '@mui/material';
import NavItem, { NavItemLink } from '../NavItem/NavItem';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Colors } from '../../core/colors';


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
    <nav
      style={{
        position: 'relative',
        width: '573px',
        height: '100%',
        marginRight: '47px'
      }}
    >
      <BurgerMenu />
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          height: '100%',
          width: '100%',
          position: 'absolute',
          right: '90px',
        }}
      >
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