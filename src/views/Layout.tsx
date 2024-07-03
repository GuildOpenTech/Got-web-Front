import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import Section from '../components/Section';
import { Box, Button, Hidden } from '@mui/material';
import TopSection from '../components/Sections/TopSection/TopSection';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Colors } from '../core/colors';
import CTAButton from '../core/ui/CTAButton';
import { ProjectProps } from '../components/ProjectCard/ProjectCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import ArrowNext from '../components/ArrowNext';

/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout({ }: Props) {

  /**
   * @type {Settings}: Settings of the slider
   */
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  /**
   * @type {ProjectProps[]}: List of projects (get by http request)
   */
  const projects: ProjectProps[] = [
    {
      imageUrl: 'gotHealth.svg',
      title: 'App de santé prédictive',
      githubUrl: 'coucou',
      description: [
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
      ]
    },
    {
      imageUrl: 'gotLearn.svg',
      title: 'Plateforme e-learning',
      githubUrl: 'coucou',
      description: [
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
      ]
    },
    {
      imageUrl: 'gotHealth.svg',
      title: 'Plateforme e-learning',
      githubUrl: 'coucou',
      description: [
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
      ]
    },
    {
      imageUrl: 'gotHealth.svg',
      title: 'Plateforme e-learning',
      githubUrl: 'coucou',
      description: [
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
        { point: 'apprendre en développant des projets' },
      ]
    },
  ]

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
            <Box
              className='slider-container'
              sx={{
                paddingX: '17px',
                marginTop: '56px',
              }}
            >
              <Slider {...settings}>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        project={{
                          imageUrl: project.imageUrl,
                          title: project.title,
                          githubUrl: project.githubUrl,
                          description: project.description ? project.description : []
                        }}
                      />
                    )
                  })
                }
              </Slider>
            </Box>
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