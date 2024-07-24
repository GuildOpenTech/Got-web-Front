import { Box, Button, Typography } from "@mui/material";
import Section from "../../Section";
import { Colors } from "../../../core/colors";
import CTAButton from "../../../core/ui/CTAButton";
import "./GotAme.css";

export default function GotAme() {
  return (
    <>
      <Box padding-top={"128px"} marginLeft={"133px"}>
        <Typography
          sx={{
            fontSize: "59px",
            fontWeight: "600",
            lineHeight: "62px",
            letterSpacing: "5,5%",
            color: "white",
          }}
        >
          (Se) Dépasser les obstacles
        </Typography>
      </Box>

      <Box paddingTop={"90px"}>
        <Box>
          <Box paddingLeft={"133px"} display={"flex"}>
            <ChessImage></ChessImage>
            <Box paddingLeft={"34px"} width={"784px"} height={"396px"}>
              <GotAmeExperienceSection />
              <Box paddingTop={"51px"}>
                <GotAmeEngagementSection />
              </Box>
            </Box>
          </Box>
          <Box paddingTop={"64px"} right={"0px"}>
            <RegisterButton />
          </Box>
        </Box>
      </Box>
    </>
  );
}

const GotAmeExperienceSection = () => {
  return (
    <Box>
      <GotAmeExperienceTitle />
      <Box color={"white"} fontSize={25} lineHeight={"40.8px"}>
        <Box>
          <ul className="custom-list">
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
        fontSize: "34px",
        lineHeight: "41.31px",
      }}
    >
      <p>Avec la GOT Âme : tu gagnes de l'expérience pratique</p>
    </Box>
  );
};

const GotAmeEngagementSection = () => {
  return (
    <>
      <GotAmeEngagementTitle />
      <Box color={"white"} fontSize={25} lineHeight={"40.8px"}>
        <ul className="custom-list">
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
        fontSize: "34px",
        lineHeight: "40.8px",
      }}
    >
      <p>Le GOT Engagement : tu participes à l'association</p>
    </Box>
  );
};

const ChessImage = () => {
  return (
    <Box
      width={"315px"}
      height={"400px"}
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
      <CTAButton
        href="/inscription"
        height="74px"
        width="508px"
        fontSize={"30px"}
        lineHeight={"51.08px"}
      >
        J'ai déjà la Got Âme: Je m'engage
      </CTAButton>
    </Box>
  );
};
