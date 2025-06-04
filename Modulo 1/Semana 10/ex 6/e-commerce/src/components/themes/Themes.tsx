import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c2a39a",
    },
    background: {
      default: "#e1d1c8",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#001600",
    },
    background: {
      default: "#0a3007",
      paper: "#002200",
    },
  },
});