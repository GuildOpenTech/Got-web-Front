import { Box, Link } from "@mui/material"
import { Colors } from "../../core/colors"

export default function ProjectCard({ project }: ProjectCardProps) {
  console.log(project.description)
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems='flex'
      padding="100px 0"
      width='372px'
      margin='0 auto'
      gap='68px'
      paddingX='24px'
    >
      <img
        src={`/public/uploads/images/${project.imageUrl}`}
        alt={`logo du projet ${project.title}`}
        style={{
          maxWidth: '160px',
          margin: '0 auto 68px',
        }}
      />
      <Box
        gap='12px'
        width='100%'
        sx={{
          fontSize: '24pt'
        }}
      >
        <Link
          href={project.githubUrl}
          target='_blank'
          underline="none"
          color={Colors.TURQUOISE}
          sx={{
            position: 'relative',
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
              // background: Colors.TURQUOISE,
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
            fontSize: '24pt',
            fontWeight: '400',
          }}
        >{project.title}_</h3>
        <ul

        >
          {project.description?.map((point, index) => (
            <li
              key={index}
              style={{
                fontSize: '22px',
                listStyle: 'none',
                lineHeight: '25.52px',
              }}
            >
              {point.point}
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

interface ProjectCardProps {
  project: ProjectProps
}