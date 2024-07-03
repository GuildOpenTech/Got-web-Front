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
      style= {{
        position: 'relative',
        transform: 'translateY(calc(-50%))'
      }}
    >
      <Link
        underline="none"
        href={link.target}
        // id={link.target === '/connexion' ? 'connect' : ''}
        width={link.target === '/connexion' ? 'auto' : 'max-content'}
        sx={{
          position: 'absolute',
          margin: '5px',
          top: link.target === '/connexion' ? '-50%' : '100%',
          left: link.target === '/connexion' ? '-50%' : '50%',
          marginLeft: link.target === '/connexion' ? '14px' : '0',
          transform: link.target === '/connexion' ? 'translate(12px, -50%)' : 'translate(-50%, 0)',
          color: clicked ? Colors.TURQUOISE : Colors.ORANGE,
          transition: 'all .25s',
          fontSize: clicked ? '24px' : '22px',
        }}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {link.name}
        <Box
          width='14px'
          height='14px'
          top={link.target === '/connexion' ? 'calc(50% - 5px)' : '-5px'}
          left={link.target === '/connexion' ? '-14px' : '50%'}
          sx={{
            position: 'absolute',
            borderRadius: '50%',
            background: clicked ? Colors.TURQUOISE : hover ? Colors.ORANGE : Colors.BLEU_NUIT,
            border: clicked ? `1mm solid ${Colors.TURQUOISE}` : `1mm solid ${Colors.ORANGE}`,
            transform: link.target === '/connexion' ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)',
            transition: 'all .25s'
          }}
        />
      </Link>
    </li >
  )
}

export interface NavItemLink {
  name: string,
  target: string,
}
interface NavItemProps  {
  link: NavItemLink,
  index?: number,
}