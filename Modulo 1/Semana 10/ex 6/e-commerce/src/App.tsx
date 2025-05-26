import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Paper, Box, Switch } from "@mui/material";
import { lightTheme, darkTheme } from "./components/themes/Themes";
import PlantStore from "./pages/PlantStore";
import "./App.css"; // importa os estilos

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="app-container">
        <div className="content-wrapper">
          <div className="switch-container">
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode((prev) => !prev)}
              color="primary"
            />
          </div>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <PlantStore />
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
