import Section from "../../Section"
import { Box } from '@mui/material';
import ProjectCarousel from "./ProjectCarousel"
import CTAButton from "../../../core/ui/CTAButton"

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

      <img
        src='src/assets/backgrounds/Body_MeshGradient_3.webp'
        alt="image de fond"
        style={{
          opacity: '0.5',
          position: 'absolute',
          top: '4px',
          padding: '0',
          left: 'calc(-105px - 7px)',
          zIndex: '0',
          maxWidth: '1344px',
          maxHeight: '473px',
          paddingBottom: '64px'
        }}
      />

      <Box
        textAlign='center'
        width='100%'
        sx={{
          marginTop: '68px',
        }}
      >
        <CTAButton
          id="projectsBtn"
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