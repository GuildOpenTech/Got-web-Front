import { Box, Button, Typography } from "@mui/material";
import Section from "../../Section";
import { Colors } from "../../../core/colors";
import CTAButton from "../../../core/ui/CTAButton";
import "./GotAme.css";

export default function GotAme() {
  return (
    <>
      <Box paddingTop={"90px"}>
        <Box paddingLeft={"105px"} display={"flex"}>
          <ChessImage></ChessImage>
          <Box paddingLeft={"34px"} width={"784px"} height={"396px"}>
            <GotAmeExperienceSection />
            <GotAmeEngagementSection />
          </Box>
        </Box>

        <Box paddingTop={"64px"}>
          <RegisterButton />
        </Box>
      </Box>
    </>
  );
}

const GotAmeExperienceSection = () => {
  return (
    <Box>
      <GotAmeExperienceTitle />
      <Box color={"white"}>
        <Box>
          <ul>
            <li>tu acquiers de la séniorité</li>
            <li>pour trouver ton premier job</li>
            <li>pour valider ta reconversion</li>
            <li>pour acquérir de nouvelles compétences</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

const GotAmeExperienceTitle = () => {
  return (
    <Box
      sx={{
        color: Colors.ORANGE,
      }}
    >
      <h2>Avec la GOT Ame : vous gagnez de l'expérience pratique</h2>
    </Box>
  );
};

const GotAmeEngagementSection = () => {
  return (
    <>
      <GotAmeEngagementTitle />
      <Box color={"white"}>
        <ul>
          <li>tu acquiers et/ou partages des connaissances</li>
          <li>
            dans des projets opensource que tu intègres dans ton portfolio
          </li>
          <li>
            nous créons les projets qui te manquent et nous montons les équipes
          </li>
        </ul>
      </Box>
    </>
  );
};
const GotAmeEngagementTitle = () => {
  return (
    <Box
      sx={{
        color: Colors.ORANGE,
      }}
    >
      <h2>Le GOT Engagement : tu participes à l'association</h2>
    </Box>
  );
};

const ChessImage = () => {
  return (
    <Box
      width={315}
      height={400}
      component="img"
      src="src/assets/chess.png"
    ></Box>
  );
};

const RegisterButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "84px",
      }}
    >
      <CTAButton href="/inscription" height="74px" width="508px">
        J'ai déjà la Got Ame: Je m'engage
      </CTAButton>
    </Box>
  );
};
