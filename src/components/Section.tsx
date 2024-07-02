import { Colors } from '../core/colors'

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
      }}
    >
      <h2
        style={{
          fontSize: '60px',
          color: Colors.SECONDARY,
          fontWeight: '600',
          fontFamily: 'Cabin',
          letterSpacing: '6px',
          textAlign: 'left',
        }}
      >
        {title}
      </h2>
      {children}
    </section >
  )
}

interface Props {
  title?: string,
  id: string,
  children: React.ReactNode,
}