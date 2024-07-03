import { Box } from '@mui/system';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../core/ui/config/slider';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../views/layoutDatas';
import ArrowNext from './ArrowNext';

export default function ProjectCarousel() {

  const newSettings = { ...settings, nextArrow: <ArrowNext /> }

  return (
    <Box
      className='slider-container'
      sx={{
        paddingX: '17px',
        marginTop: '56px',
      }}
    >
      <Slider {...newSettings}>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={{
                  imageUrl: project.imageUrl,
                  title: project.title,
                  githubUrl: project.githubUrl,
                  description: project.description ? project.description : []
                }}
              />
            )
          })
        }
      </Slider>
    </Box>
  )
}