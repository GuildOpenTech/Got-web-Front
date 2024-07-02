import { Box, Link } from "@mui/material"
import { Colors } from "../../core/colors"

export default function ProjectCard({ project }: ProjectCardProps) {
  console.log(project)
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems='center'
      gap={'200px'}
    >
      <img
        src={`/public/images/projects/${project.imageUrl}`}
        alt={`logo du projet ${project.title}`}
      />

      <Link
        href={project.githubUrl}
        target='_blank'
        underline="none"
        color={Colors.TURQUOISE}
      >
        <Box
          position='absolute'
          top='50%'
          right='-100%'
          width='10px'
          height='10px'
          sx={{
            transform: 'translate(-50%, -50%)',
            background: Colors.TURQUOISE,
            borderRadius: '50%',
          }}

        />
        Accès Reader au GitHub
      </Link>
      <h3
        style={{
          color: Colors.ORANGE,
        }}
      >{project.title}_</h3>
      {/* <ul>
        {project.description.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul> */}
    </Box>)
}

interface DescriptionProps {
  points: string
}

interface ProjectProps {
  imageUrl?: string,
  title?: string,
  githubUrl?: string,
  description?: DescriptionProps[]
}

interface ProjectCardProps {
  project: ProjectProps
}