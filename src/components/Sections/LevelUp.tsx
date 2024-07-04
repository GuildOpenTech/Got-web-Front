import { Box } from "@mui/material";
import Section from "../Section";

export default function LevelUp(){
  return (
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
  )
}