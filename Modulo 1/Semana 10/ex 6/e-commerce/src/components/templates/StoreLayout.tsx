import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

type StoreLayoutProps = {
  children: React.ReactNode;
};

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            🌿 PlantShop
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>{children}</Container>

      <Box component="footer" sx={{ mt: 4, py: 2, textAlign: "center", backgroundColor: "background.paper" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} PlantShop. Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default StoreLayout;
