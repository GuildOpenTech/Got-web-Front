import Box from "@mui/material/Box";
import { Colors } from "../core/colors";
import CanvaLogo from "../assets/logos/Logo-Canva-1.svg";
import GithubLogo from "../assets/logos/Logo-Github.svg";
import HelloAssoLogo from "../assets/logos/Logo-HelloAsso.svg";
import JeVeuxAiderLogo from "../assets/logos/Logo-JeVeuxAider.svg";

export default function Footer() {
  return (
    <footer>
      <Box
        height="60px"
        width="100%"
        sx={{
          background: `radial-gradient(at left top, ${Colors.BLEU_OUTREMER}, ${Colors.BLEU_NUIT})`,
          position: "fixed",
          bottom: "0",
          paddingLeft: '30px',
          fontSize: '22px',
          color: Colors.BLEU_LAGON,
          letterSpacing: '2.6px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span>Nos partenaires</span>
        <Box component="img" alt="Github" src={GithubLogo} height={31} />
        <Box component="img" alt="canvaImage" src={CanvaLogo} height={31} />
        <Box component="img" alt="HelloAsso" src={HelloAssoLogo} height={31} />
        <Box component="img" alt="JeVeuxAider" src={JeVeuxAiderLogo} height={31} />
      </Box>
    </footer>
  );
}
