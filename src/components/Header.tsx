import Box from "@mui/material/Box";
import { Colors } from "../core/colors";
import Navbar from "./NavBar/Navbar";

export default function Header() {

  const handleClick = () => {
    if (window.location.href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      bgcolor={Colors.BLEU_NUIT}
      sx={{
        width: '100 %',
        height: '130px',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 0,
        zIndex: 100,
      }}
    >
      <img
        onClick={handleClick}
        src="/src/assets/LOGO_TxtBlc_99px_desvg.webp"
        alt="Logo Guild Open Tech"
        style={{
          width: '99px',
          marginLeft: "58px",
          cursor: 'pointer',
        }}
      />
      <Navbar />
    </Box>
  )
}
