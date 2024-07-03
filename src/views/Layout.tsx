import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import Section from '../components/Section';
import { Box, Button } from '@mui/material';
import TopSection from '../components/Sections/TopSection/TopSection';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Colors } from '../core/colors';

/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout({ }: Props) {

  return (
    <>
      <Header />
      <Body>
        <TopSection />
        <Section
          title="(Se) Dépasser les obstacles"
          id="2"
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
              right: '0%',
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
          >

            <ProjectCard
              project={{
                imageUrl: 'gotame.jpg',
                title: 'Plateforme e-learning',
                githubUrl: 'coucou',
                // description:
              }}
            />

            <Button
              sx={{
                background: `radial-gradient(${Colors.TURQUOISE} 0%, ${Colors.BLEU_OUTREMER} 100%)`,
                color: Colors.ORANGE,
                fontSize: '30pt',
                fontWeight: '400',
                fontFamily: 'Cabin',
                width: '508px',
                height: '74px',
                borderRadius: '50px',
                textTransform: 'none',
                border: `1px solid ${Colors.BLEU}`,
                padding: '12px 0',
                boxShadow: `2px 2px 3px 0 ${Colors.BLEU} inset`,
              }}
            >
              Je kiffe ces projets ! Je m'engage
            </Button>
            <p>content of section here</p>
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