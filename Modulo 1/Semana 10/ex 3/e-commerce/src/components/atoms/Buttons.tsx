import React from "react";
import { Button as MuiButton } from "@mui/material";
import "./Button.css";

type ButtonProps = {
  variant: "primary" | "secundary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      className={`button ${variant}`}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
