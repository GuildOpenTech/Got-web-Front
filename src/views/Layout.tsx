import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import Section from '../components/Section';
import { Box, Button } from '@mui/material';
import TopSection from '../components/Sections/TopSection/TopSection';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Colors } from '../core/colors';
import CTAButton from '../core/ui/CTAButton';

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
            <Box
              display="flex"
              justifyContent="space-around"
            >

              <ProjectCard
                project={{
                  imageUrl: 'gotame.jpg',
                  title: 'Plateforme e-learning',
                  githubUrl: 'coucou',
                  // description:
                }}
              />
              <ProjectCard
                project={{
                  imageUrl: 'gotame.jpg',
                  title: 'Plateforme e-learning',
                  githubUrl: 'coucou',
                  // description:
                }}
              />
              <ProjectCard
                project={{
                  imageUrl: 'gotame.jpg',
                  title: 'Plateforme e-learning',
                  githubUrl: 'coucou',
                  // description:
                }}
              />
            </Box>
            <Box
              textAlign='center'
              width='100%'
            >
              <CTAButton
                href="/inscription"
                style={{
                  width: '508px',
                  height: '74px',
                  fontSize: '30px',
                  fontWeight: '400',
                }}
              >
                Je kiffe ces projets ! Je m'engage
              </CTAButton>

            </Box>
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