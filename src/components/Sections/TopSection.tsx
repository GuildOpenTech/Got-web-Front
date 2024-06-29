import { Box } from "@mui/material";
import { Colors } from "../../core/colors";
import Section from "../Section";

export default function TopSection() {
  return (
    <Box
      bgcolor={Colors.BLEU_NUIT}
      sx={{
        height: 'calc(100vh - 130px)',
        backgroundImage: 'url("src/assets/backgrounds/Body_MeshGradient_1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
      }}
    >
      <Section
        title="topSection"
        id="topSection"
      >
        <p>content of section here</p>
      </Section>
    </Box>
  )
}

