import { Typography } from '@mui/material'
import { Colors } from '../core/colors'

/**
 * @param {string} title title of the section
 * @param {React.ReactNode} children content of the section
 * @param {string} id id of the section
 * @param {string} scrollBarDist from the scrollbar
 * @param {boolean} titleCenter center the title
 * @param {string} paddingTop section top padding
 * @param {string} pafdingBottom section bottom padding
 * @returns {React.ReactNode} Page's section component
 */
export default function Section(
  {
    title,
    id,
    scrollBarDist,
    titleCenter,
    children,
    paddingTop,
    paddingBottom,
  }: Props
) {

  return (
    <section
      id={id}
      style={{
        position: 'relative',
        width: 'calc(100% - 166px)',
        margin: 'auto',
        marginLeft: '105px',
        marginRight: '105px',
        padding: `${paddingTop} ${scrollBarDist} ${paddingBottom}`,
      }}
    >

      <Typography variant="h2"
        sx={{
          fontSize: '60px',
          fontWeight: '600',
          lineHeight: '62px',
          letterSpacing: '0.055em',
          color: Colors.WHITE,
          zIndex: '10',
          position: 'relative',
          
        }}
      >
        {title}
      </Typography>
      {children}
    </section >
  )
}

interface Props {
  title?: string,
  id: string,
  children: React.ReactNode,
  titleCenter?: boolean,
  scrollBarDist?: string,
  paddingTop?: string,
  paddingBottom?: string,
}