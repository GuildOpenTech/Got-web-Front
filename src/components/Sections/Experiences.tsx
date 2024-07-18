import { Box } from "@mui/material"
import Section from "../../components/Section"
import ExperienceCarousel from "../Experiences/ExperienceCarousel"
import ExperienceButton from "../Experiences/ExperienceButton"
export default function Experiences() {
  return (
  <Box
     paddingLeft="75px"
     paddingTop='72px'
     paddingBottom="37px"
     >
    
  <Box
     >
       <Section  title="Ils racontent leur expérience"
        id="feedbacks" 
        scrollBarDist='28px'
       >
          <p></p>
        <Box
        textAlign='center'
        width='100%'
        sx={{
          marginTop: '24px',
          
        }}
      >

        <ExperienceCarousel/>
        <div style={{
          paddingBottom: "37px"
        }}></div>
        <ExperienceButton
          href="/inscription"
          style={{
            width: '279px',
            height: '73px',
            fontSize: '30px',
            fontWeight: '400',
          }}
          
        >
          Je suis motivé(e)
        </ExperienceButton>

      </Box>

      </Section>
      </Box>
      </Box>
      )}
