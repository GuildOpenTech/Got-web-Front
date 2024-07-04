import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import Section from "../components/Section";
import { Box } from "@mui/material";
import TopSection from "../components/Sections/TopSection/TopSection";
import { Colors } from "../core/colors";
import GotAme from "../components/Sections/GotAme/GotAme";

/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <Body>
        <TopSection />
        <Section title="(Se) Dépasser les obstacles" id="2">
          <GotAme></GotAme>
          <Box
            sx={{
              backgroundImage:
                'url("src/assets/backgrounds/Body_MeshGradient_2.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "absolute",
              top: "50%",
              right: "0%",
              transform: "translateY(-50%)",
              width: "300px",
              height: "300px",
            }}
          />
        </Section>

        <Box
          display="flex"
          flexDirection="column"
          gap={"200px"}
          sx={{
            background: `linear-gradient(180deg, ${Colors.BLEU_NUIT} 30%, ${Colors.BLEU_OUTREMER} 90%)`,
          }}
        >
          <Section title="Projets en cours" id="projects">
            <p>content of section here</p>
          </Section>
          <Section title="section 5" id="5">
            <p>content of section here</p>
          </Section>
          <Section title="section 6" id="6">
            <p>content of section here</p>
          </Section>
          <Section title="Ils racontent leur expérience" id="feedbacks">
            <p>content of section here</p>
          </Section>
        </Box>
      </Body>

      <Footer />
    </>
  );
}

interface Props {
  children: React.ReactNode;
}
