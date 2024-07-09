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
        paddingLeft: '8px',
        paddingTop: '198px',
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
        alignItems: 'flex-start',
        gap: '19px',
        color: color ?? Colors.WHITE,
        fontSize: '24px',
        lineHeight: '29.16px',
      }}
    >
      <Marker
        color={color}
        sx={{
          position: 'relative',
          left: '-1px',
          top: '10px',
        }}
      />
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
        position: 'relative',
        zIndex: '50',
        marginLeft: '20.5px',
      }}
    >
      <Box component="img" src="src/assets/logos/LOGO_TxtBlc_158px.png" />
      <Typography variant="h2"
        sx={{
          fontSize: '60px',
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
        marginTop: '84px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, 50%)',
        }}
      >
        <CTAButton
          href="/inscription"
        >
          Viens sur <br /> Discord
        </CTAButton>

      </Box>

      <Box
        sx={{
          position: 'absolute',
          marginRight: '160px',
          right: "0",
          transform: 'translateY(50%)',
        }}
      >
        <CTAButton
          sx={{
            fontSize: '18px',
            padding: '0 16px',

          }}
        >

          Miss Terry <br /> te répond
        </CTAButton>
      </Box>
    </Box>

  )
}

const MarkersLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        marginLeft: '175px',
        marginTop: '64px',
        width: '.65mm',
        height: '135px',
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
          gap: '13.5px',
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
      {/* <Box
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
        Miss Terry <br /> te répond
      </Box> */}
    </>

  )
}