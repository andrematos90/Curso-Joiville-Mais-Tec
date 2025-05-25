import React, { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { lightTheme, darkTheme } from "./components/themes/Themes";
import PlantStore from "./pages/PlantStore";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      {/* Botão de alternância de tema fixado no canto inferior direito */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999,
          bgcolor: "background.paper",
          borderRadius: "50%",
          boxShadow: 3,
        }}
      >
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      {/* Página principal da loja de plantas */}
      <PlantStore />
    </ThemeProvider>
  );
};

export default App;
