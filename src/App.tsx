import { theme } from "./core/theme";
import Layout from "./views/Layout";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>titre</h1>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
