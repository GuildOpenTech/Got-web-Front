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
        marginLeft: '83px',
        marginRight: '83px',
        padding: `${paddingTop} ${scrollBarDist} ${paddingBottom}`,
      }}
    >
      <h2
        style={{
          fontSize: '60px',
          color: Colors.WHITE,
          fontWeight: '600',
          fontFamily: 'Cabin',
          letterSpacing: '6px',
          textAlign: titleCenter ? 'center' : 'left',
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
  titleCenter?: boolean,
  scrollBarDist?: string,
  paddingTop?: string,
  paddingBottom?: string,
}