import { Colors } from '../core/colors'
import { Box } from '@mui/system'

/**
 * @param {string} title title of the section
 * @param {React.ReactNode} children content of the section
 * @returns {React.ReactNode} Page's section component
 */
export default function Section(
  { title, id, children }: Props
) {

  return (
    <section
      id={id}
      style={{
        position: 'relative',
        width: '100%',
        margin: 'auto',
        // maxWidth: '1440px',
        // margin: '107px 128px',
        padding: '28px 0'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // margin: 'auto',
          maxWidth: '1440px',
          // margin: '107px 128px',
          padding: '107px 128px',
          // padding: '28px 0'
        }}
      >
        <h2
          style={{
            fontSize: '60px',
            color: Colors.WHITE,
            fontWeight: '600',
            fontFamily: 'Cabin',
            letterSpacing: '6px',
            textAlign: 'left',
          }}
        >
          {title}
        </h2>
        {children}
      </Box>
    </section >
  )
}

interface Props {
  title?: string,
  id: string,
  children: React.ReactNode,
}