import Section from "../../Section"
import { Box } from '@mui/material';
import ProjectCarousel from "./ProjectCarousel"
import CTAButton from "../../../core/ui/CTAButton"
// import Image from './../../../assets/backgrounds/Body_MeshGradient_3.webp'
import Image from './../../../assets/backgrounds/Body_MeshGradient_3.svg'

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
        src={Image}
        alt=""
        style={{
          opacity: '0.5',
          position: 'absolute',
          top: 'calc(-64px + 4px)',
          padding: '0',
          left: 'calc(-83px - 7px)',
          zIndex: '0',
          maxWidth: '1344px',
          maxHeight: '473px',
          width: '100vw',
          height: '100vh',
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