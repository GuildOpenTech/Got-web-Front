import { Box, Link } from "@mui/material"
import { Colors } from "../../core/colors"

export default function ProjectCard({ project, key }: Props,) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems='flex'
      // padding="100px 0"
      maxWidth='372px'
      margin='0 32px'
      gap='68px'
      key={key}
    >
      <img
        src={`/public/uploads/images/${project.imageUrl}`}
        alt={`logo du projet ${project.title}`}
        style={{
          maxWidth: '160px',
          margin: 'auto',
        }}
        className='logo'
      />
      <Box
        gap='12px'
        width='100%'
        paddingLeft='22px'
      >
        <Link
          href={project.githubUrl}
          target='_blank'
          underline="none"
          color={Colors.TURQUOISE}
          sx={{
            position: 'relative',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '29.16px',
            '&::before': {
              content: '""',
              position: 'absolute',
              display: 'block',
              right: 'calc(100% + 10px)',
              top: '50%',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              transform: 'translateY(-50%)',
              background: '#93D3E9',
              boxShadow: `0 0 4px 1px${Colors.WHITE}`,
            }
          }}
        >
          Accès Reader au GitHub
        </Link>
        <h3
          style={{
            color: Colors.ORANGE,
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '29.16px',
          }}
        >{project.title}_</h3>
        <ul

        >
          {project.description?.map((point, index) => (
            <li
              key={index}
              style={{
                fontSize: '21px',
                listStyle: 'none',
                lineHeight: '25.52px',
                letterSpacing: '0',
                fontWeight: '400',
              }}
            >
              &gt; {point.point}
            </li>))}
        </ul>
      </Box>
    </Box>)
}

export interface DescriptionProps {
  point: string
}

export interface ProjectProps {
  imageUrl?: string,
  title?: string,
  githubUrl?: string,
  description?: DescriptionProps[]
}

interface Props {
  project: ProjectProps
  key: number
}