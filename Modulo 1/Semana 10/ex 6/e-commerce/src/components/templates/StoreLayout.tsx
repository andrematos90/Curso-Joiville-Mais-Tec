import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

type StoreLayoutProps = {
  children: React.ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const StoreLayout: React.FC<StoreLayoutProps> = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            🌿 PlantShop
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>{children}</Container>

      <Box
        component="footer"
        sx={{
          mt: 4,
          py: 2,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} PlantShop. Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default StoreLayout;
