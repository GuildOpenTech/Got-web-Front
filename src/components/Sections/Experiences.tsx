import { Box } from "@mui/material"
import Section from "../../components/Section"
import CTAButton from "../../core/ui/CTAButton"
import ExperienceCarousel from "../Experiences/ExperienceCarousel"
//import Section from "../Section"
export default function Experiences() {
  return (
  <Box
     paddingLeft="150px"
     paddingRight="15px"
     paddingTop='72px'
     paddingBottom="37px"
     
     >
    
  <Box
     paddingLeft="95px"
     paddingRight="70px">
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
        <CTAButton
          href="/inscription"
          style={{
            width: '279px',
            height: '73px',
            fontSize: '30px',
            fontWeight: '400',
          }}
          
        >
          Je suis motivé(e)
        </CTAButton>

      </Box>

      </Section>
      </Box>
      </Box>
      )}
