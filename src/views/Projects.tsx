import Section from "../components/Section"
import { Box } from '@mui/material';
import ProjectCarousel from "../components/ProjectCarousel"
import CTAButton from "../core/ui/CTAButton"

export default function Projects() {
  return (
    <Section
      title="Projets en cours"
      id="projects"
      scrollBarDist='28px'
      paddingTop='64px'
      paddingBottom='25px'
    >
      <ProjectCarousel />
      <Box
        textAlign='center'
        width='100%'
        sx={{
          marginTop: '68px',
        }}
      >
        <CTAButton
          href="/inscription"
          style={{
            width: '492px',
            height: '73px',
            fontSize: '30px',
            fontWeight: '400',
          }}
        >
          Je kiffe ces projets ! Je m'engage
        </CTAButton>

      </Box>
    </Section>
  )
}