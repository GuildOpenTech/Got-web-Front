import { createTheme } from "@mui/material";
import { Colors } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY,
    },
    secondary: {
      main: Colors.SECONDARY,
    },
  },
  typography: {
    fontFamily: 'Cabin',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {},
    },
  },
});

export { theme };
