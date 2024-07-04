import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import Section from '../components/Section';
import { Box } from '@mui/material';
import TopSection from '../components/Sections/TopSection/TopSection';
import { Colors } from '../core/colors';
import CTAButton from '../core/ui/CTAButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCarousel from '../components/ProjectCarousel';


/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout({ }: Props): React.ReactNode {

  return (
    <>
      <Header />
      <Body>
        <TopSection />
        <Section
          title="(Se) Dépasser les obstacles"
          id="2"
          scrollBarDist='28px'
        >
          <h3>Avec la GOT Âme : vous gagnez de l’expérience pratique</h3>
          + tu acquiers de la séniorité
          <ul>
            <li>
              pour trouver votre premier job
            </li>
          </ul>
          <li>pour valider votre reconversion</li>
          <li> pour acquérir de nouvelles compétences</li>
          <Box
            sx={{
              backgroundImage: 'url("src/assets/backgrounds/Body_MeshGradient_2.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'absolute',
              top: '50%',
              right: '-83px',
              transform: 'translateY(-50%)',
              width: '300px',
              height: '300px',
            }}
          />
        </Section>
        <Section
          title="La GOT Âme"
          id="gotAme"
        >
          <p>content of section here</p>
        </Section>
        <Box
          display="flex"
          flexDirection="column"
          gap={'200px'}
          sx={{
            background: `linear-gradient(180deg, ${Colors.BLEU_NUIT} 30%, ${Colors.BLEU_OUTREMER} 90%)`,
          }}
        >
          <Section
            title="Projets en cours"
            id="projects"
            scrollBarDist='28px'
            paddingTop='64px'
            paddingBottom='25px'
          >
            <ProjectCarousel />
            <Box
              textAlign='center'
              width='100%'
              sx={{
                marginTop: '68px',
              }}
            >
              <CTAButton
                href="/inscription"
                style={{
                  width: '492px',
                  height: '73px',
                  fontSize: '30px',
                  fontWeight: '400',
                }}
              >
                Je kiffe ces projets ! Je m'engage
              </CTAButton>

            </Box>
          </Section>
          <Section
            title="section 5"
            id="5"
          >
            <p>content of section here</p>
          </Section>
          <Section
            title="section 6"
            id="6"
          >
            <p>content of section here</p>
          </Section>
          <Section
            title="Ils racontent leur expérience"
            id="feedbacks"
          >
            <p>content of section here</p>
          </Section>
        </Box>
      </Body >

      <Footer />
    </>

  )
}

interface Props {
  children: React.ReactNode,
}