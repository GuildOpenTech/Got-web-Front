import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

export default function Body({ children }: Props) {

  const [position, setPosition] = useState(0)

  const handleScroll = (e: Event) => {
    const documentHeight = document.body.scrollHeight
    const newPosition = window.scrollY
    const scroll = ((newPosition + window.innerHeight/2) * 100 / documentHeight)
    setPosition(scroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position])

  return (
    <main>
      <Box
        minHeight= '100%'
        width="5px"
        sx={{
          height: document.body.scrollHeight,
          background: `linear-gradient(to bottom, #0D2D45 ${position - 5}%, #2AB8CD ${position}%, #2AB8CD ${position + 5}%, #0D2D45 ${position + 5}%)`,
          position: 'absolute',
          top: 'Z00px',
          left: '105px'
        }}
      />
      { children }
    </main>
  )
}

interface Props {
  children: React.ReactNode,
}