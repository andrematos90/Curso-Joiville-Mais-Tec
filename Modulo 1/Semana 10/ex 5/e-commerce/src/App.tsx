import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Paper, IconButton } from "@mui/material";
import { lightTheme, darkTheme } from "./components/themes/Themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PlantGrid from "./components/organisms/PlantGrid";
import type { Plant } from "./types/Plant";


const plants: Plant[] = [
  { id: 1, name: "Samambaia", price: 29.9, light: "shade" },
  { id: 2, name: "Cacto", price: 39.9, light: "sun" },
  { id: 3, name: "Orquídea", price: 49.9, light: "shade" },
  { id: 4, name: "Suculenta", price: 19.9, light: "sun" },
];


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ minHeight: "100vh", padding: "16px" }} square>
        <IconButton onClick={() => setIsDarkMode(!isDarkMode)} color="primary">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <h1>🌿 Nossas Plantas</h1>
        <PlantGrid plants={plants} />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
