// Core styles
import { Box } from '@mui/material';
import { Colors } from '../core/colors';

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import TopSection from '../components/Sections/TopSection/TopSection';

// Page Sections
import LevelUp from '../components/Sections/LevelUp';
import Assoc from '../components/Sections/Assoc';
import GotAme from '../components/Sections/GotAme';
import Join from '../components/Sections/Join';
import Projects from './Projects';
import Experiences from '../components/Sections/Experiences';


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
        <LevelUp />
        <GotAme />
        <Box
          display="flex"
          flexDirection="column"
          gap={'200px'}
          sx={{
            background: `linear-gradient(180deg, ${Colors.BLEU_NUIT} 30%, ${Colors.BLEU_OUTREMER} 90%)`,
          }}
        >
          <Projects />
          <Join />
          <Assoc />
          <Experiences />
        </Box>
      </Body >
      <Footer />
    </>
  )
}

interface Props {
  children: React.ReactNode,
}