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
      }}
    >
      <h2>{title}</h2>
      {children}
    </section >
  )
}

interface Props {
  title?: string,
  id: string,
  children: React.ReactNode,
}