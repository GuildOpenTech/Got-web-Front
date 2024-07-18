import { Box, Typography } from "@mui/material";
import { Colors } from "../../../core/colors";
import CTAButton from "../../../core/ui/CTAButton";
import Marker from "../../../core/ui/Marker";

export default function TopSection() {
  return (
    <Box
      bgcolor={Colors.BLEU_NUIT}
      sx={{
        height: 'calc(100vh - 130px)',
        backgroundImage: 'url("src/assets/backgrounds/Body_MeshGradient_1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        paddingLeft: '8px'
      }}
    >
      <TitleAndLogo />
      <Description />
      <RegisterButton />
      <BotImagePlaceholder />
    </Box>
  )
}

interface MarkerWithTextProps {
  color?: string;
  text: string;
}
const MarkerWithText = ({ color, text }: MarkerWithTextProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        color: color ?? 'white',
        fontSize: '24px'
      }}
    >
      <Marker color={color} />
      <p>{text}</p>
    </Box>
  )
}

const TitleAndLogo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '59px',
        paddingTop: '60px',
      }}
    >
      <Box component="img" src="src/assets/logos/LOGO_TxtBlc_158px.png" />
      <Typography variant="h2"
        sx={{
          fontSize: '59px',
          fontWeight: '600',
          lineHeight: '62px',
          letterSpacing: '0.1em',
          color: 'white',
        }}
      >
        Innovons l'informatique, <br />
        inspirons les talents
      </Typography>
    </Box>
  )
}

const RegisterButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '84px'
      }}
    >
      <CTAButton href="/inscription">
        Viens sur <br /> Discord
      </CTAButton>
    </Box>

  )
}

const MarkersLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        marginLeft: '174.33px',
        marginTop: '64px',
        width: '2.3px',
        height: '160px',
        background: 'white',
      }}
    />
  )
}

const Description = () => {
  return (
    <>
      <MarkersLine />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          marginLeft: '170px',
          marginTop: '48px',
        }}
      >
        <MarkerWithText
          text="Participe gratuitement à des projets open source technologiquement innovants"
        />

        <MarkerWithText
          color={Colors.ORANGE}
          text="Immerge toi dans la GOT Âme, inspirée par l'École 42 et notre passion pour l'IT"
        />

        <MarkerWithText
          text="Expérimenté ou en reconversion, réseaute avec des experts dans leurs domaines"
        />

        <MarkerWithText
          color={Colors.ORANGE}
          text="Collabore avec des passionnés solidaires, acquiers de l'expérience, monte en compétences"
        />
      </Box>
    </>
  )
}

const BotImagePlaceholder = () => {
  return (
    <>
      <Box
        sx={{
          fontSize: '134px',
          position: 'absolute',
          marginRight: '81px',
          right: 0,
          bottom: '43%',
          rotate: '-15deg',
        }}
      >
        🤖
      </Box>
      <Box
        sx={{
          fontSize: '18px',
          position: 'absolute',
          marginRight: '160px',
          right: 0,
          top: '35%',
          color: `${Colors.ORANGE}`,
          padding: '0 16px',
        }}
      >
        Miss Terry <br/> te répond
      </Box>
    </>

  )
}