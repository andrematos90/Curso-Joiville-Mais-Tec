import React from "react";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "./PlantIcon.css";

type PlantIconProps = {
  size: "sm" | "md" | "lg";
};

const PlantIcon: React.FC<PlantIconProps> = ({ size }) => {
  return <LocalFloristIcon className={`icon ${size}`} />;
};

export default PlantIcon;
