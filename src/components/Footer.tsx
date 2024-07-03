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
          paddingLeft: "30px",
          fontSize: "22px",
          color: Colors.BLEU_LAGON,
          letterSpacing: "2.6px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span>Nos partenaires</span>
        <PartnerLogo alt="Github" src={GithubLogo} url="https://github.com/" />
        <PartnerLogo
          alt="canvaImage"
          src={CanvaLogo}
          url="https://www.canva.com/fr_fr/"
        />
        <PartnerLogo
          alt="HelloAsso"
          src={HelloAssoLogo}
          url="https://www.helloasso.com/"
        />
        <PartnerLogo
          alt="JeVeuxAider"
          src={JeVeuxAiderLogo}
          url="https://www.jeveuxaider.gouv.fr/"
        />
      </Box>
    </footer>
  );
}
interface PartnerLogoProps {
  alt: string;
  src: string;
  url: string;
}
function PartnerLogo(props: PartnerLogoProps) {
  return (
    <Box
      component="img"
      alt={props.alt}
      src={props.src}
      height={31}
      sx={{
        cursor: "pointer",
        ":hover": {
          transform: "scale(1.1)",
          transition: "0.2s",
        },
      }}
      onClick={(e) => {
        e.preventDefault();
        window.open(props.url, "_blank");
      }}
    />
  );
}
