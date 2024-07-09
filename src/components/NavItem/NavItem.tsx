import { Box, Link } from '@mui/material'
import { useState } from 'react'
import { Colors } from '../../core/colors'

export default function NavItem(
  { link }: NavItemProps
) {

  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <li
      style={{
        position: 'relative',
        transform: 'translateY(calc(-50%))'
      }}
    >
      <Box
        width='14px'
        height='14px'
        top={link.target === '/connexion' ? 'calc(50%)' : ''}
        left={link.target === '/connexion' ? '0' : '50%'}
        sx={{
          position: 'absolute',
          borderRadius: '50%',
          background: clicked ? Colors.TURQUOISE : hover ? Colors.ORANGE : Colors.BLEU_NUIT,
          border: clicked ? `1mm solid ${Colors.TURQUOISE}` : `1mm solid ${Colors.ORANGE}`,
          transform: link.target === '/connexion' ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)',
          transition: 'all .25s'
        }}
      />
      <Link
        underline="none"
        href={link.target}
        width={link.target === '/connexion' ? 'auto' : 'max-content'}
        sx={{
          position: 'absolute',
          margin: link.target === '/connexion' ? '5px' : '14px',
          top: link.target === '/connexion' ? '-50%' : '100%',
          left: link.target === '/connexion' ? '-50%' : '50%',
          marginLeft: link.target === '/connexion' ? '14px' : '0',
          transform: link.target === '/connexion' ? 'translate(-25%, -33%)' : 'translate(-50%, 0)',
          color: clicked ? Colors.TURQUOISE : Colors.ORANGE,
          textAlign: link.target === '/connexion' ? 'center' : 'left',
          transition: 'all .25s',
          fontSize: clicked ? '24px' : '22px',
        }}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {link.name}

      </Link>
    </li >
  )
}

export interface NavItemLink {
  name: string,
  target: string,
}

interface NavItemProps {
  link: NavItemLink,
  index?: number,
}