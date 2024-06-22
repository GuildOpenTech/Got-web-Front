import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./core/theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Vite + React</h1>
        <div className="card">
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
